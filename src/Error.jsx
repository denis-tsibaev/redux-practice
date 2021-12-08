import React from 'react';
import { useSelector } from 'react-redux';
import './Error.css';

export const Error = () => {
    const error = useSelector(state => state.error);
    return <>{error && <span className="error">{error}</span>}</>;
};
