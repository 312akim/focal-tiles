// Mock props to test interface props
import { ISearchBar } from './SearchBar';

const base: ISearchBar = {
  searchData: [
    {
      displayName: 'Test1',
      onClick: () => { console.log('clicked1')}
    },
    {
      displayName: 'Test2',
      onClick: () => { console.log('clicked2')}
    },
    {
      displayName: 'Test3',
      onClick: () => { console.log('clicked3')}
    },
  ]
};

const alt: ISearchBar = {
  searchData: [
    {
      displayName: 'Test4',
      onClick: () => { console.log('clicked4')}
    },
    {
      displayName: 'Test5',
      onClick: () => { console.log('clicked5')}
    },
    {
      displayName: 'Test6',
      onClick: () => { console.log('clicked6')}
    },
  ]
};

export const mockSearchBarProps = {
  base,
  alt,
};
