import React, { Component } from "react";
import CountryObject from "../shared/CountryObjectMaker";
import Select, { components } from "react-select";

const { Option } = components;

const IconOption = props => {
  return (
    <Option {...props}>
      <div>
        <img
          className="option-image"
          src={process.env.PUBLIC_URL + `/flags/${props.data.flagpath}`}
          width={30}
          height={20}
          alt={props.data.lable}
        />{" "}
        {props.data.label}{" "}
        <strong style={{ fontSize: "0.8em" }}>{props.data.currency}</strong>
      </div>
    </Option>
  );
};
const SingleValue = ({ ...props }) => (
  <components.SingleValue {...props}>
    <span>
      <img
        className="option-image"
        src={process.env.PUBLIC_URL + `/flags/${props.data.flagpath}`}
        width={30}
        height={20}
        alt={props.data.lable}
      />
      <span>{" " + props.data.label}</span>
    </span>
    <strong>{" " + props.data.currency}</strong>
  </components.SingleValue>
);

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

class SelectCountry extends Component {
  constructor(props) {
    super(props);
    //this.selectName = React.createRef();
    this.state = {
      selectedOption: null,
      name: ""
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
    console.log(`Option selected:`, selectedOption.value);
    console.log(`Option selected:`, selectedOption);
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
      value: opt.country,
      currency: opt.currencyCode,
      flagpath: opt.image
    }));
    return (
      <Select
        options={options}
        components={{ Option: IconOption, SingleValue: SingleValue }}
        placeholder="Select Country"
        ratesObject={ratesObject}
        getOptionValue={option => option["flagpath"]}
        styles={colourStyles}
        value={this.state.selectedOption}
        onChange={this.handleChange}
        // isClearable
        // ref={this.selectName}
        captureMenuScroll={true}
      />
    );
  }
}

export default SelectCountry;
