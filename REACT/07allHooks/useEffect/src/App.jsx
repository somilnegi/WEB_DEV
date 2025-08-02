// useEffect hook allows you to perform side effects in your components.

import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // useEffect(callback, dependencies)

  const [count, setCount] = useState(0)

  // Without dependencies
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count+1)
  //   }, 2000)
  // })
  
  // With empty dependency array
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count+1)
  //   }, 2000)
  // }, [])
  
  // With dependency array
  useEffect(() => {
    setTimeout(() => {
      setCount(count+1)
    }, 2000)
  }, [count])


  return (
    <>
      <h1>I've rendered {count} times</h1>
    </>
  )
}

export default App
