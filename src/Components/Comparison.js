import React from 'react'
import '../App.css'
import lyft from './stache_fill2.png'
import uber from './uber.png'
import {Spring} from 'react-spring/renderprops';

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

    

    <Spring
      from={{opacity:0, marginBottom: -500}}
      to={{opacity:1, marginBottom: 0}}
    >
      { butts => (
        <div style={butts}>
          <div className="container mt-3">
      <div className="row comparison justify-content-center">
        <div className="lyft col-4 text-center mt-3 card mr-3 border-dark">
          <div>
          <img className="logo" alt="Lyft" src={lyft} />
          </div>
          <p className={lyftPrice}>Est Cost: ${props.lyftCost}</p>
          <p className={lyftTime}>ETA: {props.lyftETA} min</p>
          <button type="button" className="btn btn-dark mb-3">Book</button>
        </div>
        <div className="uber col-4 text-center mt-3 card ml-3 border-dark">
          <div>
          <img className="logo" alt="Uber" src={uber} />
          </div>
          <p className={uberPrice}>Est Cost: ${props.uberPrice}</p>
          <p className={uberTime}>ETA: {props.uberTime}min</p>
          <button type="button" className="btn btn-dark mb-3">Book</button>
        </div>
      </div>
    </div>
        </div>
      )}
    </Spring>

  )
}

export default Comparison