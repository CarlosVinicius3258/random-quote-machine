import { createSlice } from '@reduxjs/toolkit';

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: '',
    author: '',
  },
  reducers: {
    getQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
  },
});

export const { getQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
