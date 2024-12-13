import React, { useState } from "react"

import Nav from "./Nav";
import Form from "./Form";

const App = () => {
  const [data,setdata]=useState(["Home","About", "Projects","services"]);
  
  return (
    <div className="main bg-zinc-800 h-screen w-full text-zinc-300">
      <header>
<Nav data={data}/>      
      </header>
<main>
<Form />

</main>


     
      
    </div>
  );
};

export default App;
