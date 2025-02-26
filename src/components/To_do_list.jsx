import React from 'react'

const To_do_list = ({handleClick}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className=" text-white text-3xl font-bold mb-5 mt-3 w-full text-center">To Do List</h1>
        <button onClick={handleClick} className="bg-blue-500 text-[#c8dceb] px-5 py-2 rounded-lg  hover:bg-blue-700">
            Add New Task
          </button>
      
    </div>
  )
}
export default To_do_list
