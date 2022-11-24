import { useState } from "react";
import { useTasksDispatch} from "../contexts/TasksContext";
import styled from "styled-components";

const OkBtnCss = styled.button`
  color: blue;
  background-color: lightblue;
`

const ModBtnCss = styled.button`
  color: black;
`

const DelBtnCss = styled.button`
  color: red;
  background-color: #f05650;
`

const TodoCss = styled.input`
  color: red;
  font-size: 10px;
`

export default function Task({ task }) {
  const dispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);

  
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <TodoCss
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
        <OkBtnCss onClick={() => setIsEditing(false)}>
          확인
        </OkBtnCss>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <ModBtnCss onClick={() => setIsEditing(true)}>
          수정
        </ModBtnCss>
      </>
    );
  }
  return (
    <>
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
      <DelBtnCss onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        삭제
      </DelBtnCss>
    </>
  );
}