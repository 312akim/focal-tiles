//import styles from './SearchBar.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import DropDownMenu from '../../utils/dropdown/DropDownMenu';

export interface ISearchBar {
  searchData: Array<{displayName: string, onClick: () => void}>;
}

const SearchBar: React.FC<ISearchBar> = ({searchData}) => {
  const [hidden, setHidden] = useState(true);
  const [userSearch, setUserSearch] = useState('');

  return (
    <div className='flex justify-self-start ml-10'>
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
          className={`text-indigo my-auto text-left border-2 border-white pl-2 ${userSearch === '' ? `w-32` : `w-48`} focus:w-48 focus:border-red transition-all`} 
          onChange={(e) => setUserSearch(e.target.value)}
          value={userSearch}
          onBlur={() => {setHidden(true)
          console.log(hidden)}}
          onFocus={() => setHidden(false)}
        />
        <DropDownMenu hidden={hidden} empty={userSearch === '' ? true : false} displayData={searchData} width='w-48'/>
      </div>
  </div>
  );
};

export default SearchBar;
