import React, { Component } from "react";
import image from "../shared/flags/ad.png";
import Select, { components } from "react-select";

const { Option } = components;

const IconOption = props => (
  <Option {...props}>
    <img src={image} width={50} height={30} />
    {props.data.label}
  </Option>
);
class SelectComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rates = this.props.rates;
    console.log(rates);
    let options2 = rates.map(opt => ({ label: opt, value: opt }));
    console.log(options2);
    return (
      <div>
        <Select options={options2} components={{ Option: IconOption }} />
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
