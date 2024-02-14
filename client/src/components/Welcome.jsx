import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome, you made it!!</h1>
      <Link to="/login">
      <button>Again!</button>
      </Link>
    </div>
  )
}

export default Welcome
