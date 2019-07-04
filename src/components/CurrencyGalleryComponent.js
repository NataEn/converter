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
  DropdownItem,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormFeedback,
  Label,
  Input,
  FormGroup,
  FormText
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
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      dropdownOpen: false,
      modal: false
    };
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
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
    const AddCurrency = (
      <Modal toggle={this.state.toggleModal} isOpen={this.state.modal}>
        {console.log("modal was opened")}
        <ModalBody>
          <ModalHeader>Add Currency Image</ModalHeader>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
          </Form>
          <ModalFooter>
            Full Disclosure: we are counting on your personal integrity to Post
            authentic images and appropriate data.
          </ModalFooter>
          <Button color="secondary" onClick={this.toggleModal}>
            close
          </Button>
        </ModalBody>
      </Modal>
    );

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
                toggle={this.toggleDropdown}
              >
                <DropdownToggle caret>ABC</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>A</DropdownItem>
                  <DropdownItem>B</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button>Strength</Button>
              <Button> Country</Button>
              <Button onClick={this.toggleModal}>Add Curreccy Image</Button>
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
        {AddCurrency}
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
