import styles from './libraryBookCard.module.scss';
import { Link } from 'react-router-dom';
import { ILibraryApi_Book } from '../../services/libraryApi/libraryApi.model';
import { BookImagePlaceholder } from '../utils/placeholder/bookImagePlaceholder';

export interface ILibraryBookCardProps {
  book: ILibraryApi_Book;
}

export default function LibraryBookCard({ book }: ILibraryBookCardProps) {
  const { title, publishedDate, authors, imageLinks } = book.volumeInfo;
  return (
    <div className={styles.libraryBookCard}>
      <div className={styles.libraryBookCard_thumbnail}>
        <Link to={`/book/${book.id}`}>{imageLinks?.thumbnail ? <img src={imageLinks.thumbnail} alt="Book Cover IMage" /> : <BookImagePlaceholder />}</Link>
      </div>
      <div className={styles.libraryBookCard_info}>
        {title && (
          <h3>
            <Link to={`/book/${book.id}`}>{title}</Link>
          </h3>
        )}
        <p>
          {publishedDate && publishedDate.substring(0, 4)} - {authors && authors.join(' & ')}{' '}
        </p>
      </div>
    </div>
  );
}
