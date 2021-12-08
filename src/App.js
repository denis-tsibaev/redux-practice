import Container from './Container/Container';
import { Error } from './Error.jsx';
import { Login } from './Login.jsx';
import { AddTask } from './ToDo/AddTask';
import { TaskList } from './ToDo/TaskList';
import { User } from './User.jsx';

function App() {
    return (
        <Container>
            <TaskList />
            <AddTask />
            <br />
            <Login />
            <User />
            <Error />
        </Container>
    );
}

export default App;
