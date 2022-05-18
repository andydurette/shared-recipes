import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks

export const getUserRecipes = createAsyncThunk(
    'api/userRecipe',
    async (payload, thunkAPI) => {
        const { getState } = thunkAPI;
        const state = getState();
      try {
        const response = await axios.post("/api/userRecipe", { params: {user_id: state.auth.userId}});
        console.log(response.data);
        return response.data
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    },
  );

const initialState = {
    addRecipes: {},
  };

const addRecipeSlice = createSlice({
    name: 'addRecipe',
    initialState,
    reducers: {},
    // extraReducers: {
    //     [getUserRecipes.fulfilled] : (state, action) => {
    //         state.myRecipes = action.payload;
    //     },
    //     [getUserRecipes.rejected] : (state, action) => {
            
    //     },
    // },
});

// export const selectMyRecipe = (state) => state.auth.loggedIn;

export default addRecipeSlice.reducer;