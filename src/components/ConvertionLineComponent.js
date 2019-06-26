import React, { Component } from "react";
import CountryObject from "../shared/CountryObjectMaker";
import Select, { components } from "react-select";

const { Option } = components;

const IconOption = props => {
  //console.log("from IconOption:" + JSON.stringify(props));
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
      {" " + props.data.label}
    </Option>
  );
};

class SelectComponent extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
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
          components={{ Option: IconOption }}
          placeholder="Select Rate"
          ratesObject={ratesObject}
          styles={{
            option: base => ({
              ...base,
              borderRadius: 5,
              color: "black",
              background: "white",
              display: "flex",
              "font-size": "0.8em"
            })
          }}
          value={selectedOption}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SelectComponent;
