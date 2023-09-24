import LibraryGallery from './libraryGallery';
import SearchStatsBar from './searchStatsBar';
import { useLibraryLibraryData, useLibrarySearchStr, useLibraryStatus } from '../../store/libraryStore';
import LibraryError from './libraryError';
import LibraryLoading from './libraryLoading';
import LibraryEmpty from './libraryEmpty';
import LibraryAbout from './libraryAbout';
import LibraryPagination from './libraryPagination';

export interface ILibraryProps {}

export default function Library(props: ILibraryProps) {
  const libraryStatus = useLibraryStatus();
  const libraryData = useLibraryLibraryData();
  const searchStr = useLibrarySearchStr();

  if (libraryStatus.status === 'error') {
    return <LibraryError />;
  }

  if (libraryStatus.status === 'loading') {
    return <LibraryLoading />;
  }

  if (!libraryData) {
    return <LibraryAbout />;
  }

  if (libraryData.totalItems === 0) {
    return <LibraryEmpty />;
  }

  if (libraryStatus)
    return (
      libraryData && (
        <div>
          <SearchStatsBar searchStr={searchStr} totalItems={libraryData.totalItems} />
          <LibraryGallery books={libraryData.items} />
          <LibraryPagination />
        </div>
      )
    );
}
