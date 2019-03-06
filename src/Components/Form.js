import React from 'react'
import '../App.css'

const Form = (props) => {
  console.log(props, 'props')
  props.puAddress ? console.log("yes") : console.log("no")
  return (
    <div className="container text-center mt-1">
      <div className="row justify-content-center">
          <form className="col-10" onSubmit={props.searchPrices}>
            <div className="input-group mb-3">
              <input id="autocomplete" onChange={props.pickUpAddress} type="address" className="form-control" placeholder="Enter Pick Up Location" value={props.puAddress}/>
            </div>
            {props.autocomplete 
              ? props.autocomplete.predictions.map((guess, idx) => 
                <div className="card" key={idx}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" onClick={() => props.addressClick(guess.description)}>{guess.description}</li>
                  </ul>
                </div>)
              : <div></div>}
            <div className="input-group mt-3 mb-3">
              <input type="address" className="form-control" placeholder="Enter Dropoff Location"/>
            </div>
            <button 
            type="submit" 
            className="btn btn-dark">Find the Best Deal</button>
          </form>
      </div>
    </div>
  )
}

export default Form