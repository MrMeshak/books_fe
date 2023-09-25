import styles from './bookLoading.module.scss';

export interface IBookLoadingProps {}

export default function BookLoading(props: IBookLoadingProps) {
  return (
    <div className={styles.bookLoading}>
      <div className={styles.bookLoading_spinner}></div>
    </div>
  );
}
