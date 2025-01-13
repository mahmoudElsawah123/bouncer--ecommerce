import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './Store';

export interface tab {
  value: number
}

const initialState: tab = {
  value : 1
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    handleTabId: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { handleTabId } = tabSlice.actions;
export const selectTab = (state: RootState) => state.tabSlice.value

export default tabSlice.reducer;
