// src/redux/domainSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://6797aa2bc2c861de0c6d964c.mockapi.io/domain';

// Async actions for API calls
export const fetchDomains = createAsyncThunk('domains/fetchDomains', async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
});

export const addDomain = createAsyncThunk('domains/addDomain', async (newDomain) => {
  const response = await axios.post(API_BASE_URL, newDomain);
  return response.data;
});

export const updateDomain = createAsyncThunk('domains/updateDomain', async ({ id, updatedData }) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
  return response.data;
});

export const deleteDomain = createAsyncThunk('domains/deleteDomain', async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
  return id;
});

const domainSlice = createSlice({
  name: 'domains',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch domains
      .addCase(fetchDomains.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDomains.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDomains.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add domain
      .addCase(addDomain.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      // Update domain
      .addCase(updateDomain.fulfilled, (state, action) => {
        const index = state.data.findIndex((d) => d.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      // Delete domain
      .addCase(deleteDomain.fulfilled, (state, action) => {
        state.data = state.data.filter((d) => d.id !== action.payload);
      });
  },
});

export default domainSlice.reducer;
