import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectLoginStatus, selectUserId, selectUserName } from '../auth/authSlice';

export default function NavBar() {
    const dispatch = useDispatch();
    const user = useSelector(selectUserId);
    const userName = useSelector(selectUserName);
    const loginStatus = useSelector(selectLoginStatus);

    const logout = () => {
        console.log("Hi?")
        axios.get("/auth/logout", {
            withCredentials: true
        }).then((res) => {
            console.log("Hi? again")
            if (res.data === "done") {
                window.location.href = "/"
            }
        }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
        // dispatch(logout()).then((res) => {
        //     console.log(res.payload)
        // });
    }

    return  (
        <div className={styles.navBarWrapper}>
            <ul className={styles.navBar}>
                <li><Link to='/' >Home</Link></li>
                {
                    loginStatus ? 
                    (<li><Link to='/myRecipes' >My Recipes</Link></li>)
                    :
                    (null)
                }
                {
                    loginStatus ? 
                    (<li><Link to='/addRecipes' >Add Recipes</Link></li>)
                    :
                    (null)
                }
                {
                    loginStatus ? 
                    (<li onClick={logout} >Logout</li> ) 
                    : 
                    (<li><Link to='/login' >Login</Link></li> )
                }
            </ul>
        </div>
    )
}