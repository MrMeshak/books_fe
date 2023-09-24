import styles from './libraryBookCard.module.scss';
import { ILibraryApi_Book } from '../../services/libraryApi/libraryApi.model';
import { BookIcon } from '../utils/icons/icons';

export interface ILibraryBookCardProps {
  book: ILibraryApi_Book;
}

export default function LibraryBookCard({ book }: ILibraryBookCardProps) {
  const { title, publishedDate, authors, imageLinks } = book.volumeInfo;
  return (
    <div className={styles.libraryBookCard}>
      <div className={styles.libraryBookCard_thumbnail}>{imageLinks?.thumbnail ? <img src={imageLinks.thumbnail} alt="" /> : <LibraryBookCardPlaceholder />}</div>
      <div className={styles.libraryBookCard_info}>
        <h3>{title}</h3>
        <p>
          {publishedDate.substring(0, 4)} - {authors.join(' & ')}
        </p>
        <p></p>
      </div>
    </div>
  );
}

export function LibraryBookCardPlaceholder() {
  return (
    <div className={styles.libraryBookCardPlaceholder}>
      <BookIcon />
      <p>no image</p>
    </div>
  );
}
