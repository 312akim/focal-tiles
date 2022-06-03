import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type AppState = {
  currentSpace: number;
  spaces: Array<ISpace>;
  title: string;
};

export interface ISpace {
  displayName: string;
  id: number;
}

const mockSpaces = [
    {
      displayName: 'Space Demo 10',
      id: 10
    },
    {
      displayName: 'Space Demo 20',
      id: 20
    },
    {
      displayName: 'Space Demo 30',
      id: 30
    },
    {
      displayName: 'Space Demo 40',
      id: 40
    },
]

const initialState: AppState = {
  currentSpace: 0,
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
      console.log(state.spaces[action.payload]);
    },
    switchSpace: (state, action: PayloadAction<number>) => {
      state.currentSpace = action.payload;
    },
  },
});

export const { createSpace, deleteSpace, switchSpace } = appSlice.actions;

export const selectAppCurrentSpace = (state: RootState) => state.app.currentSpace;
export const selectAppSpaces = (state: RootState) => state.app.spaces;
export const selectAppTitle = (state: RootState) => state.app.title;

export default appSlice.reducer;
