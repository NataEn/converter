import React, { Component } from "react";
import CountryObject from "../shared/CountryObjectMaker";
import Select, { components } from "react-select";

const { Option } = components;

const IconOption = props => {
  return (
    <Option {...props}>
      <img
        className="option-image"
        src={process.env.PUBLIC_URL + `/flags/${props.data.flagpath}`}
        width={30}
        height={20}
        alt={props.data.lable}
      />
      <strong>{" " + props.data.currency}</strong>
      <span>{" " + props.data.label}</span>
    </Option>
  );
};
const SingleValue = ({ ...props }) => (
  <components.SingleValue {...props}>
    <img
      className="option-image"
      src={process.env.PUBLIC_URL + `/flags/${props.data.flagpath}`}
      width={30}
      height={20}
      alt={props.data.lable}
    />
    <strong>{" " + props.data.currency}</strong>
    <span>{" " + props.data.label}</span>
  </components.SingleValue>
);

class SelectComponent extends Component {
  state = {
    selectedOption: null,
    view: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };
  render() {
    //console.log("this is the country object" + JSON.stringify(CountryObject));
    const ratesObject = this.props.ratesObject;
    const countryObject = CountryObject;
    let options = countryObject.map(opt => ({
      label: opt.country,
      value: opt.countryCode,
      currency: opt.currencyCode,
      flagpath: opt.image
    }));
    return (
      <div>
        <Select
          options={options}
          components={{ Option: IconOption, SingleValue: SingleValue }}
          placeholder="Select Rate"
          ratesObject={ratesObject}
          getOptionValue={option => option["flagpath"]}
          styles={{
            option: base => ({
              ...base,
              borderRadius: 5,
              color: "black",
              background: "white",
              display: "flex",
              alignContent: "right",
              alignItems: "center",
              justifyContent: "space-between",
              "font-size": "0.8em"
            })
          }}
          value={this.state.selectedOption}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SelectComponent;
