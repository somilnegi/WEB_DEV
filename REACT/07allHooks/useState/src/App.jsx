// useState is a react hook, which creates an 'state variable'. It helps us to track state in components and updates the user interface when the state changes.

import { useState } from 'react'
import './App.css'

function App() {

  // EXAMPLE 1
  // let color = "Red"
  // const changeColor = () => {
  //   color = "Blue"
  //   console.log(color);
    
  // }
  
  // const [color, setColor] = useState("Red")
  // const changeColor = () => {
  //   setColor("Blue")
  // }

  // EXAMPLE 2
  // const [brand, setBrand] = useState("Ferrari")
  // const [model, setModel] = useState("Roma")
  // const [year, setYear] = useState("2023")
  // const [color, setColor] = useState("Red")

  // const [car, setCar] = useState({
  //   brand: "Ferrari",
  //   model: "Roma",
  //   year: "2023",
  //   color: "Red",
  // })

  // const changeColor = () => {
  //   setCar((prev) => {
  //     return {...prev, color: "Blue"}
  //   })
  // }

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
  }

  return (
    <>
      {/* <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Blue</button> */}

      {/* <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button onClick={changeColor}>Blue</button> */}

      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  )
}

export default App
