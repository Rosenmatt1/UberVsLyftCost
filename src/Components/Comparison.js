import React from 'react'
import '../App.css'

const Comparison = (props) => {
  const lyftPrice = props.lyftCost < props.uberPrice 
                      ? 'lyftDeal'
                      : props.lyftCost > props.uberPrice
                        ?'badDealUber'
                        : ''
  const lyftTime = props.lyftETA < props.uberTime 
                    ? 'lyftTime'
                    : props.lyftETA > props.uberTime
                      ? 'badTimeUber'
                      : ''
  const uberPrice = props.uberPrice < props.lyftCost
                    ? 'uberDeal'
                    : props.uberPrice > props.lyftCost
                      ? 'badDealLyft'
                      : ''
  const uberTime = props.uberTime < props.lyftETA
                    ? 'uberTime'
                    : props.uberTime > props.lyftETA
                      ? 'badTimeLyft'
                      : ''                                       
  return (
    <div className="container mt-3">
      <div className="row justify-content-center comparison">
        <div className="col-lg-4 lyft text-center mt-3 card">
          <h2>Lyft</h2>
          <p className={lyftPrice}>Est Cost: ${props.lyftCost}</p>
          <p className={lyftTime}>ETA: {props.lyftETA} min</p>
          <button type="button" className="btn btn-dark mb-3">Book</button>
        </div>
        <p className="mt-5">VS</p>
        <div className="col-lg-4 uber text-center mt-3 card">
          <h2>Uber</h2>
          <p className={uberPrice}>Est Cost: ${props.uberPrice}</p>
          <p className={uberTime}>ETA: {props.uberTime}min </p>
          <button type="button" className="btn btn-dark mb-3">Book</button>
        </div>
      </div>
    </div>
  )
}

export default Comparison