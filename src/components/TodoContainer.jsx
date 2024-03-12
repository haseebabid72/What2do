import React from 'react'
import "./TodoContainer.css"
import { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
const TodoContainer = () => {
  // Allows user to directly add task by pressing Enter key if the length of the input is greater than 5 characters.
  const [isDisabled, setisDisabled] = useState(true)
  const [todos, settodos] = useState([]);
  const [Todo, setTodo] = useState("")

  const newtodo = (e) =>{
    setTodo(e.target.value)
    e.target.value.length>5?setisDisabled(false):setisDisabled(true);
    return isDisabled;
  }
  
  const Adder = () =>{
    settodos([...todos, {Todo, status: false}])
    setTodo("");
    setisDisabled(true);
  }
  const DeleteTodo = (index)=>{
    let newTodos = todos.filter((_, i) => i !== index);
    settodos(newTodos)
  }
  const Complete_Status = (e,index) => {
    let addClass = document.getElementsByClassName("line_through")[index];
    e.target.checked ? addClass.classList.add("line-through"):addClass.classList.remove("line-through");
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
            <button onClick={Adder} disabled={isDisabled} id='Adder' className='bg-[teal] px-4 py-1 rounded-sm text-white hover:bg-teal-400 transition-all disabled:bg-gray-700'>SET</button>
          </div>
        </div>
        <div className="mt-5">
        {todos.length == 0 && <div className='text-center text-2xl animate-pulse'>No Todos to display</div>}
        {todos.map((todo, index) => {
          return (
            <div key={index} className="todos flex justify-between md:w-[70%] w-full mt-1 mx-auto hover:bg-teal-600  transition-all bg-[teal] px-2 py-1 rounded-sm">
              <div className='flex items-center gap-2'><input onChange={(e)=>{Complete_Status(e,index)}} type="checkbox" name="" /><span className='line_through'>{todo.Todo}</span></div>
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

