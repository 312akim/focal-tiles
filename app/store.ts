import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;