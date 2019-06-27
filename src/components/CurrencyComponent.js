import React, { Component } from "react";
import SelectComponent from "./ConvertionLineComponent";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseRate: "",
      baseAmount: "",
      toRate: "",
      converted: "",
      rateState: "State"
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    const base = this.state.baseRate;
    const rate = this.state.toRate;
    const amount = this.state.baseAmount;
    let answer = "";
    //console.log("from form:" + values);
    if (base === "" && rate === "" && amount === "") {
      answer = "dont do anything";
    } else if (base !== "" && rate === "" && amount !== "") {
      answer = this.props.axiosConvert(amount, base, base);
    } else if (base === "" && rate !== "" && amount !== "") {
      answer = this.props.axiosConvert(amount, rate, rate);
    } else if (base !== "" && rate !== "" && amount === "") {
      answer = this.props.axiosConvert(1, base, rate);
    } else {
      answer = this.props.axiosConvert(amount, base, rate);
    }
    //console.log("calculated currency is:" + answer);
    if (+answer < 0) {
      this.setState({ converted: "not a valid convertion" });
    } else {
      this.setState({ converted: answer });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    console.log("amount" + this.state.baseAmount);
  }
  handleSelectChange(value, name) {
    //console.log("from handleselectchange" + JSON.stringify(value));
    //console.log("from handleselectchange" + JSON.stringify(name));
    this.setState({ [name]: value });
  }
  // ratesObject- object that contains the rates object from promise
  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={values => this.onFormSubmit(values)}>
          <div className="row form">
            <div className="col-4 col-auto select-div">
              <span>I have:</span>
              <SelectComponent
                className="select-span"
                {...this.props}
                rates={this.props.rates}
                ratesObject={this.props.ratesObject}
                name="baseRate"
                onChange={this.handleSelectChange}
              />
            </div>
            <div className="col-4 col-auto">
              <span>I want:</span>
              <SelectComponent
                className="select-span"
                {...this.props}
                rates={this.props.rates}
                ratesObject={this.props.ratesObject}
                name="toRate"
                onChange={this.handleSelectChange}
              />
            </div>
            <div className="col-4 col-auto">
              {" "}
              <label htmlFor="baseAmount">Amount </label>
              <input
                type="number"
                min="0"
                max="1000"
                onChange={this.handleInputChange}
                id="baseAmount"
                name="baseAmount"
              />
            </div>
          </div>
          <span>
            {" "}
            {this.state.baseRate} to {this.state.toRate}is={" "}
            {this.state.converted} {this.state.toRate}
          </span>
          <button className="btn btn-outline-success" type="submit">
            Calculate
          </button>{" "}
          <button
            className="btn btn-outline-warning"
            type="button"
            onClick={this.addConvertingLine}
          >
            <i className="fa fa-plus fa-lg" /> Add line
          </button>
        </form>

        <div className="row">
          <form className="form" onSubmit={values => this.onFormSubmit(values)}>
            <div className="col-5 col-auto">
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
              <label htmlFor="toRate"> Convertion Rate </label>
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
                to {this.state.toRate}is= {this.state.converted}{" "}
                {this.state.toRate}
              </span>
            </div>
            <button className="btn btn-outline-success" type="submit">
              Calculate
            </button>{" "}
            <button
              className="btn btn-outline-warning"
              type="button"
              onClick={this.addConvertingLine}
            >
              <i className="fa fa-plus fa-lg" /> Add line
            </button>
          </form>
        </div>

        <a href="https://www.google.com/maps/search/currency+exchange/@32.675339,35.2521005,13z/data=!3m1!4b1">
          google map
        </a>
      </div>
    );
  }
}

export default Currency;
