import React from 'react'

const Nav = ({data}) => {
  console.log(data)
  return (
    <div className='flex justify-between px-10'>
        <div className="left "><h1>LOGO</h1></div>
        <div className="center flex gap-8">
            {data.map((e,i)=> <h2 key={i}>{e}</h2>)}
            
        </div>
        <div className="right"> <h3>Search</h3></div>
    </div>
  )
}

export default Nav