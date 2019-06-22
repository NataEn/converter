import React, { Component } from "react";
import axios from "axios";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseRate: "",
      baseAmount: "",
      toRate: "",
      converted: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  onFormSubmit(event, values) {
    event.preventDefault();
    console.log("from form:" + event.target);
    console.log("from form:" + values);
    const answer = this.props.axiosConvert(
      this.state.baseAmount,
      this.state.baseRate,
      this.state.toRate
    );
    console.log("calculated currency is:" + answer);
    if (+answer < 0) {
      this.setState({ converted: "not a valid convertion" });
    } else {
      this.setState({ converted: answer });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(event.target);
    const value = target.value;
    console.log(event.target.value);
    const name = target.name;
    console.log(event.target.name);
    console.log(
      " baseRate " +
        this.state.baseRate +
        " baseAmount " +
        this.state.baseAmount +
        " torate " +
        this.state.toRate
    );
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={values => this.onFormSubmit(values)}>
          <label htmlFor="baseRate">Base Rate </label>
          <select
            id="baseRate"
            name="baseRate"
            onChange={this.handleInputChange}
            value={this.state.baseRate}
          >
            <option value="">I Have</option>
            {this.props.rates.map(rate => (
              <option key={rate}>{rate}</option>
            ))}
          </select>
          <label htmlFor="toRate">Convertion Rate </label>
          <select
            id="toRate"
            name="toRate"
            onChange={this.handleInputChange}
            value={this.state.toRate}
          >
            <option value="">I Want</option>
            {this.props.rates.map(rate => (
              <option key={rate}>{rate}</option>
            ))}
          </select>
          <br />
          <label htmlFor="baseAmount">convert </label>
          <input
            type="number"
            min="0"
            max="1000"
            onChange={this.handleInputChange}
            id="baseAmount"
            name="baseAmount"
          />{" "}
          {this.state.baseRate}
          <span>
            {" "}
            to {this.state.toRate}is= {this.state.converted} {this.state.toRate}
          </span>
          <br />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default Currency;
