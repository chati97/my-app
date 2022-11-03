// https://github.com/ai/nanoid
import { useState } from "react"
import { nanoid } from 'nanoid'
import { useTasksDispatch } from "../contexts/TasksContext"

export default function AddTask({onAddTask}){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <input
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
