import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API_BASE_URL = 'https://6797aa2bc2c861de0c6d964c.mockapi.io/domain';

// Async actions for API calls
export const fetchDomains = createAsyncThunk('domains/fetchDomains', async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
});
export const fetchDomain = createAsyncThunk('domains/fetchDomain', async () => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
});

export const addDomain = createAsyncThunk('domains/addDomain', async (newDomain) => {
  const response = await axios.post(API_BASE_URL, newDomain);
  return response.data;
});

export const updateDomain = createAsyncThunk('domains/updateDomain', async ({id, updatedData}) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
  return response.data;
});

export const deleteDomain = createAsyncThunk('domains/deleteDomain', async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
  return id;
});