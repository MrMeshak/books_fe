import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLibraryActions } from '../store/libraryStore';
import Book from '../components/book/book';
import BookNav from '../components/book/bookNav';

export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  const { id = '' } = useParams();
  const actions = useLibraryActions();

  useEffect(() => {
    actions.fetchBook(id);
    return actions.cleanUpBook;
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      <BookNav />
      <Book />
    </div>
  );
}
