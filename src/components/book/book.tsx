import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLibraryActions, useLibraryBookData, useLibraryBookStatus } from '../../store/libraryStore';
import BookInfo from './bookInfo';
import BookEmpty from './bookEmpty';
import BookError from './bookError';
import BookLoading from './bookLoading';

export interface IBookProps {}

export default function Book(props: IBookProps) {
  const navigate = useNavigate();
  const bookStatus = useLibraryBookStatus();
  const bookData = useLibraryBookData();

  if (bookStatus.status === 'error') {
    return <BookError />;
  }

  if (bookStatus.status === 'loading') {
    return <BookLoading />;
  }

  if (!bookData) {
    return <BookEmpty />;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>{bookData.volumeInfo.title}</p>
    </div>
  );
}
