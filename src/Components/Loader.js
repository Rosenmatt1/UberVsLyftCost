import React from 'react'
import '../App.css'
import loader from './lyftuber.gif'

const Loader = () => {
  return (
    <div className="container mt-1 text-center">
      <div className="row">
        <img className="mx-auto loader" alt="Uber vs. Lyft" src={loader} />
      </div>
    </div>
  )
}

export default Loader