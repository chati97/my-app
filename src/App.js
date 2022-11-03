import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './contexts/TasksContext';

export default function TaskApp(){
  return (
    <TasksProvider>
      <h1>Day off in kyoto</h1>
      <AddTask/>
      <TaskList/>
    </TasksProvider>
  );
}