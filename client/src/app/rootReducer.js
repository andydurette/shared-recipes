import { combineReducers } from '@reduxjs/toolkit';
/// /
import authReducer from '../features/auth/authSlice';
import myRecipesReducer from '../features/MyRecipesPage/myRecipesSlice';
import addRecipeReducer from '../features/AddRecipePage/addRecipeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  myRecipes: myRecipesReducer,
  addRecipe: addRecipeReducer,
});

export default rootReducer;
