import { ILibraryApi_Data, ILibraryApi_Error } from './libraryApi.model';

export interface IFetchLibraryDataError {
  __typename: 'IFetchLibraryDataError';
  message: string;
  errorData?: ILibraryApi_Error;
}

export interface IFetchLibraryDataSuccess {
  __typename: 'IFetchLibraryDataSuccess';
  message: string;
  data: ILibraryApi_Data;
}

export type FetchLibraryDataResult = IFetchLibraryDataSuccess | IFetchLibraryDataError;

export async function fetchLibraryData(queryStr: string): Promise<FetchLibraryDataResult> {
  if (queryStr === '') {
    return {
      __typename: 'IFetchLibraryDataError',
      message: 'Error - queryStr must not be empty'
    };
  }
  console.log('query String', import.meta.env.VITE_G_BOOKS_SEARCH_API_URL + queryStr);
  let res;
  try {
    res = await fetch(import.meta.env.VITE_G_BOOKS_SEARCH_API_URL + queryStr);
  } catch {
    return {
      __typename: 'IFetchLibraryDataError',
      message: 'Error - fetch failed'
    };
  }
  let data;
  try {
    data = (await res.json()) as ILibraryApi_Data | ILibraryApi_Error;
  } catch {
    return {
      __typename: 'IFetchLibraryDataError',
      message: 'Error - failed to parse Json'
    };
  }

  console.log('data', data);

  if ('error' in data) {
    return {
      __typename: 'IFetchLibraryDataError',
      message: `Error - ${data.error.message} (${data.error.code})`,
      errorData: data
    };
  }

  return {
    __typename: 'IFetchLibraryDataSuccess',
    message: 'Success',
    data: data
  };
}
