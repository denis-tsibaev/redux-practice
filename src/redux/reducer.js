import { ADD_TASK, DELETE_TASK, LOGIN } from './actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.payload),
            };

        case LOGIN:
            const { login, password } = action.payload;
            if (login === 'root ' && password === 'root') {
                return {
                    ...state,
                    user: { userName: 'ROOT' },
                };
            }

            return state;

        default:
            return state;
    }
};
