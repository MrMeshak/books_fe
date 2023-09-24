import styles from './searchStatsBar.module.scss';

export interface ISearchStatBarProps {
  searchStr: string;
  totalItems: number;
}

export default function SearchStatBar({ searchStr, totalItems }: ISearchStatBarProps) {
  return (
    <div className={styles.searchStatsBar}>
      <h4>Results for "{searchStr}"</h4>
      <p>{totalItems} found</p>
    </div>
  );
}
