import BookPage from './app/bookPage';
import LibraryPage from './app/libraryPage';
import NavBar from './components/utils/navBar/navBar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
