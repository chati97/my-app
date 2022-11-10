import { useState } from "react";
import { useTasksDispatch} from "../contexts/TasksContext";
import styled from "styled-components";

const BStyle = styled.button`
  color: black;
  margin-left: 10px;
`

export default function Task({ task }) {
  const dispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);

  
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <BStyle onClick={() => setIsEditing(false)}>
          Save
        </BStyle>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <BStyle onClick={() => setIsEditing(true)}>
          Edit
        </BStyle>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <BStyle onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </BStyle>
    </label>
  );
}