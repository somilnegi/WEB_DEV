// useRef is a react hook that allows us to create mutable varibale which will not re-render the component. It is also used for sccessing DOM elements.

import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {

  // EXAMPLE 1

  // const [value, setValue] = useState(0)
  // const count=useRef(0)

  // useEffect(() => {
  //   count.current+=1
  // })

  // EXAMPLE 2

  const inputElement = useRef()
  
  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background="blue"
    
  }

  return (
    <>
      {/* <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
      <h1>Render Count: {count.current}</h1> */}

      <input type="text" ref={inputElement}/>
      <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default App
