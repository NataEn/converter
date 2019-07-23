import React, { Component } from "react";
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
    const countryObject = this.props.country;
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
        // isClearable
        // ref={this.selectName}
        captureMenuScroll={true}
      />
    );
  }
}

export default SelectComponent;
