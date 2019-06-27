import React, { Component } from "react";
//import PersonList from "./PersonListComponents";
import axios from "axios";
import Header from "./HeaderComponent";
import { Footer } from "./FooterComponent";
import Currency from "./CurrencyComponent";
import { SpiningRates } from "./SpiningRatesComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      ratesCurrencies: []
    };

    this.axios = axios.create({
      baseURL: "http://data.fixer.io/api/"
    });
    console.log(JSON.stringify(this.state.rates));
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
        //console.log(this.state.ratesCurrencies);
        //console.log(JSON.stringify(this.state.rates));
      });
  }
  axiosConvert(amount, fromRate, toRate) {
    const fromRateValue = this.state.rates[fromRate];
    const toRateValue = this.state.rates[toRate];
    console.log("fromRateValue:" + fromRateValue);
    console.log("toRateValue:" + toRateValue);
    console.log("amountValue:" + amount);
    return amount * (toRateValue / fromRateValue);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <h1> Currency Converter</h1>
        <Currency
          {...this.props}
          rates={this.state.ratesCurrencies}
          ratesObject={this.state.rates}
          axiosConvert={this.axiosConvert}
        />
        <SpiningRates ratesObject={this.state.rates} />
        <Footer />
      </div>
    );
  }
}
export default Main;
