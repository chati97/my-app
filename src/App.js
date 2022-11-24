import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './contexts/TasksContext';
import styled from 'styled-components';

const TitleCss = styled.h1`
  margin-left: 50px;

  font-size: 30px;
  font-family: 'Dosis', sans-serif;
  text-align: center;

  color: black;
`;

const InputCss = styled.div`
  margin: auto;
  border: 2px solid blue;
  height: 20px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 2px 2px gray;
  background-color: lightgray;

  margin-bottom: 5px;
`


export default function TaskApp(){

  return (
    <div>
      <TitleCss>Todo List</TitleCss>
      <TasksProvider>
        <InputCss>
        <AddTask/>
        </InputCss>
        <TaskList/>
      </TasksProvider>
      
    </div>
  );
}


