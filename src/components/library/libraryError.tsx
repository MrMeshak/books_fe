import styles from './libraryError.module.scss';

export interface ILibraryErrorProps {}

export default function LibraryError(props: ILibraryErrorProps) {
  return (
    <div className={styles.libraryError}>
      <img src="/images/error.jpg" alt="Error on a computer screen" />
      <h3>Oops, an error occurred. </h3>
    </div>
  );
}
