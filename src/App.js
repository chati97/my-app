import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './contexts/TasksContext';
import styled from 'styled-components';
import japanimg from './img/japan.JPG';

const SStyle = styled.div`
`

const TStyle = styled.h1`
  width: auto;
  border-bottom: 3px solid;
  text-align: left;
  margin-left: 50px;
  padding-left: 10px;
  font-size: 30pt;
  color: black;
  font-family: 'Dosis', sans-serif;
`;

const ImgStyle = styled.img`
  width: 500px;
  height: 500px;
  float: right;
  margin-right: 200px;
`

export default function TaskApp(){

  return (
    <SStyle>
      <TStyle>Tokyo Travel</TStyle>
      <ImgStyle src={japanimg}/>
      <TasksProvider>
      <AddTask/>
      <TaskList/>
    </TasksProvider>
    </SStyle>
    
  );
}


