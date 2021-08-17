import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import './Login.css'

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(
                login({
                    userName: result.user.displayName,
                    profilepic: result.user.photoURL,
                    id: result.user.uid
                })
            )
        })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png"
                    alt=""
                />
                <Button variant="outlined" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
