import { create } from 'zustand';
import { ILibraryApi_Book, ILibraryApi_Data, ILibraryApi_Error } from '../services/libraryApi/libraryApi.model';
import { fetchLibraryData } from '../services/libraryApi/fetchLibraryData';
import { generateQueryStr } from './helpers/generateQueryStr';
import { fetchBookData } from '../services/libraryApi/fetchBookData';

export type Search_Sort = 'relevance' | 'newest';
export type Search_Filter = '' | 'full' | 'partial';
export type Search_PrintType = 'all' | 'books' | 'magazines';

export type Search_Pagination = {
  status: IStatus;
  page: number;
  resultsPerPage: number;
};

export interface IStatus {
  status: 'success' | 'loading' | 'error' | '';
  message: string;
}

export interface ILibraryState {
  searchStr: string;
  sort: Search_Sort;
  filter: Search_Filter;
  printType: Search_PrintType;
  pagination: Search_Pagination;

  status: IStatus;
  errorData?: ILibraryApi_Error;
  libraryData?: ILibraryApi_Data;

  bookStatus: IStatus;
  bookErrorData?: ILibraryApi_Error;
  bookData?: ILibraryApi_Book;

  actions: {
    search: (searchStr: string) => void;
    loadMore: () => void;
    fetchBook: (id: string) => void;
    cleanUpBook: () => void;
  };
}

const useLibraryStore = create<ILibraryState>((set, get) => ({
  searchStr: 'Murder',
  sort: 'relevance',
  filter: '',
  printType: 'all',
  pagination: {
    status: {
      status: '',
      message: ''
    },
    page: 0,
    resultsPerPage: 40
  },

  status: {
    status: '',
    message: ''
  },
  errorData: undefined,
  LibraryData: undefined,

  bookStatus: {
    status: '',
    message: ''
  },
  bookErrorData: undefined,
  bookData: undefined,

  actions: {
    search: async (searchStr: string) => {
      const { sort, filter, printType, pagination } = get();
      const queryStr = generateQueryStr(searchStr, sort, filter, printType, pagination.page, pagination.resultsPerPage);

      console.log(queryStr);

      set(() => ({ status: { status: 'loading', message: 'fetching data' } }));

      const queryResult = await fetchLibraryData(queryStr);
      console.log(queryResult);

      if (queryResult.__typename === 'IFetchLibraryDataError') {
        set(() => ({
          status: { status: 'error', message: queryResult.message },
          libraryData: undefined,
          errorData: queryResult.errorData
        }));
        return;
      }

      set(() => ({
        searchStr: searchStr,
        status: { status: 'success', message: 'Success' },
        libraryData: queryResult.data,
        errorData: undefined
      }));
      return;
    },

    loadMore: async () => {
      const { libraryData, searchStr, sort, filter, printType, pagination } = get();

      if (!libraryData) {
        return;
      }

      const queryStr = generateQueryStr(searchStr, sort, filter, printType, pagination.page + 1, pagination.resultsPerPage);

      set(() => ({
        pagination: {
          ...pagination,
          status: { status: 'loading', message: 'Fetching more books' }
        }
      }));

      const queryResult = await fetchLibraryData(queryStr);
      console.log(queryResult);
      if (queryResult.__typename === 'IFetchLibraryDataError') {
        set(() => ({
          pagination: {
            ...pagination,
            status: { status: 'error', message: 'Error - could not fetch more books' }
          }
        }));
        return;
      }

      set(() => ({
        pagination: {
          ...pagination,
          status: { status: 'success', message: 'Success' },
          page: pagination.page + 1
        },
        libraryData: {
          ...queryResult.data,
          items: libraryData.items.concat(...queryResult.data.items)
        }
      }));
      return;
    },

    fetchBook: async (id: string) => {
      if (id === '') {
        set(() => ({
          bookStatus: { status: '', message: '' },
          bookErrorData: undefined,
          bookData: undefined
        }));
      }

      set(() => ({ bookStatus: { status: 'loading', message: 'loading' } }));

      const { libraryData } = get();
      if (libraryData) {
        const bookData = libraryData.items.find((item) => item.id === id);
        if (bookData) {
          set(() => ({
            bookStatus: { status: 'success', message: 'success' },
            bookErrorData: undefined,
            bookData: bookData
          }));
          return;
        }
      }

      const bookData = await fetchBookData(id);

      if (bookData.__typename === 'IFetchBookDataError') {
        set(() => ({
          bookStatus: { status: 'error', message: 'Error - fetch failed' },
          bookErrorData: bookData.errorData,
          bookData: undefined
        }));
        return;
      }

      set(() => ({
        bookStatus: { status: 'success', message: 'success' },
        bookErrorData: undefined,
        bookData: bookData.data
      }));
    },
    cleanUpBook: () =>
      set(() => ({
        bookStatus: { status: '', message: '' },
        bookErrorData: undefined,
        bookData: undefined
      }))
  }
}));

export const useLibraryActions = () => useLibraryStore((state) => state.actions);
export const useLibrarySearchStr = () => useLibraryStore((state) => state.searchStr);
export const useLibraryStatus = () => useLibraryStore((state) => state.status);
export const useLibraryLibraryData = () => useLibraryStore((state) => state.libraryData);
export const useLibraryErrorData = () => useLibraryStore((state) => state.errorData);
export const useLibraryPagination = () => useLibraryStore((state) => state.pagination);
export const useLibraryBookData = () => useLibraryStore((state) => state.bookData);
export const useLibraryBookStatus = () => useLibraryStore((state) => state.bookStatus);
