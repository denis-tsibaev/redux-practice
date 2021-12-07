import { AddTask } from './ToDo/AddTask';
import { TaskList } from './ToDo/TaskList';

function App() {
    return (
        <div className="App">
            <TaskList />
            <AddTask />
        </div>
    );
}

export default App;
