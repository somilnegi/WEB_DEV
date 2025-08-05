import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [useNum, setUseNum] = useState(false)
  const [useChar, setUseChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (useNum) {
      str+="0123456789"
    }
    if (useChar) {
      str+="!@#$%^&*()-=_+[]{}<>/?,:'"
    }
    
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)


  }, [length, useNum, useChar, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 9)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, useNum, useChar, passwordGenerator])

  return (
    <div className='flex items-center justify-center h-screen bg-slate-900'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-center'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white text-orange-600' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-400' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={useNum} id='numberInput' onChange={() => { setUseNum((prev) => !prev) }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={useChar} id='charInput' onChange={() => { setUseChar((prev) => !prev) }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
