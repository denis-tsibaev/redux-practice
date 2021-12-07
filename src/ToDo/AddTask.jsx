import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

export const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addTask(task));
                    setTask('');
                }}
            >
                Add task
            </button>
        </div>
    );
};
