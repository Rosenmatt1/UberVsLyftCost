import React from 'react'
import '../App.css'
import logo from './betterRide.png'

const Logo = () => {
  return (
    <div className="container mt-1 text-center">
      <div className="row justify-content-center">
        <img className="mx-auto better" alt="Uber vs. Lyft" src={logo} />
        <div className="col-10">
          <h1><span className="highlight text-light">Uber Vs. Lyft Comparison</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Logo






