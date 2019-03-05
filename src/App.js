import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js'
import Comparison from './Components/Comparison.js'
import Logo from './Components/Logo.js'
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
        "Content-Type": "text/html",
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
        "Content-Type": "text/html",
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

  searchPrices = (e) => {
    e.preventDefault()
    this.getLyftCost()
    this.getLyftETA()
  }


  render() {
    return (
      <div>
        <Logo />
        <Form 
          searchPrices={this.searchPrices}
        />
        <Comparison />
      </div>
    );
  }
}

export default App;
