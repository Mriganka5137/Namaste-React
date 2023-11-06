import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      //   state.items = []; ---- This will not work
      state.items.length = 0;
    },
  },
});

// console.log(cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
