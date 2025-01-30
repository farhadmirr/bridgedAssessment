// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import domainReducer from './features/domainSlice/domainSlice';

const store = configureStore({
  reducer: {
    domains: domainReducer,
  },
});

export default store;
