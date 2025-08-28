// useContext is a react hook that allows you to access data from any component without explicitly passing it down through props at every level. It is use to manage global data in react app.

import './App.css'
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Profile />
      <Footer/>
    </>
  )
}

export default App
