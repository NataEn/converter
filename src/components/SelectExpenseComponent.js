import React, { Component } from "react";
import CountryObject from "../shared/CountryObjectMaker";
import Select, { components } from "react-select";

const { Option } = components;

const IconOption = props => {
  return (
    <Option {...props}>
      <div>
        <strong style={{ fontSize: "1em" }}>{props.data.label}</strong>
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
    "font-size": "0.8em",
    ":hover": { background: "#dde0d8" }
  }),
  control: (base, state) => ({
    ...base,
    //border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    padding: state.isFocused ? 0 : 0,
    margin: state.isFocused ? 0 : 0,
    // This line disable the blue border on clicking the
    boxShadow: state.isFocused ? 0 : 0,
    ":hover": {
      border: state.isFocused ? 0 : 0,
      padding: state.isFocused ? 0 : 0,
      margin: state.isFocused ? 0 : 0
    }
  })
};

class SelectExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {
        label: this.props.defaultValue,
        value: this.props.defaultValue
      }
    };
  }

  handleChange = selectedOption => {
    if (selectedOption) {
      this.setState({ selectedOption: selectedOption });
      console.log(`Option selected:`, selectedOption);
      const value = selectedOption.value;
      const name = selectedOption.label;
      if (value === "") {
        return this.props.onChange({ label: "Housing", value: "Housing" });
      } else {
        return this.props.onChange(name, value);
      }
    } else {
      return;
    }
  };
  render() {
    //console.log("this is the abc object" + JSON.stringify(abcObject));
    let options = [
      {
        label: "Visa",
        value: "Visa"
      },
      {
        label: "Flight",
        value: "Flight"
      },
      {
        label: "Transportation",
        value: "Transportation"
      },
      {
        label: "Housing",
        value: "Housing"
      },
      {
        label: "Communication",
        value: "Communication"
      },
      {
        label: "Healthcare",
        value: "Healthcare"
      },
      {
        label: "Travel Insurance",
        value: "Travel Insurance"
      },
      {
        label: "Food",
        value: "Food"
      },
      {
        label: "Clothing",
        value: "Clothing"
      },
      {
        label: "Gifts",
        value: "Gifts"
      },
      {
        label: "Shopping",
        value: "Shopping"
      },
      {
        label: "Entertainment",
        value: "Entertainment"
      },
      {
        label: "Emergency",
        value: "Emergency"
      },
      {
        label: "Spontaneous Adventures",
        value: "Spontaneous Adventures"
      }
    ];
    //options = ["none", "ABC", ...options];
    return (
      <Select
        //isMulti
        options={options}
        components={{ Option: IconOption }}
        placeholder="Expense Type"
        getOptionValue={option => option["value"]}
        styles={colourStyles}
        value={this.state.selectedOption}
        onChange={this.handleChange}
        //isClearable
        captureMenuScroll={true}
      />
    );
  }
}

export default SelectExpense;
