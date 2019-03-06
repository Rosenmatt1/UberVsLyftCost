import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js'
import Comparison from './Components/Comparison.js'
import Logo from './Components/Logo.js'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
const lyftURL = 'https://api.lyft.com/'
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const priceUrl = 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075'
const timeUrl = 'https://api.uber.com/v1.2/estimates/time?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075'

class App extends Component {
  constructor() {
    super()
    this.state = {
      puAddress: '',
      doAddress: '',
      autocompletePu: '',
      autocompleteDo: '',
      lyftCost: '',
      lyftETA: '',
      dropoffLatLong: '',
      pickupLatLong: ''
    }
  }

  fetchUberPrice = async () => {
    localStorage.setItem('uberjwt', 'aA-_gAKRRkPR_7fIhmMU-3IQGKVAYkMKCrMGq5A1')
    await fetch(proxyurl + priceUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + localStorage.uberjwt
      },
    })
      .then(response => response.json())
      .then(prices => {
        let avgPrice = (((prices.prices[0].low_estimate) + (prices.prices[0].high_estimate)) / 2)
        this.setState({
          uberPrice: avgPrice
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  fetchUberTime = async () => {
    localStorage.setItem('uberjwt', 'aA-_gAKRRkPR_7fIhmMU-3IQGKVAYkMKCrMGq5A1')
    await fetch(proxyurl + timeUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + localStorage.uberjwt
      },
    })
      .then(response => response.json())
      .then(times => {
        let timeMin = times.times[0].estimate / 60
        this.setState({
          uberTime: timeMin
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  fetchHiddenLyftData = async () => {
    await fetch(`${lyftURL}oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic VFlndXhSdTlvWTdVOmpyLVRfYm9vOFJobFNtek1VZlhndkN0bDN5SnRnWWNB"
      },
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "scope": "public"
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('lyftjwt', data.access_token)
      })
      .catch(error => {
        console.error(error)
      })
  }

  getLyftCost = async () => {
    await fetch(`https://cors-anywhere.herokuapp.com/${lyftURL}v1/cost?start_lat=37.7763&start_lng=-122.3918&end_lat=37.7972&end_lng=-122.4533`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.lyftjwt
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          lyftCost: data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  getLyftETA = async () => {
    await fetch(`https://cors-anywhere.herokuapp.com/${lyftURL}v1/eta?lat=37.7763&lng=-122.3918`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.lyftjwt
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          lyftETA: data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  async componentDidMount() {
    await this.fetchHiddenLyftData()
      this.fetchUberPrice()
      this.fetchUberTime()
      .catch(err => console.error(err))
  }

  searchPrices = async (e) => {
    e.preventDefault()
    // await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${e.target[0].value}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg`, {
    //   method: "GET",
    //   "Content-Type": "application/json",})
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({pickupLatLong: data})
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
    geocodeByAddress(e.target[0].value)
    .then(results => getLatLng(results[0]))
    .then(latLng => this.setState({pickupLatLong: latLng}))
    .catch(error => console.error('Error', error));
    geocodeByAddress(e.target[1].value)
    .then(results => getLatLng(results[0]))
    .then(latLng => this.setState({dropoffLatLong: latLng}))
    .catch(error => console.error('Error', error));
    this.getLyftCost()
    this.getLyftETA()
  }

  pickUpAddress = async (e) => {
    console.log(e.target.value)
    this.setState({puAddress: e.target.value})
    await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg&sessiontoken=${localStorage.lyftjwt}`, {
      method: "GET",
      "Content-Type": "application/json",})
      .then(response => response.json())
      .then(data => {
        this.setState({
          autocompletePu: data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  dropOffAddress = async (e) => {
    // console.log(e.target[1].value)
    this.setState({ doAddress: e.target.value })
    await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg&sessiontoken=${localStorage.lyftjwt}`, {
      method: "GET",
      "Content-Type": "application/json",
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          autocompleteDo: data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  addressClick = (description) => {
    this.setState({ 
      puAddress: description 
    })
  }

  addressClickDo = (description) => {
    this.setState({
      doAddress: description
    })
  }

  render() {
    console.log()
    return (
      <div>
        <Logo />
        <Form 
          puAddress={this.state.puAddress}
          searchPrices={this.searchPrices}
          pickUpAddress={this.pickUpAddress}
          dropOffAddress={this.dropOffAddress}
          autocompletePu={this.state.autocompletePu}
          autocompleteDo={this.state.autocompleteDo}
          addressClick={this.addressClick}
          addressClickDo={this.addressClickDo}
        />
        <Comparison 
          uberPrice={this.state.uberPrice}
          uberTime={this.state.uberTime}
        />
      </div>

    );
  }
}

export default App;