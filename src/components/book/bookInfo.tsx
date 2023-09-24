import { useLibraryBookData, useLibraryBookStatus } from '../../store/libraryStore';
import BookEmpty from './bookEmpty';

export interface IBookInfoProps {}

export default function BookInfo(props: IBookInfoProps) {
  return (
    <div>
      <h2>{bookData.volumeInfo.title}</h2>
    </div>
  );
}
