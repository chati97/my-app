
// https://reactjs.org/docs/reconciliation.html#keys
import { useTasks } from '../contexts/TasksContext';
import Task from "./Task";
import styled from 'styled-components';


const TodoReadyCss = styled.div`
  margin: auto;
  margin-bottom: 5px;

  font-size: 10px;

  border: 2px solid blue;
  height: 20px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 2px 2px gray;
  
  list-style-type: square;
`
const TodoDoneCss = styled.div`
  margin: auto;
  margin-bottom: 5px;

  font-size: 10px;
  text-decoration: line-through;

  border: 2px solid blue;
  height: 20px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 2px 2px gray;

  list-style-type: square;
`

export default function TaskList() {
  const tasks = useTasks();
  return (
    <div>
      {tasks.map(task => task.done === true ? (
        <TodoDoneCss key={task.id}>
          <Task task={task}/>
        </TodoDoneCss>
      ) : (
        <TodoReadyCss key={task.id}>
          <Task task={task}/>
        </TodoReadyCss>
      ))}
    </div>
  );
}
