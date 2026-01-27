import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  restaurantId: null,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      // Enforce single restaurant
      if (state.restaurantId && state.restaurantId !== item.restaurantId) {
        // Clear cart if adding from a different restaurant
        state.items = [];
        state.restaurantId = item.restaurantId;
      }
      if (!state.restaurantId) {
        state.restaurantId = item.restaurantId;
      }
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.total = state.items.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0);
    },
    removeItem(state, action) {
      const id = action.payload;
      const idx = state.items.findIndex((i) => i.id === id);
      if (idx > -1) {
        if (state.items[idx].quantity > 1) {
          state.items[idx].quantity -= 1;
        } else {
          state.items.splice(idx, 1);
        }
      }
      if (state.items.length === 0) {
        state.restaurantId = null;
      }
      state.total = state.items.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0);
    },
    clearCart(state) {
      state.items = [];
      state.restaurantId = null;
      state.total = 0;
    },
    setCart(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { addItem, removeItem, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
