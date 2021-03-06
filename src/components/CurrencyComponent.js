import React, { Component } from "react";
import SelectComponent from "./ConvertionLineComponent";
import { Button, Input, CardImg, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
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
      ConvertionPanel: "",
      ConvertionContainerArray: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  addConvertingLine = e => {
    let panel = {};
    panel = this.state.ConvertionPanel;
    this.state.ConvertionContainerArray.push(panel);
    //console.log(e);
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
    if (base === "" && rate === "" && amount === "") {
      return;
    } else if (base !== "" && rate === "" && amount !== "") {
      answer = this.props.currencyConvert(amount, base, base);
    } else if (base === "" && rate !== "" && amount !== "") {
      answer = this.props.currencyConvert(amount, rate, rate);
    } else if (base !== "" && rate !== "" && amount === "") {
      answer = this.props.currencyConvert(1, base, rate);
    } else {
      answer = this.props.currencyConvert(amount, base, rate);
    }
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
  }
  handleSelectChange(value, name, country) {
    if (value !== null) {
      this.setState({ [name]: value });
      this.setState({ changed: true });
      this.setState({ toRateCountry: country.toLowerCase() });
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
        <span>
          {" "}
          <span className="conversion-answer">
            {`${this.state.baseAmount} ${this.state.baseRate} to ${this.state.toRate} is ${this.state.converted} ${this.state.toRate}`}
          </span>
          <br />
          <small>
            <i>{` Last Update: ${this.props.ratesLastUpdate}`}</i>
          </small>
        </span>
      );
    }
  }

  renderConvertionContainer = props => {
    const convertionPanel = (
      <Row
        className="d-flex justify-content-center align-items-center pt-2"
        key="convertionDataPanel"
      >
        <Col key="baseRate" xs={12} sm={6} md={4} className="select-div">
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
        <Col xs={12} sm={6} md={4} key="toRate">
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
        <Col xs={12} sm={6} md={4} key="baseAmount">
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
            // onBlure={alert("you touched the input" + this.state.baseAmount)}
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
  // ratesObject- object that contains the rates object that comes from the http request promise(or the js file if error)
  render() {
    let countryImage;
    if (
      this.state.toRateCountry !== undefined &&
      this.state.toRateCountry !== ""
    ) {
      let letter = this.state.toRateCountry.slice(0, 1);
      if (letter !== undefined) {
        if (this.props.images[letter] !== undefined) {
          let countryObject = this.props.images[letter][
            this.state.toRateCountry
          ];
          if (countryObject !== undefined && countryObject !== null) {
            countryImage = this.props.images[letter][
              this.state.toRateCountry
            ][0];
          }
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
                <div>
                  {this.state.toRate !== undefined &&
                  this.state.toRate !== "" ? (
                    countryImage !== undefined && countryImage !== "" ? (
                      <Link to={`/gallery`}>
                        <CardImg
                          className="smallBill"
                          width="100%"
                          src={countryImage.image_url_1}
                          alt={countryImage.image_alt_1}
                        />
                      </Link>
                    ) : (
                      <FontAwesomeIcon
                        className="fa-3x p-2 bg-warning smallBill"
                        icon={faMoneyBillAlt}
                      />
                    )
                  ) : (
                    <FontAwesomeIcon
                      className="fa-3x p-2 bg-warning"
                      width="100%"
                      icon={faMoneyBillAlt}
                    />
                  )}
                </div>
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
      </div>
    );
  }
}

export default Currency;
