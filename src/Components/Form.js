import React from 'react'
import '../App.css'

const Form = (props) => {
  return (
    <div className="container text-center mt-1">
      <div className="row justify-content-center">
          <form className="col-md-8" onSubmit={props.searchPrices}>
            <div className="input-group mb-3">
              <input id="autocomplete" onChange={props.pickUpAddress} type="address" className="form-control border-dark" placeholder="Enter Pick Up Location" value={props.puAddress}/>
            </div>
            {props.autocompletePu
              ? props.autocompletePu.predictions.map((guess, idx) => 
                <div className="card" key={idx}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"  onClick={() => props.addressClick(guess.description)}>{guess.description}</li>
                  </ul>
                </div>)
              : <div></div>}

            <div className="input-group mt-3 mb-3">
            <input id="autocomplete" onChange={props.dropOffAddress} type="address" className="form-control border-dark" placeholder="Enter Dropoff Location" value={props.doAddress}/>
            </div>
          {props.autocompleteDo
            ? props.autocompleteDo.predictions.map((guess, idx) =>
              <div className="card" key={idx}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" onClick={() => props.clickDoAddress(guess.description)}>{guess.description}</li>
                </ul>
              </div>)
            : <div></div>}
            
            <button 
            type="submit" 
            className="btn btn-dark">Find the Better Deal</button>
          </form>
      </div>
    </div>
  )
}

export default Form