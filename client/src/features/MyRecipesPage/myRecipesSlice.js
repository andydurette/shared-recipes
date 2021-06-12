import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks

export const getUserRecipes = createAsyncThunk(
    'api/userRecipe',
    async (payload, thunkAPI) => {
        const { getState } = thunkAPI;
        const state = getState();
      try {
        const response = await axios.get("http://localhost:4000/api/userRecipe", { params: {user_id: state.auth.userId}});
        console.log(response.data);
        return response.data
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    },
  );

//   axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })

const initialState = {
    myRecipes: {},
  };

const myRecipesSlice = createSlice({
    name: 'myRecipes',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserRecipes.fulfilled] : (state, action) => {
            state.myRecipes = action.payload;
        },
        [getUserRecipes.rejected] : (state, action) => {
            
        },
    },
});

export const selectMyRecipe = (state) => state.auth.loggedIn;

export default myRecipesSlice.reducer;