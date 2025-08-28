// useReducer is similar to useState, but instead of providing state and setter function, it provides state and dispatch function.
// It accepts two arguments: 1. Reducer function-It specifies how the state gets updated 2. Initial state
// It returns current state and dispatch method
// state = past state + action processed by reducer

import { useReducer, useState } from 'react'

import './App.css'

function App() {

  const initialState = { count: 0 }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return {count: state.count+1}
      case 'decrease':
        return { count: state.count - 1 }
      case 'input':
        return {count: action.payload}
      default:
        return state;
    }
  }

  const [state, dispatchMethod] = useReducer(reducer, initialState)

  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatchMethod({type: 'increase'})}>Increase</button>
      <button onClick={()=>dispatchMethod({type: 'decrease'})}>Decrease</button>
      <br />
      <input value={state.count} type="number" onChange={(e)=>dispatchMethod({type: 'input', payload: Number(e.target.value)})} />
    </>
  )
  
}

export default App
