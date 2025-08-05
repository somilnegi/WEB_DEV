// useCallback is a hook that lets you cache a function definiton between re-renders. It doesn't create multiple instance of same function when re-render happens.

import { useCallback, useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {

  const [count, setCounter] = useState(0)

  const newFunction = useCallback(() => {
    
  }, [count])

  return (
    <>
      <Header newFunction={newFunction} />
      <h1>{count}</h1>
      <button onClick={()=>setCounter(count+1)}>Click Here</button>
    </>
  )
}

export default App
