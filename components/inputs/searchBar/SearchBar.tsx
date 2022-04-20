//import styles from './SearchBar.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export interface ISearchBar {
  searchData: Array<{displayName: string, onClick: () => void}>;
}

const SearchBar: React.FC<ISearchBar> = ({searchData}) => {
  const [userSearch, setUserSearch] = useState('');

  return (
    <div className='flex w-1/3 md:justify-self-start ml-5 md:ml-10'>
      <label htmlFor='headerSearchInput' className='my-auto pr-4'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='hover:cursor-pointer'/>
      </label>
      <div className='my-auto'>
        <input
          autoComplete='off'
          type='text'
          data-testid='headerSearchInput'
          id='headerSearchInput'
          placeholder='Search' 
          className={`text-indigo my-auto rounded text-center md:text-left border-2 border-white md:pl-2 w-16 focus:w-20 md:${userSearch === '' ? `w-32` : `w-48`} md:focus:w-48 focus:border-red transition-all`} 
          onChange={(e) => setUserSearch(e.target.value)}
          value={userSearch}
        />
      </div>
  </div>
  );
};

export default SearchBar;
