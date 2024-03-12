import React from 'react'
import "./TodoContainer.css"
import { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
const TodoContainer = () => {
  const [todos, settodos] = useState([]);
  const [Todo, setTodo] = useState("")

  const newtodo = (e) =>{
    setTodo(e.target.value)
  }

  const Adder = () =>{
    settodos([...todos, {Todo, status: false}])
    setTodo("")
  }

  const DeleteTodo = (index) =>{
    // todos.filter will return an array of the Todos that are the ones except the current indexed Todo in the array.
    
    // set_todos function Will return an array of the Todos except the one of index
    const set_todos = () => {
      let DeleteTodosAtIndex = todos.splice(index,1);
      console.log(todos);
      if (todos.length == 0){
        settodos([])
        // Problem is that the last todo is not getting removed, also if there are only 2 Todos and user clicks on the delete button of the first Todo.. it will delete the second Todo and also the last one is not removed from the list.
        
        console.log('0 todos returns empty array.');
      }
      return DeleteTodosAtIndex
    }
    let newTodos = todos.filter(set_todos);
    settodos(newTodos)
  }

  return (
    <>
      <div className="MainCont bg-[#1c2864] rounded-md w-11/12 min-h-96 mx-9 p-2 md:p-4">
        <div className="maininput flex items-center justify-center gap-4 flex-col">
          <div className='text-2xl'>
            What2Do, Manage your Tasks at Once!
          </div>
          <div className='w-[100%] flex justify-center items-center gap-5'>
            <input onChange={newtodo} value={Todo} type="text" name="Enter Todo" id="todoinput" className='w-[80%] md:w-[40%] bg-transparent border border-[teal] rounded-lg px-2 py-1' />
            <button onClick={Adder} className='bg-[teal] px-4 py-1 rounded-sm text-white hover:bg-teal-400 transition-all'>SET</button>
          </div>
        </div>
        <div className="mt-5">
        {todos.length == 0 && <div className='text-center text-2xl animate-pulse'>No Todos to display</div>}
        {todos.map((todo, index) => {
          return (
            <div key={index} className="todos flex justify-between md:w-[70%] w-full mt-1 mx-auto hover:bg-teal-600  transition-all bg-[teal] px-2 py-1 rounded-sm">
              <div>{todo.Todo}</div>
              <div className='flex items-center gap-2'>
              <button className='bg-red-700 transition-all duration-300 p-1 hover:bg-black'><FaPenNib/></button>
              <button onClick={()=>{DeleteTodo(index)}} className='bg-red-700 transition-all duration-300 p-1 hover:bg-black'><MdDelete/></button>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default TodoContainer

