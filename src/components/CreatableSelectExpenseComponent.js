import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";
import { colourOptions } from "../data";

export default class CreatableSingle extends Component {
  render() {
    return (
      <CreatableSelect
        isClearable
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={colourOptions}
      />
    );
  }
}
