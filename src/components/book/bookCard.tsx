import * as sanitizeHtml from 'sanitize-html';
import styles from './bookCard.module.scss';
import { ILibraryApi_Book } from '../../services/libraryApi/libraryApi.model';
import { BookImagePlaceholder } from '../utils/placeholder/bookImagePlaceholder';

export interface IBookCardProps {
  bookData: ILibraryApi_Book;
}

export default function BookCard({ bookData }: IBookCardProps) {
  const { title, authors, publisher, publishedDate, previewLink, pageCount } = bookData.volumeInfo;
  const description = sanitizeHtml(bookData.volumeInfo.description, { allowedTags: ['br', 'b', 'i'] });
  const thumbnail = bookData.volumeInfo?.imageLinks?.thumbnail;

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCard_thumbnail}>{thumbnail ? <img src={thumbnail + '&fife=w400-h600'} alt="Book Cover Image" /> : <BookImagePlaceholder />}</div>
      <div className={styles.bookCard_infoWrapper}>
        <div className={styles.bookCard_info}>
          {title && <h2>{title}</h2>}
          <p>
            {publishedDate && publishedDate.substring(0, 4)} - {authors && authors.join(' & ')}{' '}
          </p>
        </div>
        <div className={styles.bookCard_details}>
          <ul>
            {publisher && (
              <li>
                <b>publisher:</b> {publisher}
              </li>
            )}
            {pageCount && (
              <li>
                <b>pages:</b> {pageCount}
              </li>
            )}
            {previewLink && (
              <li>
                <a href={previewLink}>Preview</a>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.bookCard_description}>{description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}</div>
      </div>
    </div>
  );
}
