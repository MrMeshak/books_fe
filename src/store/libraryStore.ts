import { create } from 'zustand';
import { ILibraryApi_Data, ILibraryApi_Error } from '../services/libraryApi/libraryApi.model';
import { fetchLibraryData } from '../services/libraryApi/fetchLibraryData';
import { generateQueryStr } from './helpers/generateQueryStr';

export type Search_Sort = 'relevance' | 'newest';
export type Search_Filter = '' | 'full' | 'partial';
export type Search_PrintType = 'all' | 'books' | 'magazines';
export type Search_Pagination = { page: number; resultsPerPage: number };

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

  actions: {
    search: () => void;
  };

  resolvers: {
    libraryPageLibrary: () => void;
    bookPageBook: () => void;
  };
}

const useLibraryStore = create<ILibraryState>((set, get) => ({
  searchStr: 'bible',
  sort: 'relevance',
  filter: '',
  printType: 'all',
  pagination: { page: 0, resultsPerPage: 40 },

  status: {
    status: '',
    message: ''
  },
  errorData: undefined,
  LibraryData: undefined,

  actions: {
    search: async () => {
      const { searchStr, sort, filter, printType, pagination } = get();
      const queryStr = generateQueryStr(searchStr, sort, filter, printType, pagination);

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
        status: { status: 'success', message: queryResult.message },
        libraryData: queryResult.data,
        errorData: undefined
      }));
      return;
    }
  },

  resolvers: {
    libraryPageLibrary: () => {},
    bookPageBook: () => {}
  }
}));

export const useLibraryActions = () => useLibraryStore((state) => state.actions);
export const useLibraryStatus = () => useLibraryStore((state) => state.status);
