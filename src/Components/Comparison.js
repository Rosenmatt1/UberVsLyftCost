import React from 'react'
import '../App.css'

const Comparison = (props) => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center comparison">
        <div className="col-lg-4 lyft text-center mt-3 card">
          <h2>Lyft</h2>
          <p className={props.lyftCost < props.uberPrice ? 'lyftDeal': 'badDealUber'}>Est Cost: ${props.lyftCost}</p>
          <p className={props.lyftETA < props.uberTime ? 'lyftTime': 'badTimeLyft'}>ETA: {props.lyftETA} min</p>
          <button type="button" className="btn btn-dark mb-3">Book</button>
        </div>
        <p className="mt-5">VS</p>
        <div className="col-lg-4 uber text-center mt-3 card">
          <h2>Uber</h2>
          <p className={props.uberPrice < props.lyftCost ? 'uberDeal': 'badDealLyft'}>Est Cost: ${props.uberPrice}</p>
          <p className={props.uberTime < props.lyftETA ? 'uberTime': 'badTimeUber'}>ETA: {props.uberTime}min </p>
          <button type="button" className="btn btn-dark mb-3">Book</button>
        </div>
      </div>
    </div>
  )
}

export default Comparison