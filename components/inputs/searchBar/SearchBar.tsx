//import styles from './SearchBar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export interface ISearchBar {
  searchData: Array<{ displayName: string; onClick: () => void }>;
}

const SearchBar: React.FC<ISearchBar> = ({ searchData }) => {
  const [userSearch, setUserSearch] = useState('');

  return (
    <div className="flex w-1/2 md:w-1/3 justify-start md:ml-10">
      <label htmlFor="headerSearchInput" className="my-auto ml-5 pr-2 md:pr-4">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hover:cursor-pointer"
        />
      </label>
      <div className="my-auto">
        <input
          autoComplete="off"
          type="text"
          data-testid="headerSearchInput"
          id="headerSearchInput"
          placeholder="Search"
          className={`text-highlight my-auto rounded text-center md:text-left border-2 border-white md:pl-2 w-24 md:${
            userSearch === '' ? `w-32` : `w-48`
          } md:focus:w-48 focus:border-red transition-all`}
          onChange={(e) => setUserSearch(e.target.value)}
          value={userSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
