import React from 'react';
import { useSelector } from 'react-redux';

export const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);

    return (
        <div>
            <ul>
                {tasks?.map(({ title }) => (
                    <li>{title}</li>
                ))}
            </ul>
        </div>
    );
};
