import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
    tasks: [
        { title: 'Задача 1', id: 1 },
        { title: 'Задача 2', id: 2 },
        { title: 'Задача 3', id: 3 },
    ],
    user: null,
};

export const store = createStore(reducer, initialStore, composeWithDevTools());
