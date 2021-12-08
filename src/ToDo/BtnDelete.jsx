import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

export const BtnDelete = ({ id }) => {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteTask(id));
    };
    return <button onClick={deleteHandler}>Delete</button>;
};
