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
  let res;
  try {
    res = await fetch('https://www.googleapis.com/books/v1' + queryStr);
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
