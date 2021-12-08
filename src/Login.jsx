import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/actions';

export const Login = () => {
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState({ login: '', password: '' });

    const onChangeHandler = e => {
        setAuthData({
            ...authData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(authData);
        dispatch(login(authData));
        setAuthData({ login: '', password: '' });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>
                Login
                <input
                    autoComplete="off"
                    type="text"
                    name="login"
                    value={authData.login}
                    onChange={onChangeHandler}
                />
            </label>
            <label>
                Password
                <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    value={authData.password}
                    onChange={onChangeHandler}
                />
            </label>
            <button type="submit">Get in</button>
        </form>
    );
};
