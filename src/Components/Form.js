import React from 'react'
import '../App.css'

const Form = (props) => {
  return (
    <div className="container text-center mt-1">
      <div className="row">

        <div className="col-3"></div>
        <div className="col-6">
          <form>

            <div className="form-group row">
              <label for="pickUpLocation">From</label>
              <div className="col-10"><input type="address" className="form-control" placeholder="Enter Pick Up Location"/> </div>
            </div>

            <div className="form-group row">
              <label for="destination">To</label>
              <div className="col-10"><input type="address" className="form-control" placeholder="Password"/></div>
            </div>

            <button type="submit" className="btn btn-dark">Find Best Deal</button>

          </form>
          <div className="col-3"></div>
        </div>

      </div>
    </div>
  )
}

export default Form






