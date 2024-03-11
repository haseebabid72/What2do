import React from 'react'
import "./TodoContainer.css"
import { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";
const TodoContainer = () => {
  const [todos, settodos] = useState([
    {
      title: "Learn React and build a project.",
      status: false
    },
    {
      title: "Finish coding assignment.",
      status: true
    },
    {
      title: "Read a new book.",
      status: false
    },
    {
      title: "Practice playing the guitar.",
      status: false
    },
    {
      title: "Go for a run in the park.",
      status: false
    },
    {
      title: "Cook a new recipe for dinner.",
      status: false
    },
    {
      title: "Organize your desk and workspace.",
      status: false
    },
    {
      title: "Call a friend or family member.",
      status: false
    },
    {
      title: "Watch a documentary on a topic you're interested in.",
      status: false
    },
    {
      title: "Plan your goals for the next month.",
      status: false
    }
]);

  return (
    <>
      <div className="MainCont bg-[#1c2864] rounded-md w-11/12 min-h-96 mx-9 p-2 md:p-4">
        <div className="maininput flex items-center justify-center gap-4 flex-col">
          <div className='text-2xl'>
            What2Do, Manage your Tasks at Once!
          </div>
          <div className='w-[100%] flex justify-center items-center gap-5'>
            <input type="text" name="Enter Todo" id="todoinput" className='w-[80%] md:w-[40%] bg-transparent border border-[teal] rounded-lg px-2 py-1' />
            <button className='bg-[teal] px-4 py-1 rounded-sm text-white hover:bg-teal-400 transition-all'>SET</button>
          </div>
        </div>
        <div className="mt-5">
        {todos.map((todo, index) => {
          console.log(index);
          return (
            <div key={index} className="todos flex justify-between md:w-[70%] w-full mt-1 mx-auto hover:bg-teal-600  transition-all bg-[teal] px-2 py-1 rounded-sm">
              <div>{todo.title}</div>
              <div className='flex items-center gap-2'>
              <button className='bg-red-700 transition-all duration-300 p-1 hover:bg-black'><FaPenNib/></button>
              <button className='bg-red-700 transition-all duration-300 p-1 hover:bg-black'><IoIosAddCircle/></button>
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

