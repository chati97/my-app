// https://github.com/ai/nanoid
import { useState } from "react"
import { nanoid } from 'nanoid'
import { useTasksDispatch } from "../contexts/TasksContext"
import styled from "styled-components";

const IStyle = styled.input`
font-family: 'Dosis', sans-serif;
margin-left: 60px;
font-size: 12pt;
`

export default function AddTask({onAddTask}){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <IStyle
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                dispatch({
                id: nanoid(),
                type: 'added',
                text: text,
                });
            }}>
                Add
            </button>
        </>
    );
}
