import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/actions';
import './User.css';

export const User = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <>
            {user && (
                <div className="user">
                    {user.userName}
                    <br />
                    <br />
                    <button
                        onClick={() => {
                            dispatch(logout());
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </>
    );
};
