import styles from './libraryLoading.module.scss';

export interface ILibraryLoadingProps {}

export default function LibraryLoading(props: ILibraryLoadingProps) {
  return (
    <div className={styles.libraryLoading}>
      <div className={styles.libraryLoading_spinner}></div>
    </div>
  );
}
