import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PersonList from "./components/PersonListComponents";
import Currency from "./components/CurrencyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {}
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=7213b9a7b8b59ce8e6087fe3ba8243c2"
      )
      .then(response => {
        console.log("from response" + response.data);
        this.setState({ rates: response.data.rates });
        console.log(this.state.rates);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Currency Converter</h1>
        </header>
        <Currency rates={this.state.rates} />
        <PersonList />
      </div>
    );
  }
}

export default App;
