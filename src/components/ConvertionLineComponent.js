import React, { Component } from "react";
import image from "../shared/flags/ad.png";

export const convertionLine = props => {
  return (
    <div>
      <label htmlFor="baseRate">Base Rate </label>
      <select
        id="baseRate"
        name="baseRate"
        onChange={this.props.handleInputChange}
        value={this.props.state.baseRate}
      >
        <option value="">I Have</option>
        {this.props.rates.map(rate => (
          <option key={rate}>
            <img src={image} alt="someimage" />
            {this.props.rateState}
            {rate}
          </option>
        ))}
      </select>
      <label htmlFor="toRate"> Convertion Rate </label>
      <select
        id="toRate"
        name="toRate"
        onChange={this.props.handleInputChange}
        value={this.props.toRate}
      >
        <option value="">I Want</option>
        {this.props.rates.map(rate => (
          <option key={rate}>
            {this.props.rateState}
            {rate}
          </option>
        ))}
      </select>
      <label htmlFor="baseAmount">convert </label>
      <input
        type="number"
        min="0"
        max="1000"
        onChange={this.props.handleInputChange}
        id="baseAmount"
        name="baseAmount"
      />{" "}
      {this.props.baseRate}
      <span>
        {" "}
        to {this.props.toRate}is= {this.props.converted} {this.props.toRate}
      </span>
    </div>
  );
};
