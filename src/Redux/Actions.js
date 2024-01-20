import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FETCH_COUNTRIES } from '../Configurations/config';

export const fetchApiData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get(FETCH_COUNTRIES);
  return response.data;
});
