import styles from './bookError.module.scss';

export interface IBookErrorProps {}

export default function BookError(props: IBookErrorProps) {
  return (
    <div className={styles.bookError}>
      <img src="/images/error.jpg" alt="Error on a computer screen" />
      <h3>Oops, an error occurred</h3>
    </div>
  );
}
