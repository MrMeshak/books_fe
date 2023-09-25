import styles from './bookNav.module.scss';
import { Link } from 'react-router-dom';
import { LeftArrowIcon } from '../utils/icons/icons';

export default function BookNav() {
  return (
    <div className={styles.bookNav}>
      <Link to={'..'} preventScrollReset={true}>
        <LeftArrowIcon /> back
      </Link>
    </div>
  );
}
