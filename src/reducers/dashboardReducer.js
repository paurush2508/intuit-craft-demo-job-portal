import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  try {
    const storedJobsList = localStorage.getItem("jobsList");
    if (storedJobsList) {
      return JSON.parse(storedJobsList);
    } else {
      const response = await fetch("/jobs.json");
      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("jobsList", JSON.stringify(result));
        return result;
      } else {
        throw new Error("Failed to fetch jobs");
      }
    }
  } catch (error) {
    throw error;
  }
});

const dashboardReducerSlice = createSlice({
  name: "dashboard",
  initialState: {
    jobsList: [],
    isLoading: false,
  },
  reducers: {
    setJobList(state, action) {
      return {
        ...state,
        jobsList: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.jobsList = [];
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobsList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.jobsList = [];
        state.isLoading = false;
      });
  },
});

export const { setJobList } = dashboardReducerSlice.actions;
export default dashboardReducerSlice.reducer;
