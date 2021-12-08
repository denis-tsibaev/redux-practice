import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/actions';

export const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const initialAuthData = { login: '', password: '' };
    const [authData, setAuthData] = useState(initialAuthData);

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
        // console.log(dispatch(login(authData)));
        setAuthData(initialAuthData);
    };

    return (
        <>
            {!user && (
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
            )}
        </>
    );
};
