import shortid from 'shortid';

export const addTask = titleText => {
    const task = { title: titleText, id: shortid.generate(), isDone: false };

    return {
        type: 'ADD_TASK',
        payload: task,
    };
};
