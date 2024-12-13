import React, { useState } from 'react'

const Form = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form submmited by ", name);
      };
      const [name, setname] = useState("");

  return (
    <div>
         <form className="flex-col justify-center mt-10 "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="bg-zinc-100 px-10 py-2 border-black outline-none "
          type="text"
          placeholder="Enter your name"
          onChange={(e)=> setname(e.target.value)}
          value={name}
          
        />
        <br />
        <button className="bg-blue-700 px-10 py-2 mt-4">submit</button>
      </form>

    </div>
  )
}

export default Form