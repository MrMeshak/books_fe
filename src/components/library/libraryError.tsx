import styles from './libraryError.module.scss';

export interface ILibraryErrorProps {
  errorMessage?: string;
}

export default function LibraryError({ errorMessage }: ILibraryErrorProps) {
  return (
    <div className={styles.libraryError}>
      <img src="/images/error.jpg" alt="Error on a computer screen" />
      {errorMessage ? <h3>{errorMessage}</h3> : <h3>Oops, an error occurred. </h3>}
    </div>
  );
}
