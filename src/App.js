import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PersonList from "./components/PersonListComponents";
import Currency from "./components/CurrencyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      ratesCurrencies: []
    };

    this.axios = axios.create({
      baseURL: "http://data.fixer.io/api/"
    });

    this.axiosConvert = this.axiosConvert.bind(this);
  }

  componentDidMount() {
    this.axios
      .get("latest", {
        params: {
          access_key: `7213b9a7b8b59ce8e6087fe3ba8243c2`
        }
      })
      .then(response => {
        console.log("from response" + response.data);
        this.setState({ rates: response.data.rates });
        this.setState({ ratesCurrencies: Object.keys(response.data.rates) });
        console.log(this.state.ratesCurrencies);
      });
  }
  axiosConvert(amount, fromRate, toRate) {
    const fromRateValue = this.state.rates[fromRate];
    const toRateValue = this.state.rates[toRate];
    console.log("fromRateValue:" + fromRateValue);
    console.log("toRateValue:" + toRateValue);
    if (fromRate === "EUR") {
      return console.log(amount * fromRateValue);
    } else {
      return console.log((1 / fromRateValue) * toRateValue * amount);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Currency Converter</h1>
        </header>
        <Currency
          rates={this.state.ratesCurrencies}
          axiosConvert={this.axiosConvert}
        />
        <PersonList />
      </div>
    );
  }
}

export default App;
