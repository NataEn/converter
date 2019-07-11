import React, { Component } from "react";
import CountryObject from "../shared/CountryObjectMaker";
import Select, { components } from "react-select";

const { Option } = components;

const IconOption = props => {
  return (
    <Option {...props}>
      <div>
        <strong style={{ fontSize: "0.8em" }}>{props.data.label}</strong>
      </div>
    </Option>
  );
};

const colourStyles = {
  option: base => ({
    ...base,
    borderRadius: 5,
    color: "black",
    background: "white",
    display: "flex",
    "font-size": "1em",
    ":hover": { background: "#dde0d8" }
  })
};

class SelectABC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      name: ""
    };
  }

  handleChange = selectedOption => {
    if (selectedOption) {
      this.setState({ selectedOption: selectedOption });
      console.log(`Option selected array:`, selectedOption);
      const value = selectedOption;
      const name = this.props.name;
      if (value.length === 0) {
        return this.props.onChange([{ label: "ABC", value: "ABC" }], "ABC");
      } else {
        return this.props.onChange(value, name);
      }
    } else {
      return;
    }
  };
  render() {
    const abcd = () => {
      let abc = [];

      var letter = "";
      for (var i = 0; i < 26; i++) {
        letter = String.fromCharCode(65 + i);
        abc.push(letter);
      }
      return abc;
    };
    //console.log("this is the abc object" + JSON.stringify(abcObject));
    let options = abcd().map(opt => ({
      label: opt,
      value: opt
    }));
    //options = ["none", "ABC", ...options];
    return (
      <Select
        isMulti
        options={options}
        components={{ Option: IconOption }}
        placeholder="Select Letter"
        getOptionValue={option => option["value"]}
        styles={colourStyles}
        value={this.state.selectedOption}
        onChange={this.handleChange}
        isClearable
        captureMenuScroll={true}
      />
    );
  }
}

export default SelectABC;
