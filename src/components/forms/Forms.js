import React, { useState } from "react"

const Forms = () => {
  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [xname, setXname] = useState();
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
    setDob(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setXname(name)
    if (xname == NaN){
      setXname(xname + dob) 
    }
  }
  
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" onChange={handleChange} value={name}/>
        <input type="date" onChange={handleChange} value={dob}/>
        <button type="submit">submit</button>
      </form>

      <h1>Name: {name}</h1>
      <h1>Xname: {xname}</h1>
    </>
  )  
}

export default Forms