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

export async function fetchLibraryData(): Promise<FetchLibraryDataResult> {
  let data;

  try {
    const res = await fetch(import.meta.env.G_BOOKS_API_URL);
    data = (await res.json()) as ILibraryApi_Data | ILibraryApi_Error;
  } catch {
    return {
      __typename: 'IFetchLibraryDataError',
      message: 'oops something went wrong'
    };
  }

  if ('error' in data) {
    return {
      __typename: 'IFetchLibraryDataError',
      message: 'oops something went wrong',
      errorData: data
    };
  }

  return {
    __typename: 'IFetchLibraryDataSuccess',
    message: 'Success',
    data: data
  };
}
