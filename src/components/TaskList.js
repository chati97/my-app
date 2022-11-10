
// https://reactjs.org/docs/reconciliation.html#keys
import { useTasks } from '../contexts/TasksContext';
import Task from "./Task";
import styled from 'styled-components';

const LStyle = styled.li`
  color: black;
  margin: 0 20px 5px 50px;
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  font-size: 12pt;
  list-style-type: square;
  text-decoration: underline;
`

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <LStyle key={task.id}>
          <Task task={task} />
        </LStyle>
      ))}
    </ul>
  );
}
