import styles from './AppHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../../inputs/searchBar/SearchBar';

export interface IAppHeader {
  auth: boolean;
}

const AppHeader: React.FC<IAppHeader> = ({ auth }) => {
  return (
    <div className={`h-20 bg-gray grid grid-cols-3 text-slate text-center`}>
      <SearchBar sampleTextProp='' />

      <div className='flex mx-auto'>
        <div className='my-auto'>Space Picker</div>
        <FontAwesomeIcon icon={faAngleDown} className='my-auto ml-2' size='lg'/>
      </div>
      <div className='justify-self-end mr-10 rounded-full h-10 w-10 bg-indigo my-auto hover:bg-slate'></div>
    </div>
  )
};

export default AppHeader;
