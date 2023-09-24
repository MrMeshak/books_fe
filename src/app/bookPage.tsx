import { Link, useNavigate } from 'react-router-dom';
import Book from '../components/book/book';

export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Book />
    </div>
  );
}
