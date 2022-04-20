//import styles from './AppHeader.module.css';
import SearchBar from '../../inputs/searchBar/SearchBar';
import { mockSearchBarProps } from '../../inputs/searchBar/SearchBar.mocks';
import SpacePicker from '../../navigation/spacePicker/SpacePicker';
import { mockSpacePickerProps } from '../../navigation/spacePicker/SpacePicker.mocks';

export interface IAppHeader {
  auth: boolean;
}

const AppHeader: React.FC<IAppHeader> = ({ auth }) => {
  return (
    <div className={`flex flex-row min-h-[8vh] text-slate bg-gray md:grid md:grid-cols-3 md:text-center`}>
      <SearchBar searchData={[...mockSearchBarProps.alt.searchData]} />
      <SpacePicker spaces={[...mockSpacePickerProps.base.spaces]} />
      <div className='w-1/3 my-auto'>
        <div className='mx-auto md:justify-self-end md:mr-10 rounded-full h-10 w-10 bg-indigo my-auto hover:bg-slate'></div>
      </div>
    </div>
  )
};

export default AppHeader;
