import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Somil",
    age: 21
  }
  let newArr=[1, 2, 3]

  return (
    <>
      <h1 className=' bg-amber-200 text-blue-500 p-4 rounded-4xl'>Tailwind Test</h1>
      <Card username="SOMIL" btnText="Follow"/>
      <Card username="100MIL"/>
    </>
  )
}

export default App
