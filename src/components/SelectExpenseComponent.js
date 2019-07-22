import React, { Component } from "react";

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

    return (
      <select title="Choose type...">
        {options.map(opt => {
          return <option>{opt.value}</option>;
        })}
      </select>
    );
  }
}

export default SelectExpense;
