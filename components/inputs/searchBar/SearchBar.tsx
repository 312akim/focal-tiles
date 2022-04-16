import styles from './SearchBar.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export interface ISearchBar {
  searchData: Array<{displayName: string, onClick: () => void}>;
}

const SearchBar: React.FC<ISearchBar> = ({searchData}) => {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <div className='flex justify-self-start ml-10'>
      <label htmlFor='headerSearchInput' className='my-auto pr-4'>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </label>
      <div className='my-auto'>
      <input
        data-testid='headerSearchInput'
        id='headerSearchInput'
        placeholder='Search' 
        className={`text-indigo my-auto text-left border-2 border-white pl-2 ${search === '' ? `w-32` : `w-48`} focus:w-48 focus:border-red transition-all`} 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onBlur={() => setShow(false)}
        onFocus={() => setShow(true)}
      />
      <div className={`${show && search !== '' ? '' : 'hidden'} text-indigo text-left pl-2 mt-1 border-2 border-indigo h-auto w-48 bg-white absolute`}>
        {
          searchData.map(({displayName}) => {
            return (
              <div key={displayName}>{displayName}</div>
            )
          })
        }
      </div>
    </div>
  </div>
  );
};

export default SearchBar;
