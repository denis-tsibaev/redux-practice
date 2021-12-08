import React from 'react';
import { useSelector } from 'react-redux';

export const User = () => {
    const user = useSelector(state => state.user);

    return <div className="user">{user?.userName}</div>;
};
