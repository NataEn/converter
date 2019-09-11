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
        <strong style={{ fontSize: "0.7em" }}>{props.data.currency}</strong>
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
  option: (base, state) => ({
    ...base,
    borderRadius: 5,
    color: "black",
    background: "white",
    display: "flex",
    "font-size": "0.7em",
    ":hover": { background: "#dde0d8" }
  })
};

class SelectCountry extends Component {
  constructor(props) {
    super(props);
    //this.selectName = React.createRef();
    this.state = {
      selectedOption: [],
      name: ""
    };
  }

  handleChange = selectedOption => {
    if (selectedOption) {
      this.setState({ selectedOption: selectedOption });
      console.log(
        `in country select country Option selected array:`,
        selectedOption
      );
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
  //
  render() {
    //console.log("this is the country object" + JSON.stringify(CountryObject));
    const ratesObject = this.props.ratesObject;
    const countryObject = this.props.country;

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
        isClearable
        isMulti
        // ref={this.selectName}
        captureMenuScroll={true}
      />
    );
  }
}

export default SelectCountry;
