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

const colourStyles = {
  option: base => ({
    ...base,
    borderRadius: 5,
    color: "black",
    background: "white",
    display: "block",
    "font-size": "0.8em",
    ":hover": { background: "#dde0d8" }
  })
};

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.selectName = React.createRef();
    this.state = {
      selectedOption: null,
      name: ""
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
    console.log(`Option selected:`, selectedOption.value);
    const value = selectedOption.value;
    const name = this.props.name;
    return this.props.onChange(value, name);
  };
  render() {
    //console.log("this is the country object" + JSON.stringify(CountryObject));
    const ratesObject = this.props.ratesObject;
    const countryObject = CountryObject;
    let options = countryObject.map(opt => ({
      label: opt.country,
      value: opt.currencyCode,
      currency: opt.currencyCode,
      flagpath: opt.image
    }));
    return (
      <Select
        options={options}
        components={{ Option: IconOption, SingleValue: SingleValue }}
        placeholder="Select Rate"
        ratesObject={ratesObject}
        getOptionValue={option => option["flagpath"]}
        styles={colourStyles}
        value={this.state.selectedOption}
        onChange={this.handleChange}
        // ref={this.selectName}
        captureMenuScroll={true}
      />
    );
  }
}

export default SelectComponent;
