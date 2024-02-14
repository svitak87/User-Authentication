import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>This is a register-login aplicattion, using React, Node.js, Express and PostgreSQL</h3>
      <div>
      <Link to="/login">
      <button>Let's get started</button>
      </Link>
      </div>
    </div>
  )
}

export default Landing
