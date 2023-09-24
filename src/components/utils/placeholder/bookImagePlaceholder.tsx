import { BookIcon } from '../icons/icons';
import styles from './bookImagePlaceholder.module.scss';

export function BookImagePlaceholder() {
  return (
    <div className={styles.bookImagePlaceholder}>
      <BookIcon />
      <p>no image</p>
    </div>
  );
}
