// 이 파일 내에서 우리 할 일들을 다 관리
// 1. 제일 처음에 LocalStorage로 부터 가져오기 이전에 작성된 할일들을
// 2. 추가 수정, 삭제될때, 그거에 맞게 localStorage업데이트
// 3. 할일 체크 표시를 하는 작업

import { createContext, useContext, useReducer } from "react";
import { getTaskStorage, setTaskStorage } from "../utils/storage";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({children}) {
    const [tasks, dispatch] = useReducer(
        tasksReducer, getTaskStorage()
    );
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks(){
    return useContext(TasksContext);
}

export function useTasksDispatch(){
    return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action){
    switch(action.type){
        case 'added': {
            const newTasks =  [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
            setTaskStorage(newTasks)
            return newTasks
        }
        case 'changed': {
            const newTasks = tasks.map(task => {
                if(task.id === action.task.id){
                    return action.task;
                } else {
                    return task;
                }
            });
            setTaskStorage(newTasks)
            return newTasks
        }
        case 'deleted': {
            const newTasks = tasks.filter(task => task.id !== action.id);
            setTaskStorage(newTasks)
            return newTasks
        }
        default:{
            throw new Error("")
        }
    }
}
