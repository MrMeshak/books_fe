import styles from './bookEmpty.module.scss';

export interface IBookEmptyProps {}

export default function BookEmpty(props: IBookEmptyProps) {
  return (
    <div className={styles.bookEmpty}>
      <img src="/images/empty" alt="" />
      <h3>Book could not be found</h3>
    </div>
  );
}
