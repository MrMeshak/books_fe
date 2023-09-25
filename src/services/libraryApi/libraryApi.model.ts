export interface ILibraryApi_Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    pageCount: number;
    previewLink: string;
    infoLink: string;
  };
  searchInfo: {
    textSnippet: string;
  };
}

export interface ILibraryApi_Data {
  kind: string;
  totalItems: number;
  items: ILibraryApi_Book[];
}

export interface ILibraryApi_Error {
  error: {
    message: string;
    code: number;
    errors: {
      message: string;
      reason: string;
    }[];
    status: string;
  };
}
