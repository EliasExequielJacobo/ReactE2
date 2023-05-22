import React, { useState } from 'react'
import {styled} from "styled-components"
import ToDoStyled from './ToDoStyled'
import ToDoButtonCont from './ToDoButtonCont'
import ToDoBtnAdd from "./ToDoBtnAdd"
import ToDoBtnDelete from "./ToDoBtnDelete"
// import { saveLocalStorage } from '../../localStorage/LocalStorage'

const InputStyled = styled.input `
  
  width: 500px;
  height: 30px;
  border-radius: 10px;
  border-color: transparent;

`

const contTask = styled.div`
  
    display: flex;
    flex-direction:column;

`

const ToDo = () => {

      const [inputVal,setInputVal] = useState ("")
      const [taskList, setTaskList] = useState ([])
      const [empety, setEmpety] = useState ()


    const handlerSumbit = (e) =>{
      e.preventDefalut ()

      // localStorage.setItem(inputVal, e.target.value)
    }

    const addTask = (ToDo) =>{

      const validar = (inputVal) =>{
          if (inputVal ==="") return "El input esta vacio";
            
          
      }

      if (inputVal === "" ) return setEmpety (validar(inputVal))

      const newTask = {
        id: Math.random,
        ToDo: ToDo,

      }

      setTaskList ([...taskList, newTask]);

      
      setInputVal("");

      setEmpety("");

      

    };

    const borrarTarea = () =>{

      setTaskList([])

    };


  return (
    
      <>



      <contTask>
      <ToDoStyled>

        <form onSubmit={handlerSumbit}>

        <InputStyled 
        type='text'
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        
        placeholder='Ingrese sus tareas aqui porfavor'>

        </InputStyled>
        <p>{empety}</p>
        </form>


      </ToDoStyled>

      <ToDoButtonCont>

        <ToDoBtnAdd
        onClick={() => addTask(inputVal)}
        >Add</ToDoBtnAdd>
        <ToDoBtnDelete
        onClick={() => borrarTarea(taskList)}
        >Delete</ToDoBtnDelete>

      </ToDoButtonCont>

      <ul style={ {textAlign:"center", listStyle:"none"}}>

        {taskList.map((ToDo) =>(

          <li key={ToDo.id}>

              {ToDo.ToDo}

          </li>

        ))}


      </ul>
      
      </contTask>

      
      </>


  )
}

export default ToDo