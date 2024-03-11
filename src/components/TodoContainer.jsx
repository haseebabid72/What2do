import React from 'react'
import "./TodoContainer.css"
import { useState } from 'react'

const TodoContainer = () => {

  const [todos, settodos] = useState([
    {
      title: "Hey",
    }
  ])
    
  return (
    <>
      <div className="MainCont border border-white w-11/12 min-h-96 mx-9 p-4">
        <div className="maininput flex justify-center gap-4">
          <input type="text" name="Enter Todo" id="todoinput" />
        </div>
        {todos.map(todo => {
          return (
          <>
            <div className="todos">{todo.title}</div>
          </>
          )
        })}
      </div>
    </>
  )
}

export default TodoContainer
 
