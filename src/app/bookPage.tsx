import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLibraryActions } from '../store/libraryStore';
import Book from '../components/book/book';
import NavBar from '../components/utils/navBar/navBar';

export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  const { id = '' } = useParams();
  const actions = useLibraryActions();

  useEffect(() => {
    actions.fetchBook(id);
  }, []);

  return (
    <div>
      <NavBar />
      <Book />
    </div>
  );
}
