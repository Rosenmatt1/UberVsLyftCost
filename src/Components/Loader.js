import React from 'react'
import '../App.css'
import loader from './carLoader.gif'

const Loader = (props) => {
  return (
    <div className="container mt-1 text-center">
      <div className="row">
        <img className="mx-auto" alt="Uber vs. Lyft" src={loader} />
      </div>
    </div>
  )
}

export default Loader