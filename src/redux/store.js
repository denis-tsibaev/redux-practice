import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
    tasks: [
        { title: 'Задача 1' },
        { title: 'Задача 2' },
        { title: 'Задача 3' },
    ],
};

export const store = createStore(reducer, initialStore, composeWithDevTools());
