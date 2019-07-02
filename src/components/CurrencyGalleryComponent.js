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
      <Link to={`/gallery/`}>
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
        <Col key={currency.id} className="col-12 col-md-4 m-1">
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
            <Button>Strongest to Weakest</Button>
            <Button> Weakest to Strongest</Button>
            <Button> Country</Button>
          </ButtonGroup>
        </Row>
        <Row>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <Link to="#">Currency Image Gallery</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Row>
        {gallery}
      </div>
    );
  }
}
export default CurrencyGallery;
