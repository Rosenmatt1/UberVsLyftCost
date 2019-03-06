import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js'
import Comparison from './Components/Comparison.js'
import Logo from './Components/Logo.js'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
const lyftURL = 'https://api.lyft.com/'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
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
    this.setState({pickupAddress: e.target.value})
    await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg&sessiontoken=${localStorage.lyftjwt}`, {
      method: "GET",
      "Content-Type": "application/json",})
      .then(response => response.json())
      .then(data => {
        this.setState({
          autocomplete: data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  addressClick = (description) => {
    this.setState({ pickupAddress: description })
  }

  render() {
    return (
      <div>
        <Logo />
        <Form 
          searchPrices={this.searchPrices}
          pickUpAddress={this.pickUpAddress}
          pickUpAddressState={this.state.pickUpAddress}
          autocomplete={this.state.autocomplete}
          addressClick={this.addressClick}
        />
        <Comparison />
      </div>

    );
  }
}

export default App;