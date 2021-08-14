import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState : {
    value: 0,
    status: 'idle',
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

});

export const { incrementByAmount } = appSlice.actions;


export const appCount = (state) => state.counter.value;


export default appSlice.reducer;
