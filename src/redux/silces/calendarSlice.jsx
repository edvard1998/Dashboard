import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CALENDAR_API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;
const initialState = {
  totalValues: [
    { name: 'Total Users', totalValue: 0 },
    { name: 'Total Calendars', totalValue: 0 },
    { name: 'Total Events', totalValue: 0 },
    { name: 'Total Tickets', totalValue: 0 }
  ],
  chartData: [],
  chartSeriesValues: [],
  usersData: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('calendar/fetchData', async () => {
  try {
    const response = await axios.get(CALENDAR_API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    sort: (state, action) => {
      if (!action.payload) {
        state.usersData.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        state.usersData.sort((a, b) => b.name.localeCompare(a.name));
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
          
        const { chartData } = action.payload;

        const newXAxis = {
          ...chartData.xAxis,
          lineWidth: 0,
          tickLength: 0,
        };

        const seriesData = [
          ...chartData.series
        ];

        const newSeriesData = seriesData.map(seria => {
          return {
            ...seria,
            linecap: 'square',
            type: 'line',
            marker: {
              enabled: false
            }
          }
        });

        action.payload.chartData = {
          ...chartData,
          credits: {
            enabled: false
          },
          xAxis: newXAxis,
          series: newSeriesData
        };

        const start = 0;
        const end = 4;
        const totalValuesFromAPI = Object.values(action.payload).slice(start, end);

        state.totalValues = state.totalValues.map((data, index) => {
          data.totalValue = totalValuesFromAPI[index].toLocaleString();
          
          return data;
        });

        state.chartSeriesValues = action.payload.chartData.series.map(seria => {
          return {
            name: seria.name,
            value: seria.data[seria.data.length - 1][1].toLocaleString(),
            borderColor: seria.color
          }
        });

        state.chartData = action.payload.chartData;
        state.usersData = action.payload.users.sort((a, b) => a.name.localeCompare(b.name));
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectChartData = (state) => state.calendar.chartData;
export const selectUsersData = (state) => state.calendar.usersData;
export const selectTotalValues = (state) => state.calendar.totalValues;
export const chartSeriesValues = (state) => state.calendar.chartSeriesValues;
export const { sort } = calendarSlice.actions;

export default calendarSlice.reducer;