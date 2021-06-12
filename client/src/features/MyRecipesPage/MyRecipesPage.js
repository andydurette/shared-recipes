import React, { useEffect } from 'react';
// import { login, logout, selectLoginStatus, selectUserId, selectUserName } from '../auth/authSlice';
import { getUserRecipes } from './myRecipesSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function MyRecipesPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserRecipes());
    }, [dispatch])

    return  (
        <div>
        <h1>My Recipes</h1>
        </div>
    )
}