import React from 'react'
import '../App.css'
import lyft from './stache_fill2.png'
import uber from './uber.png'
import { Spring } from 'react-spring/renderprops';

const Comparison = (props) => {
  const lyftPrice = props.lyftCost < props.hardCodedUberPrice
    ? 'lyftDeal'
    : props.lyftCost > props.hardCodedUberPrice
      ? 'badDealUber'
      : ''
  const lyftTime = props.lyftETA < props.hardCodedUberPrice
    ? 'lyftTime'
    : props.lyftETA > props.hardCodedUberTime
      ? 'badTimeUber'
      : ''
  const uberPrice = props.hardCodedUberPrice < props.lyftCost
    ? 'uberDeal'
    : props.hardCodedUberPrice > props.lyftCost
      ? 'badDealLyft'
      : ''
  const uberTime = props.hardCodedUberTime < props.lyftETA
    ? 'uberTime'
    : props.hardCodedUberTime > props.lyftETA
      ? 'badTimeLyft'
      : ''
  return (



    <Spring
      from={{ opacity: 0, marginBottom: -500 }}
      to={{ opacity: 1, marginBottom: 0 }}
    >
      {butts => (
        <div style={butts}>
          <div className="container mt-3">
            <div className="row comparison justify-content-center">
              <div className="lyft col-4 text-center mt-3 card mr-3 border-dark">
                <div>
                  <img className="logo" alt="Lyft" src={lyft} />
                </div>
                <p className={lyftPrice}>Est Cost: ${props.lyftCost}</p>
                <p className={lyftTime}>ETA: {props.lyftETA} min</p>
                <button
                  onClick={(e) => props.selectedLyftRide(e)}
                  type="button"
                  className="btn btn-dark mb-3">
                  {props.orderedLyft ? "Ordered" : "Book"}
                </button>
              </div>
              <div className="uber col-4 text-center mt-3 card ml-3 border-dark">
                <div>
                  <img className="logo" alt="Uber" src={uber} />
                </div>
                <p className={uberPrice}>Est Cost: ${props.hardCodedUberPrice}</p>
                <p className={uberTime}>ETA: {props.hardCodedUberTime}min</p>
                <button
                  onClick={(e) => props.selectedUberRide(e)}
                  type="button"
                  className="btn btn-dark mb-3">
                  {props.orderedUber ? "Ordered" : "Book"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Spring>

  )
}

export default Comparison