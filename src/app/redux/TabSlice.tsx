import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './Store';

export interface tab {
  cartData: {
    num : number,
    price : number
  }
}

const initialState: tab = {
  cartData : {
    num : 0,
    price : 0.00
  }
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    handleTabId: (state, action) => {
      state.cartData = action.payload
    }
  }
});

export const { handleTabId } = tabSlice.actions;
export const selectTab = (state: RootState) => state.tabSlice.cartData

export default tabSlice.reducer;
