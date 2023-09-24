import { useParams } from 'react-router-dom';
import { useLibraryLibraryData } from '../../store/libraryStore';

export interface IBookProps {}

interface RouteParams {
  id: string;
}

export default function Book(props: IBookProps) {
  return (
    <div>
      <button>Back</button>
    </div>
  );
}
