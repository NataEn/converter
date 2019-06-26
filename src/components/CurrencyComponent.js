import React, { Component } from "react";
import { Media } from "reactstrap";
import image from "../shared/flags/ad.png";
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
  }
  onFormSubmit(event, values) {
    event.preventDefault();
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
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  convertingLine = (
    <div>
      <p>I was added</p>
    </div>
  );

  render() {
    return (
      <div>
        <div className="row">
          <form className="form" onSubmit={values => this.onFormSubmit(values)}>
            <div className="col-12 col-auto">
              <SelectComponent {...this.props} rates={this.props.rates} />
              <label htmlFor="baseRate">Base Rate </label>
              <select
                id="baseRate"
                name="baseRate"
                onChange={this.handleInputChange}
                value={this.state.baseRate}
              >
                <option value="">I Have</option>
                {this.props.rates.map(rate => (
                  <option key={rate}>
                    {this.state.rateState}
                    {rate}
                  </option>
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
                  <option key={rate}>
                    {this.state.rateState}
                    {rate}
                  </option>
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
