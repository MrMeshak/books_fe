import { create } from 'zustand';
import { FetchLibraryDataResult } from '../services/libraryApi/fetchLibraryData';

export type Search_Filter = { value: ''; label: 'Any View' } | { value: 'full'; label: 'Fully Viewable' } | { value: 'partial'; label: 'Partially Viewable' };

export type Search_Sort = { value: 'relevance'; label: 'relevance' } | { value: 'newest'; label: 'newest' };

export type Search_PrintType = { value: 'all'; label: 'all types' } | { value: 'books'; label: 'books' } | { value: 'magazines'; label: 'magazines' };

export type Search_Pagination = { page: number; resultsPerPage: number };

export interface IStatus {
  status: 'success' | 'loading' | 'error';
  message: string;
}

export interface ILibraryStore {
  searchStr: string;
  sort: Search_Sort;
  filter: Search_Filter;
  printType: Search_PrintType;
  pagination: Search_Pagination;

  queryStatus: 'success' | 'pending' | 'error';
  queryResult: FetchLibraryDataResult;

  actions: {
    search: () => void;
  };

  resolvers: {
    libraryPageLibrary: () => void;
    bookPageBook: () => void;
  };
}
