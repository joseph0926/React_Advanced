import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { getAllJobs, showLoading } from "../allJobs/allJobs-slice";

const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk("job/createJob", async (job, thunkAPI) => {
  try {
    const response = await fetch(`${url}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
      body: JSON.stringify(job),
    });

    if (response.status === 401) {
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue("인증오류가 발생하였습니다,,,");
    }
    if (!response.ok) {
      throw await response.json();
    }

    thunkAPI.dispatch(clearHandler());

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteJob = createAsyncThunk("job/deleteJob", async (jobId, thunkAPI) => {
  try {
    thunkAPI.dispatch(showLoading());

    const response = await fetch(`${url}/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    thunkAPI.dispatch(getAllJobs());

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const editJob = createAsyncThunk("job/editJob", async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await fetch(`${url}/jobs/${jobId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
      body: JSON.stringify(job),
    });

    if (response.status === 401) {
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue("인증오류가 발생하였습니다,,,");
    }
    if (!response.ok) {
      throw await response.json();
    }

    thunkAPI.dispatch(clearHandler());

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    changeHandler: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearHandler: () => {
      return { ...initialState };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Created");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Edited");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { changeHandler, clearHandler, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
