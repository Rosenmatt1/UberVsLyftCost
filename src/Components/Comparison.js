import React from 'react'
import '../App.css'

const Comparison = (props) => {
  return (
    <div className="container">
      <div className="row comparison">
        <div className="col-2"></div>

        <div className="col-4">Uber</div>
        <p>VS</p>
        <div className="col-4">Lyft</div>

        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default Comparison