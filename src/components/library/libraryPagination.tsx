import { useLibraryActions, useLibraryLibraryData, useLibraryPagination, useLibraryStatus } from '../../store/libraryStore';
import styles from './libraryPagination.module.scss';

export interface ILibraryPaginationProps {}

export default function LibraryPagination(props: ILibraryPaginationProps) {
  const libraryData = useLibraryLibraryData();
  const libraryStatus = useLibraryStatus();
  const { status, page, resultsPerPage } = useLibraryPagination();
  const actions = useLibraryActions();

  const handleOnClick = () => {
    actions.loadMore();
  };

  if (!libraryData || libraryStatus.status === 'error' || libraryStatus.status === 'loading') {
    return null;
  }

  if (libraryData.totalItems <= page * resultsPerPage + resultsPerPage) {
    return null;
  }

  //todo: If(libraryPagination status)

  if (status.status === 'error') {
    return <LibraryPaginationError />;
  }

  if (status.status === 'loading') {
    return <LibraryPaginationLoading />;
  }

  return (
    <div className={styles.libraryPagination}>
      <button onClick={handleOnClick}>Load More</button>
    </div>
  );
}

function LibraryPaginationError() {
  return (
    <div>
      <p>Error loading data</p>
    </div>
  );
}

function LibraryPaginationLoading() {
  return (
    <div>
      <p>Loading</p>
    </div>
  );
}
