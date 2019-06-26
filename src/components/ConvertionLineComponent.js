import React, { Component } from "react";
import CountryObject from "../shared/CountryObjectMaker";
import Select, { components } from "react-select";
import { Media } from "reactstrap";

const { Option } = components;

const IconOption = props => (
  <Option {...props}>
    <img
      src={process.env.PUBLIC_URL + `/flags/${props.data.flagpath}`}
      width={50}
      height={30}
      alt={props.data.lable}
    />
    {props.data.label}
  </Option>
);

class SelectComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this is the country object" + JSON.stringify(CountryObject));
    const rates = this.props.rates;
    const rates2 = CountryObject;
    let options2 = rates2.map(opt => ({
      label: opt.country,
      value: opt.countryCode,
      flagpath: opt.image
    }));
    console.log(options2);
    return (
      <div>
        <Select
          options={options2}
          components={{ Option: IconOption }}
          placeholder="Select Rate"
          styles={{
            option: base => ({
              ...base,
              borderRadius: 5,
              color: "black",
              background: "white",
              display: "flex",
              "text-align": "justify"
            })
          }}
        />
      </div>
    );
  }
}

export default SelectComponent;

// export const convertionLine = props => {
//   return (
//     <div>
//       <label htmlFor="baseRate">Base Rate </label>
//       <select
//         id="baseRate"
//         name="baseRate"
//         onChange={this.props.handleInputChange}
//         value={this.props.state.baseRate}
//       >
//         <option value="">I Have</option>
//         {this.props.rates.map(rate => (
//           <option key={rate}>
//             <img src={image} alt="someimage" />
//             {this.props.rateState}
//             {rate}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="toRate"> Convertion Rate </label>
//       <select
//         id="toRate"
//         name="toRate"
//         onChange={this.props.handleInputChange}
//         value={this.props.toRate}
//       >
//         <option value="">I Want</option>
//         {this.props.rates.map(rate => (
//           <option key={rate}>
//             {this.props.rateState}
//             {rate}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="baseAmount">convert </label>
//       <input
//         type="number"
//         min="0"
//         max="1000"
//         onChange={this.props.handleInputChange}
//         id="baseAmount"
//         name="baseAmount"
//       />{" "}
//       {this.props.baseRate}
//       <span>
//         {" "}
//         to {this.props.toRate}is= {this.props.converted} {this.props.toRate}
//       </span>
//     </div>
//   );
//};
