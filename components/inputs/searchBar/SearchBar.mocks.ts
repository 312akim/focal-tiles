// Mock props to test interface props
import { ISearchBar } from './SearchBar';

const base: ISearchBar = {
  searchData: [
    {
      displayName: 'SearchBar Test 1',
      onClick: () => { console.log('clicked1')}
    },
    {
      displayName: 'SearchBar Test 2',
      onClick: () => { console.log('clicked2')}
    },
    {
      displayName: 'SearchBar Test 3',
      onClick: () => { console.log('clicked3')}
    },
  ]
};

const alt: ISearchBar = {
  searchData: [
    {
      displayName: 'SearchBar Test 4',
      onClick: () => { console.log('clicked4')}
    },
    {
      displayName: 'SearchBar Test 5',
      onClick: () => { console.log('clicked5')}
    },
    {
      displayName: 'SearchBar Test 6',
      onClick: () => { console.log('clicked6')}
    },
    {
      displayName: 'SearchBar Test 7',
      onClick: () => { console.log('clicked6')}
    },
  ]
};

export const mockSearchBarProps = {
  base,
  alt,
};
