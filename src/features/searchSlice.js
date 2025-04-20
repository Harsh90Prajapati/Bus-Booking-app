// src/redux/searchSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Helpers to load/save from localStorage
export const loadFromLocalStorage = (key, fallback = null) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return fallback;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
};

// Async thunk for API call
export const fetchBuses = createAsyncThunk(
  "bus/fetchBuses",
  async ({ origin, destination, travelDate }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://uat.travl.tech/api/bus/search", {
        origin,
        destination,
        travelDate
      });

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue("Unexpected response from API.");
      }
    } catch (error) {
      return rejectWithValue(error.message || "API request failed");
    }
  }
);

export const fetchBusSeats = createAsyncThunk(
  "bus/fetchBusSeats",
  async ({ requestId, boardingPointId, dropingPointId, busKey }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://uat.travl.tech/api/bus/seatmap?resp=1", {
        requestId,
        boardingPointId,
        dropingPointId,
        busKey
      });

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue("Unexpected response from API.");
      }
    } catch (error) {
      return rejectWithValue(error.message || "API request failed");
    }
  }
);

// Load initial state from localStorage if exists
const initialState = {
  loading: false,
  error: null,
  results: loadFromLocalStorage("busResults", []),
  seats: loadFromLocalStorage("busSeats", []),
  selectedBus: loadFromLocalStorage("selectedBus", null),
};

const searchSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    setSelectedBus: (state, action) => {
      const busKey = action.payload;
      const tripDetails = state?.results?.data?.tripDetails;
      const foundBus = tripDetails?.filter(bus => bus?.busKey === busKey);
      state.selectedBus = foundBus || null;
      saveToLocalStorage("selectedBus", foundBus);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuses.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.results = [];
      })
      .addCase(fetchBuses.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        saveToLocalStorage("busResults", action.payload);
      })
      .addCase(fetchBuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBusSeats.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.seats = [];
      })
      .addCase(fetchBusSeats.fulfilled, (state, action) => {
        state.loading = false;
        state.seats = action.payload;
        saveToLocalStorage("busSeats", action.payload);
      })
      .addCase(fetchBusSeats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setSelectedBus } = searchSlice.actions;
export default searchSlice.reducer;
