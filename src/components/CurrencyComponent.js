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
      rateState: "State",
      ConvertionPanel: "",
      ConvertionContainerArray: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  addConvertingLine = e => {
    let panel = new Object();
    panel = this.state.ConvertionPanel;
    this.state.ConvertionContainerArray.push(panel);
    console.log(e);
  };
  deleteConvertingLine = index => {
    this.state.ConvertionContainerArray.slice(index + 1);
  };
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

  renderConvertionContainer = props => {
    const convertionPanel = (
      <div className="container">
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
            <label htmlFor="baseAmount">Amount: </label>
            <br />
            <input
              className="amount-to-convert"
              type="number"
              min="0"
              max="100000000"
              onChange={this.handleInputChange}
              id="baseAmount"
              name="baseAmount"
            />
          </div>
          <div className="col-4 col-auto">
            <span className="converted-amount">
              {" "}
              {this.state.baseRate} to {this.state.toRate}is={" "}
              {this.state.converted}{" "}
              {this.state.converted === "" ? "" : this.state.toRate}
            </span>
          </div>
        </div>
      </div>
    );
    this.setState.ConvertionPanel = convertionPanel;
    this.state.ConvertionContainerArray[0] = convertionPanel;
    return this.state.ConvertionContainerArray.map(panel => panel);
  };
  // ratesObject- object that contains the rates object from promise
  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={values => this.onFormSubmit(values)}>
          {this.renderConvertionContainer()}
          {/* end of convertion container */}
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

        <a href="https://www.google.com/maps/search/currency+exchange/@32.675339,35.2521005,13z/data=!3m1!4b1">
          google map
        </a>
      </div>
    );
  }
}

export default Currency;
