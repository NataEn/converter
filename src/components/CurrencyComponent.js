import React, { Component } from "react";
import SelectComponent from "./ConvertionLineComponent";
import { Button, Input, Card, CardLink, CardImg, Row, Col } from "reactstrap";

class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseRate: "",
      baseAmount: "",
      toRate: "",
      toRateCountry: "",
      converted: "",
      changed: true,
      message: "Please select convertion values",
      rateState: "State",
      ConvertionPanel: "",
      ConvertionContainerArray: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  addConvertingLine = e => {
    let panel = new Object();
    panel = this.state.ConvertionPanel;
    this.state.ConvertionContainerArray.push(panel);
    console.log(e);
  };
  deleteConvertingLine = index => {
    this.state.ConvertionContainerArray.slice(index + 1);
  };
  onFormSubmit(event) {
    event.preventDefault();
    const base = this.state.baseRate;
    const rate = this.state.toRate;
    const amount = this.state.baseAmount;
    let answer = "";
    //console.log("from form:" + values);
    if (base === "" && rate === "" && amount === "") {
      return;
    } else if (base !== "" && rate === "" && amount !== "") {
      answer = this.props.axiosConvert(amount, base, base);
    } else if (base === "" && rate !== "" && amount !== "") {
      answer = this.props.axiosConvert(amount, rate, rate);
    } else if (base !== "" && rate !== "" && amount === "") {
      answer = this.props.axiosConvert(1, base, rate);
    } else {
      answer = this.props.axiosConvert(amount, base, rate);
    }
    //console.log("calculated currency is:" + answer);
    if (+answer < 0) {
      this.setState({ converted: "not a valid convertion" });
    } else {
      this.setState({ converted: answer });
    }
    this.setState({ changed: false });
    return answer;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    this.setState({ changed: true });
    //console.log("amount" + this.state.baseAmount);
  }
  handleSelectChange(value, name, country) {
    console.log("from handleselectchange" + JSON.stringify(value));
    console.log("from handleselectchange" + JSON.stringify(name));
    console.log("from handleselectchange" + JSON.stringify(country));
    if (value !== null) {
      this.setState({ [name]: value });
      this.setState({ changed: true });
      this.setState({ toRateCountry: country.toLowerCase() });
      console.log(`${this.state.toRateCountry}`);
    } else {
      this.setState({ [name]: undefined });
      this.setState({ changed: true });
      this.setState({ toRateCountry: undefined });
    }
  }

  renderAnswer() {
    if (this.state.changed) {
      return <span>{`${this.state.message}`}</span>;
    } else {
      return (
        <span className="conversion-answer">
          {`${this.state.baseAmount} ${this.state.baseRate} to ${this.state.toRate} is ${this.state.converted} ${this.state.toRate}`}
        </span>
      );
    }
  }

  renderConvertionContainer = props => {
    const convertionPanel = (
      <Row className="d-flex justify-content-center align-items-center pt-2">
        <Col xs={12} sm={6} md={4} className="select-div">
          <span>I have:</span>
          <SelectComponent
            className="select-span"
            {...this.props}
            rates={this.props.rates}
            ratesObject={this.props.ratesObject}
            name="baseRate"
            onChange={this.handleSelectChange}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <span>I want:</span>
          <SelectComponent
            className="select-span"
            {...this.props}
            rates={this.props.rates}
            ratesObject={this.props.ratesObject}
            name="toRate"
            onChange={this.handleSelectChange}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          {" "}
          <label className="input-label" htmlFor="baseAmount">
            Amount:{" "}
          </label>
          <Input
            className="amount-to-convert"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="number"
            min="0"
            max="100000000"
            onChange={this.handleInputChange}
            onBlure={alert("you touched the input" + this.state.baseAmount)}
            id="baseAmount"
            name="baseAmount"
            placeholder="How much?"
            valid={this.state.baseAmount !== ""}
            invalid={this.state.baseAmount === ""}
          />
        </Col>
      </Row>
    );
    this.setState.ConvertionPanel = convertionPanel;
    this.state.ConvertionContainerArray[0] = convertionPanel;
    return this.state.ConvertionContainerArray.map(panel => panel);
  };
  // ratesObject- object that contains the rates object from promise
  render() {
    let countryImage;
    if (
      this.state.toRateCountry !== undefined &&
      this.state.toRateCountry !== ""
    ) {
      let letter = this.state.toRateCountry.slice(0, 1);
      if (letter !== undefined) {
        let countryObject = this.props.images[letter][this.state.toRateCountry];
        if (countryObject !== undefined && countryObject !== null) {
          countryImage = this.props.images[letter][this.state.toRateCountry][0];
        }
      }
    }

    return (
      <div className="container-fluid">
        <h1>Converter</h1>
        <form
          className="form ml-1"
          onSubmit={values => this.onFormSubmit(values)}
        >
          {this.renderConvertionContainer()}
          {/* end of convertion container */}
          <div className="row d-flex justify-content-around align-items-center">
            <Row className="converted-amount">
              <Col xs={1} sm={0} />
              <Col xs={10} sm={4} md={3}>
                <Card key={this.props.images.id} className="smallBill">
                  {this.state.toRate !== undefined &&
                  this.state.toRate !== "" ? (
                    countryImage !== undefined && countryImage !== "" ? (
                      <CardImg
                        top
                        width="100%"
                        src={countryImage.image_url_1}
                        alt={countryImage.image_alt_1}
                      />
                    ) : (
                      <p>No image available</p>
                    )
                  ) : (
                    <p>No image available</p>
                  )}
                  <CardLink href="#">More Bills</CardLink>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={8} className="conversion-answer">
                <this.renderAnswer />
              </Col>
            </Row>
            <Button
              className="btn btn-outline-success calculate"
              type="submit"
              onClick={this.onFormSubmit}
            >
              Calculate
            </Button>{" "}
          </div>
        </form>

        {/* <a href="https://www.google.com/maps/search/currency+exchange/@32.675339,35.2521005,13z/data=!3m1!4b1">
          google map
        </a> */}
      </div>
    );
  }
}

export default Currency;
