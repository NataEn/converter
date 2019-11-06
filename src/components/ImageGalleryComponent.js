import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Label,
  Input,
  FormGroup,
  FormText
} from "reactstrap";
import { Link } from "react-router-dom";
import SelectCountry from "./SelectCountryComponent";
import SelectLetter from "./SelectABCComponent";

function RenderCurrencyImage({ image, letter, country }) {
  return (
    <Card>
      <Link
        className="d-flex flex-column justify-content-around"
        to={`/gallery/${letter}/${country}/${image.id}`}
      >
        <CardImg
          top
          src={image.image_url_1}
          alt={image.image_alt_1}
          data-img-type={image.type}
          className="flex-grow-1"
        />
        <CardTitle className="text-center">{image.image_alt_1}</CardTitle>
      </Link>
    </Card>
  );
}

function RenderGalleryViewIMAGES({ selectedViewType, value, images }) {
  let selectedvalueArray = value.map(item => item.value.toLowerCase());

  if (selectedViewType === "ABC") {
    return selectedvalueArray.map(() => {
      return Object.keys(images).map(letter => {
        return (
          <div key={letter}>
            <h4>{letter.toUpperCase()}</h4>

            {Object.keys(images[letter]).map(country => {
              return (
                <div key={country}>
                  <h5>{country.charAt(0).toUpperCase() + country.slice(1)}</h5>
                  <Row className="m-1 d-flex flex-row justify-content-around">
                    {images[letter][country].map(image => {
                      return (
                        <Col key={image.id} sm={4} xs={12}>
                          <RenderCurrencyImage
                            image={image}
                            letter={letter}
                            country={country}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </div>
        );
      });
    });
  } else if (selectedViewType === "letter") {
    return selectedvalueArray.map(value => {
      //console.log(value + "the images of value are");
      if (value in images) {
        return (
          <div key={value}>
            <h4>{value.toUpperCase()}</h4>

            {Object.keys(images[value]).map(country => {
              return (
                <div key={country}>
                  <h5>{country.charAt(0).toUpperCase() + country.slice(1)}</h5>
                  <div className="m-1 d-flex flex-row justify-content-around">
                    {" "}
                    {images[value][country].map(image => {
                      return (
                        <Col key={image.id} sm={4} xs={12}>
                          <RenderCurrencyImage
                            image={image}
                            letter={value}
                            country={country}
                          />
                        </Col>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div key={value}>
            <h4>No images were found for {value[0].toUpperCase()}</h4>
          </div>
        );
      }
    });
  } else if (selectedViewType === "country") {
    return selectedvalueArray.map(value => {
      if (value[0] in images) {
        if (value in images[value[0]]) {
          return (
            <div key={value}>
              <h4>{value}</h4>
              <div className="m-1 d-flex flex-row justify-content-around">
                {images[value[0]][value].map(image => {
                  if (images[value[0]][value].length !== 0) {
                    return (
                      <Col key={image.id} sm={4} xs={12}>
                        <RenderCurrencyImage
                          image={image}
                          letter={value[0]}
                          country={value}
                        />
                      </Col>
                    );
                  } else {
                    return (
                      <Col>
                        <h6>No images for {value}</h6>
                      </Col>
                    );
                  }
                })}
              </div>
            </div>
          );
        } else {
          return (
            <Col>
              <h6>
                No images for {value.charAt(0).toUpperCase() + value.slice(1)}
              </h6>
            </Col>
          );
        }
      } else {
        return (
          <div key={value}>
            <h4>No images were found for {value[0].toUpperCase()}</h4>
          </div>
        );
      }
    });
  }
}
class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropdownABCOpen: false,
      modal: false,
      imagesSource: this.props.images,
      selectedViewType: "ABC",
      selectedValue: [{ label: "ABC", value: "ABC" }]
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdownABC = this.toggleDropdownABC.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggleDropdownABC() {
    this.setState(prevState => ({
      dropdownABCOpen: !prevState.dropdownABCOpen
    }));
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleSelectChange(value, name) {
    if (value || name) {
      this.setState({ selectedViewType: name });
      this.setState({ selectedValue: value });
    }
  }

  render() {
    const stateSelect = (
      <SelectCountry
        country={this.props.country}
        className="select-span"
        {...this.props}
        rates={this.props.rates}
        ratesObject={this.props.ratesObject}
        name="country"
        onChange={this.handleSelectChange}
      />
    );
    const selectLetter = (
      <SelectLetter
        className="select-span"
        {...this.props}
        name="letter"
        onChange={this.handleSelectChange}
        isMulti
        ref={this.simulateClick}
      />
    );

    const galleryView = (
      <RenderGalleryViewIMAGES
        selectedViewType={this.state.selectedViewType}
        value={this.state.selectedValue}
        handleFunction={this.handleSelectChange}
        images={this.props.images}
      /> //end of return
    ); //end of gallery

    const AddCurrency = (
      <Modal toggle={this.state.toggleModal} isOpen={this.state.modal}>
        <ModalBody>
          <ModalHeader>Add Currency Image</ModalHeader>
          <Form>
            <FormGroup>
              <Label for="name">Currency Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="dollar/euro/pound/ etc."
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">Currency State</Label>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="Unites States/Jermany/UK/etc."
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Currency Type</Label>
              <Input
                type="text"
                name="type"
                id="type"
                placeholder="coin/bill"
              />
            </FormGroup>
            <FormGroup>
              <Label for="value">Currency Value</Label>
              <Input
                type="text"
                name="value"
                id="value"
                placeholder="1/10/20/50/etc."
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageFile">File</Label>
              <Input type="file" name="file" id="imageFile" />
              <FormText color="muted">Please add your image here.</FormText>
            </FormGroup>
            <ModalFooter>
              Full Disclosure: we are counting on your personal integrity to
              post authentic images and appropriate data.
            </ModalFooter>
            <Button>Submit</Button>

            <Button color="secondary" onClick={this.toggleModal}>
              close
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );

    return (
      <div className="container-fluid">
        <Row>
          <Col>
            <h1>Currency Gallery</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Currency Gallery</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        <Row className="buttonPanel form mt-2">
          <Col xs={12} sm={4} className="col-auto pb-1">
            {stateSelect}
          </Col>
          <Col xs={12} sm={4} className="col-auto pb-1">
            {selectLetter}
          </Col>
          <Col xs={12} sm={4} className="col-auto pb-1">
            <Button className="addImage" size="sm" onClick={this.toggleModal}>
              Add Image
            </Button>
          </Col>
          {AddCurrency}
          <div className="imageGallery innerForm"> {galleryView}</div>
        </Row>

        <Row>
          <Col>
            <Breadcrumb className="mt-4">
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Currency Gallery</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ImageGallery;
