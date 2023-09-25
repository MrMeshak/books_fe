import { Link } from 'react-router-dom';
import { useLibraryBookData, useLibraryBookStatus } from '../../store/libraryStore';
import styles from './book.module.scss';
import BookEmpty from './bookEmpty';
import BookError from './bookError';
import BookLoading from './bookLoading';
import BookCard from './bookCard';
import { LeftArrowIcon } from '../utils/icons/icons';
import BookNav from './bookNav';

export interface IBookProps {}

export default function Book(props: IBookProps) {
  const bookStatus = useLibraryBookStatus();
  const bookData = useLibraryBookData();

  if (bookStatus.status === 'error') {
    return <BookError />;
  }

  if (bookStatus.status === 'loading') {
    return <BookLoading />;
  }

  if (bookStatus.status === '' || bookData === undefined) {
    return <BookEmpty />;
  }

  return (
    <div className={styles.book}>
      <BookCard bookData={bookData} />
    </div>
  );
}
