import styles from './libraryAbout.module.scss';

export interface ILibraryAboutProps {}

export default function LibraryAbout(props: ILibraryAboutProps) {
  return (
    <div className={styles.libraryAbout}>
      <img src="/images/books.jpg" alt="people with books" />
      <h3>Welcome to 👋 </h3>
      <h2>Luminary</h2>
      <p>Your best source for comprehensive book information, author details, and more. Simplify your book search with us.</p>

      <h4>Enter your search above</h4>
    </div>
  );
}
