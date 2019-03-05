import React from 'react'
import '../App.css'

const Form = (props) => {
  return (
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
  )
}

export default Form






