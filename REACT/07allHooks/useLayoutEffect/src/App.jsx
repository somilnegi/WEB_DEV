// useLayoutEffect works similarly to useEffect, but it is called before the User Interface gets mounted.
// useEffect gets called after printing the DOM elements.
// useLayoutEffect gets called before printing the DOM elements.

import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
  
  useEffect(() => {
    console.log('Message from useEffect');
  }, [])

  useLayoutEffect(() => {
    console.log('Message from useLayoutEffect');
  }, [])

  return (
    <>
      <h2>Test Message</h2>
      {/* {Array(40000).fill('').map((i, index) => (<li key={index}>{Math.pow(Math.random(), 10)}</li>))} */}
    </>
  )
  
}

export default App
