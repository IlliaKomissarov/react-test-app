import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
axios.defaults.baseURL = "https://db-zenbittech-backend.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {

    try {
      const { data } = await axios.post("/users/register", credentials);
      toast.info("The verification letter was sent to your e-mail!");

      return data;
    } catch (error) {
      if (error.response.data) {
        const errorData = error.response.data;
        if (errorData.message) {
          toast.error(`${errorData.message}`);
        }
      } else {
        toast.error("Something went wrong!");
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      toast.error(
        `Something went wrong! Register first or check your email and password!`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (token === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.clear();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
