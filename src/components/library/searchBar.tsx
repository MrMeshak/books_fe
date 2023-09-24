import { useState } from 'react';
import styles from './searchBar.module.scss';
import { OptionsIcon, SearchIcon } from '../utils/icons/icons';
import { useLibraryActions } from '../../store/libraryStore';

export interface ISearchBarProps {}

export default function SearchBar(props: ISearchBarProps) {
  const actions = useLibraryActions();

  const [searchStr, setSearchStr] = useState('');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchStr === '') {
      return;
    }

    actions.search(searchStr);
    setSearchStr('');
  };

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input className={styles.searchBar_input} onChange={handleSearchInput} value={searchStr} type="search" id="" />
        <div className={styles.searchBar_controls}>
          <button type="submit">
            <SearchIcon />
          </button>
          <button type="button">
            <OptionsIcon />
          </button>
        </div>
      </form>
    </>
  );
}
