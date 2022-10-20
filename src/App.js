import logo from './logo.svg';
import './App.css';

import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

export default function TaskApp(){
  return (
    <TasksProvider>
      <h1>Day off in kyoto</h1>
      <AddTask/>
      <TaskList/>
    </TasksProvider>
  );
}

