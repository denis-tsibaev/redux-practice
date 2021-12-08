import { Login } from './Login.jsx';
import { AddTask } from './ToDo/AddTask';
import { TaskList } from './ToDo/TaskList';
import { User } from './User.jsx';

function App() {
    return (
        <div className="App">
            <TaskList />
            <AddTask />
            <br />
            <Login />
            <User />
        </div>
    );
}

export default App;
