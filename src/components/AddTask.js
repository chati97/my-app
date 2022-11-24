// https://github.com/ai/nanoid
import { useState } from "react"
import { nanoid } from 'nanoid'
import { useTasksDispatch } from "../contexts/TasksContext"
import styled from "styled-components";



const InputCss = styled.input`
font-family: 'Dosis', sans-serif;
font-size: 10px;
width: 400px;
background-color: lightgray;
`

const BtnCss = styled.button`
    height: 20px;
    font-size: 15px;

    color: white;
    
    background-color: blue;
`

export default function AddTask({onAddTask}){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <InputCss
                placeholder="할 일을 입력하세요."
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <BtnCss onClick={() => {
                setText('');
                dispatch({
                id: nanoid(),
                type: 'added',
                text: text,
                });
            }}>
                등록
            </BtnCss>
        </>
    );
}

