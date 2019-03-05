import React from 'react'
import '../App.css'
import logo from './logoImage.png'

const Logo = (props) => {
  return (
    <div className="container mt-1 text-center">
      <div className="row">
        <img className="mx-auto" src={logo} />
      </div>
    </div>
  )
}

export default Logo






