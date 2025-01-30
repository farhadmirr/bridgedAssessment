// src/redux/domainSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchDomains,addDomain,deleteDomain,updateDomain } from '../../../api/api';

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
      .addCase(addDomain.pending,(state)=>{
        state.loading= true;
        state.error= null;
      })
      .addCase(addDomain.rejected,(state)=>{
        state.loading= false;
        state.error= error.error.message;
      })
      .addCase(addDomain.fulfilled, (state, action) => {
        state.loading=false
        state.data.push(action.payload);
      })
      // Update domain
      .addCase(updateDomain.pending,(state)=>{
        state.loading= true;
        state.error= null;
      })
      .addCase(updateDomain.rejected,(state)=>{
        state.loading= false;
        state.error= error.error.message;
      })
      .addCase(updateDomain.fulfilled, (state, action) => {
        const index = state.data.findIndex((d) => d.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        state.loading=false
      })
      // Delete domain
      .addCase(deleteDomain.pending,(state)=>{
        state.loading= true;
        state.error= null;
      })
      .addCase(deleteDomain.rejected,(state)=>{
        state.loading= false;
        state.error= error.error.message;
      })
      .addCase(deleteDomain.fulfilled, (state, action) => {
        state.loading=false
        state.data = state.data.filter((d) => d.id !== action.payload);
      });
  },
});

export default domainSlice.reducer;
