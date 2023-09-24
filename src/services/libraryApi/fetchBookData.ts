import { ILibraryApi_Book, ILibraryApi_Error } from './libraryApi.model';

export interface IFetchBookDataError {
  __typename: 'IFetchBookDataError';
  message: string;
  errorData?: ILibraryApi_Error;
}

export interface IFetchBookDataSuccess {
  __typename: 'IFetchBookDataSuccess';
  message: string;
  data: ILibraryApi_Book;
}

export type FetchBookDataResult = IFetchBookDataSuccess | IFetchBookDataError;

export async function fetchBookData(id: string): Promise<FetchBookDataResult> {
  let res: Response;
  try {
    res = await fetch('https://www.googleapis.com/books/v1/volumes/' + id);
  } catch {
    return {
      __typename: 'IFetchBookDataError',
      message: 'Error - fetch failed'
    };
  }
  let data: ILibraryApi_Book | ILibraryApi_Error;
  try {
    data = (await res.json()) as ILibraryApi_Book | ILibraryApi_Error;
  } catch {
    return {
      __typename: 'IFetchBookDataError',
      message: 'Error - failed to parse Json'
    };
  }

  if ('error' in data) {
    return {
      __typename: 'IFetchBookDataError',
      message: `Error - ${data.error.message} (${data.error.code})`,
      errorData: data
    };
  }

  return {
    __typename: 'IFetchBookDataSuccess',
    message: 'Success',
    data: data
  };
}
