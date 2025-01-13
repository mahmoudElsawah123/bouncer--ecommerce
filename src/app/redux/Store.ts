import { configureStore } from '@reduxjs/toolkit';
import tabSlice from './TabSlice';

const Store = configureStore({
  reducer: {
    tabSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export type AppStore = typeof Store