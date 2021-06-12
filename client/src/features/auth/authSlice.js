import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks

  export const login = createAsyncThunk(
    'auth/getuser',
    async (payload, thunkAPI) => {
      try {
        const response = await axios.get("http://localhost:4000/getuser", { withCredentials: true });
        console.log(response.data);
        return response.data
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    },
  );

  export const logout = createAsyncThunk(
    'auth/logout',
    async (payload, thunkAPI) => {
      try {
        const response = await axios.get("http://localhost:4000/auth/logout", { withCredentials: true });
        return response.data
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    },
  );

const initialState = {
  loggedIn: false,
  userId: false,
  userName: false,
  socialId: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmailPassword: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    resetAuthState: () => initialState,
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if(action.payload === ''){
        state = initialState
      }else{
        console.log(action.payload);
        state.loggedIn = true;
        state.userId = action.payload._id;
        state.userName = action.payload.username;
        // state.socialId = action.payload;
      }
    },
    [login.rejected]: (state, action) => {
      state.userInfo = action.payload;
      state.user = false;
    },
    [logout.fulfilled]: (state) => {
      state = initialState;
    },
    [logout.rejected]: (state) => {
      state = initialState;
    },
  },
});

// export const {
//   setLoggedIn,
// } = authSlice.actions;

export const selectLoginStatus = (state) => state.auth.loggedIn;
export const selectUserId = (state) => state.auth.userId;
export const selectUserName = (state) => state.auth.userName;

export default authSlice.reducer;