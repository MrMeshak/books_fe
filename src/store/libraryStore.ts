import { create } from 'zustand';

export type Filter = { value: 'full'; label: 'Fully Viewable' } | { value: 'partial'; label: 'Partially Viewable' } | { value: 'free-ebooks'; label: 'Free' } | { value: 'paid-ebooks'; label: 'Paid' };

export type Sort = { value: 'relevance'; label: 'relevance' } | { value: 'newest'; label: 'newest' };

export type PrintType = { value: 'all'; label: 'all' } | { value: 'books'; label: 'books' } | { value: 'magazines'; label: 'magazines' };

export interface IStatus {
  status: 'success' | 'loading' | 'error';
  message: string;
}

export interface IPagination {
  page: number;
  resultsPerPage: number;
}

export interface IBook {}

export interface LibraryStore {
  status: IStatus;

  sort: Sort;
  filters: Filter[];
  printType: PrintType;

  pagination: IPagination;
  searchStr: string;

  books: IBook[];

  actions: {
    search: () => void;
  };
}
