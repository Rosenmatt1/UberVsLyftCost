import React from 'react'
import '../App.css'

const Form = (props) => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <div className="form-group">
              <label for="pickUpLocation">From</label>
              <input type="address" className="form-control" placeholder="Enter Pick Up Location" />
            </div>
            <div className="form-group">
              <label for="destination">To</label>
              <input type="address" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group form-check">
            </div>
            <button type="submit" className="btn btn-primary">Find Best Deal</button>
          </form>
          <div className="col-4"></div>
        </div>

      </div>
    </div>
  )
}

export default Form






