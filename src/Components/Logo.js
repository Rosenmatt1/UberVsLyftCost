import React from 'react'
import '../App.css'
import logo from './logoImage.png'

const Logo = (props) => {
  return (
    <div className="container mt-1 text-center">
      <div className="row justify-content-center">
        <img className="mx-auto" alt="Uber vs. Lyft" src={logo} />
        <div className="col-10">
          <h1><span className="highlight text-light">Uber Vs. Lyft Price Comparison</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Logo






