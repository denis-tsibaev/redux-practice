import shortid from 'shortid';
import { ADD_TASK, DELETE_TASK, LOGIN } from './actionTypes';

export const addTask = titleText => {
    const task = { title: titleText, id: shortid.generate(), isDone: false };

    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const deleteTask = id => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
};

export const login = payload => ({
    type: LOGIN,
    payload,
});
