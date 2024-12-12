import React, { useState } from 'react'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("my name is ",name)
    setName("");
  }

  const [name, setName] = useState("")
  return (
    <div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name ' 
          onChange={(e)=>{
            setName(e.target.value)
            console.log(e.target.value)
          }}
          value={name}

        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App