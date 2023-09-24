import styles from './libraryGallery.module.scss';
import LibraryBookCard from './libraryBookCard';
import { ILibraryApi_Book } from '../../services/libraryApi/libraryApi.model';

export interface ILibraryGalleryProps {
  books: ILibraryApi_Book[];
}

export default function LibraryGallery({ books }: ILibraryGalleryProps) {
  return (
    <>
      <div className={styles.libraryGallery}>
        <div className={styles.libraryGallery_gallery}>
          {books.map((book) => (
            <LibraryBookCard book={book} key={book.id} />
          ))}
        </div>
      </div>
    </>
  );
}
