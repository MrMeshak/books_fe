import styles from './libraryEmpty.module.scss';

export interface ILibraryEmptyProps {}

export default function LibraryEmpty(props: ILibraryEmptyProps) {
  return (
    <div className={styles.libraryEmpty}>
      <img src="/images/empty.jpg" alt="Person with magnifying glass surrounded by question marks" />
      <h3>We could not find a match for your search, try adjusting your search terms or filters</h3>
    </div>
  );
}
