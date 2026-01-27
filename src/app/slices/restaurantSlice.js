
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRestaurants } from '../../services/restaurant.service';

const initialState = {
  restaurants: [],
  currentRestaurant: null,
  loading: false,
  error: null,
};


export const fetchRestaurantsAsync = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async (params, { rejectWithValue }) => {
    try {
      const res = await fetchRestaurants(params);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch restaurants');
    }
  }
);

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurants(state, action) {
      state.restaurants = action.payload;
    },
    setCurrentRestaurant(state, action) {
      state.currentRestaurant = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload.restaurants || [];
      })
      .addCase(fetchRestaurantsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setRestaurants, setCurrentRestaurant, setLoading, setError } = restaurantSlice.actions;
export default restaurantSlice.reducer;
