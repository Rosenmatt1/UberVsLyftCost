import React from 'react'
import '../App.css'

const Comparison = (props) => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center comparison">
        <div className="col-4 lyft text-center mt-3">
          <h2>Lyft</h2>
          <p>Est Cost:</p>
          <p>ETA:</p>
          <button type="button" className="btn btn-dark">Book</button>
        </div>
        <p className="mt-5">VS</p>
        <div className="col-4 uber text-center mt-3">
          <h2>Uber</h2>
          <p>Est Cost:</p>
          <p>ETA:</p>
          <button type="button" className="btn btn-dark">Book</button>
        </div>
      </div>
    </div>
  )
}

export default Comparison