import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counterValue: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counterValue++;
    },
    decrement(state) {
      state.counterValue--;
    },
    incrementby5(state, action) {
      state.counterValue = state.counterValue + action.payload;
    },
    decrementby5(state, action){
      state.counterValue = state.counterValue - action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;