import React from 'react'
import '../App.css'

const Comparison = (props) => {
  return (
    <div className="container">
      <div className="row comparison">
        <div className="col-2"></div>

        <div className="col-4 uber text-center">
          <h2>Uber</h2>
          <p>Est Cost:</p>
          <p>ETA:</p>
          <button type="button" class="btn btn-dark">Dark</button>
        </div>



        <p>VS</p>


        <div className="col-4 lyft text-center">
          <h2>Uber</h2>
          <p>Est Cost:</p>
          <p>ETA:</p>
          <button type="button" class="btn btn-dark">Dark</button>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default Comparison