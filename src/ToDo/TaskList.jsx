import { useSelector } from 'react-redux';
import { BtnDelete } from './BtnDelete';

export const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    // console.log(tasks);

    return (
        <div>
            <ol>
                {tasks?.map(({ title, id }) => (
                    <li key={id}>
                        {title}
                        <BtnDelete id={id} />
                    </li>
                ))}
            </ol>
        </div>
    );
};
