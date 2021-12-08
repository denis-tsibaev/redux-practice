import { ADD_TASK, DELETE_TASK, LOGIN, LOGOUT } from './actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            if (action.payload?.title) {
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],
                    error: null,
                };
            }
            return {
                ...state,
                error: 'Task error',
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.payload),
            };

        case LOGIN:
            const { login, password } = action.payload;
            if (login === 'root' && password === 'root') {
                return {
                    ...state,
                    user: { userName: 'ROOT' },
                    error: null,
                };
            }
            return {
                ...state,
                error: 'Wrong login/password',
            };

        case LOGOUT:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
};
