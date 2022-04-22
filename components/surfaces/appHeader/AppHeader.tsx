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
    <div
      className={`flex flex-row min-h-[8vh] text-secondary bg-primary-400 md:grid md:grid-cols-3 md:text-center`}
    >
      <SearchBar searchData={[...mockSearchBarProps.alt.searchData]} />
      <SpacePicker spaces={[...mockSpacePickerProps.base.spaces]} />
      <div className="w-[20%] md:w-1/3 m-auto md:mr-10">
        <div className="mr-5 md:mr-0 rounded-full h-10 w-10 bg-highlight m-auto hover:bg-secondary"></div>
      </div>
    </div>
  );
};

export default AppHeader;
