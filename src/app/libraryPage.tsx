import NavBar from '../components/utils/navBar/navBar';
import SearchBar from '../components/library/searchBar';
import Library from '../components/library/library';
import styles from './libraryPage.module.scss';

export interface ILibraryPageProps {}

export default function LibraryPage(props: ILibraryPageProps) {
  return (
    <div className={styles.libraryPage}>
      <NavBar />
      <SearchBar />
      <Library />
    </div>
  );
}
