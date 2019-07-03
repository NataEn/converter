import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import Currency from "./CurrencyComponent";
import { Link } from "react-router-dom";
import Select, { components } from "react-select";

function RenderCurrencyImage({ currency }) {
  return (
    <Card>
      <Link to={`/gallery/${currency.id}`}>
        <CardImg
          className="currency_image"
          src={currency.image_url}
          alt={currency.image_alt}
        />

        <CardTitle>{currency.image_alt}</CardTitle>
      </Link>
    </Card>
  );
}

class CurrencyGallery extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    // const currencies = this.props.currencies.CURRENCY;
    // console.log("from gallery" + JSON.stringify(gallery));
    const gallery = this.props.currencies.CORRENCY.map(currency => {
      return (
        <Col key={currency.id} sm="4" className="col-12 m-1">
          <RenderCurrencyImage currency={currency} />
        </Col>
      ); //end of return
    }); //end of gallery
    const AddImage = () => {
      return <div>Model Form for adding image</div>;
    };

    return (
      <div className="container">
        <Row>
          <Col>
            <h1>Currency Gallery</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>ABC</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>A</DropdownItem>
                  <DropdownItem>B</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button>Strength</Button>
              <Button> Country</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to="#">Currency Image Gallery</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        {gallery}
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to="#">Currency Image Gallery</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CurrencyGallery;
