import React, { Component } from "react";
import axios from "axios";

function RenderState({ states }) {
  if (states != null) {
    const stateList = Object.keys(states);
    return (
      <select>
        {stateList.map(state => (
          <option>{state}</option>
        ))}
      </select>
    );
  } else {
    return <p>not found state</p>;
  }
}

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "dollar",
      rates: { a: 123, b: 456 }
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleBaseInputChange = this.handleBaseInputChange.bind(this);
    this.handleRateInputChange = this.handleRateInputChange.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=7213b9a7b8b59ce8e6087fe3ba8243c2"
      )
      .then(response => {
        console.log("from response" + response.data);
        this.setState({ rates: response.data.rates });
        console.log(this.props.rates);
      });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }
  handleBaseInputChange(event) {
    this.setState({ base: event.target.value });
  }
  handleRateInputChange(event) {
    this.setState({ rate: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="coine">convert </label>
          <input
            type="number"
            onChange={this.handleInputChange}
            id="coine"
            name="base"
          />{" "}
          <label htmlFor="rate">rate </label>
          <RenderState states={this.props.rates} />
          <p>result = {20}</p>
          <br />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default Currency;
