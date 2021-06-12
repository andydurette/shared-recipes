import React from 'react';
import {selectLoginStatus, selectUserName } from '../auth/authSlice';
import { useSelector } from 'react-redux';

export default function HomePage() {

    const userName = useSelector(selectUserName);
    const loginStatus = useSelector(selectLoginStatus);

    return  (
        <div>
        {
        loginStatus ? (
            <h1>Welcome back {userName}</h1>
        ):  <h1>Welcome to My Website</h1>
        }
        </div>
    )
}