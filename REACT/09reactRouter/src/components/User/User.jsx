import React from 'react'
import { useParams } from 'react-router-dom'
// useParams() lets your component “read” those parameters so you can use them in rendering, fetching data, or any logic inside that component.

const User = () => {

    const {id} = useParams()

  return (
      <div>User: {id}</div>
  )
}

export default User