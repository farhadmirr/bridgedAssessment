// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import domainReducer from './domainSlice';

const store = configureStore({
  reducer: {
    domains: domainReducer,
  },
});

export default store;
