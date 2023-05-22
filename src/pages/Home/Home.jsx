import React from 'react'
import styled from 'styled-components';

const HomeMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const PendingTaskShow = styled.div `
  
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid white;
  width: 300px;
  height: 150px;
  background-color:#4747ff;
  padding: 2px 0px;
`
const PendingTaskTitle = styled.div `
  
  width: 100%;
  height: 100%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  background-color: #131415;
`

const PendingTaskButtonsCont = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`
const PendingTaskToDo = styled.div `
  display: flex;
  flex-direction: column;
`
const PendingTaskPokeApi = styled.div `
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  padding-right: 40px;
`



const Home = () => {
  return (
    <HomeMsg>

    <h1>Bienvendiso al E2 de react</h1>

      <h2>Abajo encontraran un contador de tareas pendientes y 2 botones para dirigirse a la PokeApi y al ToDo</h2>

      <PendingTaskShow> 

        <p>Tareas pendientes</p>


        <PendingTaskTitle>


            <p>0</p>

        </PendingTaskTitle>
         

        <PendingTaskButtonsCont>

          <PendingTaskPokeApi><p>PokeApi</p></PendingTaskPokeApi>

          <PendingTaskToDo><p>ToDo</p></PendingTaskToDo>

        </PendingTaskButtonsCont>

      </PendingTaskShow>
    </HomeMsg>
  )
}

export default Home