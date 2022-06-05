import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockTaskSpaceProps } from '../components/spaces/taskSpace/TaskSpace.mocks';
import type { RootState } from './store';

export type AppState = {
  selectedSpaceIndex: number;
  spaces: Array<ISpace>;
  title: string;
};

export interface ISpace {
  displayName: string;
  id: number;
  tiles: Array<{
    title: string;
    status: string;
    notes: string;
    dueDate: string;
    timer: number;
    id: number;
    index: number;
  }>;
}

const mockSpaces = [
    {
      displayName: 'Space Demo 10',
      id: 10,
      tiles: mockTaskSpaceProps.base.data,
    },
    {
      displayName: 'Space Demo 20',
      id: 20,
      tiles: mockTaskSpaceProps.base.data,
    },
    {
      displayName: 'Space Demo 30',
      id: 30,
      tiles: mockTaskSpaceProps.base.data,
    },
    {
      displayName: 'Space Demo 40',
      id: 40,
      tiles: mockTaskSpaceProps.base.data,
    },
]

const initialState: AppState = {
  selectedSpaceIndex: 0,
  spaces: mockSpaces,
  title: 'Focal Demo',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    createSpace: (state, action: PayloadAction<ISpace>) => {
      state.spaces.push(action.payload);
    },
    deleteSpace: (state, action: PayloadAction<number>) => {
      console.log('Space below delete console.log');
      console.log(state.spaces[action.payload]);
    },
    switchSpace: (state, action: PayloadAction<number>) => {
      state.selectedSpaceIndex = action.payload;
    },
    updateTileStatus: (state, action: PayloadAction<{index: number, status: string}>) => {
      state.spaces[state.selectedSpaceIndex].tiles[action.payload.index].status = action.payload.status;
    },
  },
});

export const { createSpace, deleteSpace, switchSpace, updateTileStatus } = appSlice.actions;

export const selectAppSelectedSpaceIndex = (state: RootState) => state.app.selectedSpaceIndex;
export const selectAppSpaces = (state: RootState) => state.app.spaces;
export const selectAppTitle = (state: RootState) => state.app.title;

export default appSlice.reducer;
