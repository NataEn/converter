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
  FormText,
  Badge
} from "reactstrap";
//import Currency from "./CurrencyComponent";
import { Link } from "react-router-dom";
//import Select, { components } from "react-select";
import { IMAGE } from "../shared/ImagesData";
import { IMAGES } from "../shared/ImagesData.1";
// import {
//   GalleryAccordingtoABC,
//   imagesByLetter,
//   imagesByCountry
// } from "../shared/CurrencyGalleryArrange";
import SelectCountry from "./SelectCountryComponent";
import SelectLetter from "./SelectABCComponent";

function RenderCurrencyImage({ image }) {
  return (
    <Card>
      <Link to={`/gallery/${image.id}`}>
        <CardImg
          className="currency_image"
          src={image.image_url}
          alt={image.image_alt}
        />

        <CardTitle>{image.image_alt}</CardTitle>
      </Link>
    </Card>
  );
}

function RenderGalleryViewIMAGES({ selectedViewType, value, handleFunction }) {
  let selectedvalueArray;
  if ((selectedViewType === "letter") | (selectedViewType === "ABC")) {
    selectedvalueArray = value.map(item => item.value.toLowerCase());
  } else if (selectedViewType === "country") {
    console.log("selectedViewType is country and value is " + value);
    selectedvalueArray = value.map(item => item.value.toLowerCase());
  }

  //console.log(
  // "from render function the selected values are:" +
  //   JSON.stringify(selectedvalueArray)
  //);
  // imagesSource = IMAGES;
  // let IMAGESKEys = Object.keys(imagesSource);
  // let ImagesInCountry;

  // if (selectedvalueArray.length === 0) {
  //   console.log("en ampty value arrray was sent");
  //   handleFunction("ABC", [{ label: "ABC", value: "A" }]);
  // }
  if (selectedViewType === "ABC") {
    return selectedvalueArray.map(value => {
      return Object.keys(IMAGES).map(letter => {
        return (
          <div key={letter}>
            <h4>{letter.toUpperCase()}</h4>
            {Object.keys(IMAGES[letter]).map(country => {
              return (
                <div key={country}>
                  <h5>{country.charAt(0).toUpperCase() + country.slice(1)}</h5>
                  {IMAGES[letter][country].map(image => {
                    return (
                      <Col key={image.id} sm="4" className="col-12 m-1">
                        <RenderCurrencyImage image={image} />
                      </Col>
                    );
                  })}
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
      if (value in IMAGES) {
        return (
          <div key={value}>
            <h4>{value.toUpperCase()}</h4>

            {Object.keys(IMAGES[value]).map(country => {
              return (
                <div key={country}>
                  <h5>{country.charAt(0).toUpperCase() + country.slice(1)}</h5>
                  {IMAGES[value][country].map(image => {
                    return (
                      <Col key={image.id} sm="4" className="col-12 m-1">
                        <RenderCurrencyImage image={image} />
                      </Col>
                    );
                  })}
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
      // console.log(
      //   "from country select to map value " +
      //     value +
      //     " checking IMAGES[value[0]]" +
      //     IMAGES[value[0]] +
      //     value[0]
      // );
      if (value[0] in IMAGES) {
        if (value in IMAGES[value[0]]) {
          return (
            <div key={value}>
              <h4>{value}</h4>

              {IMAGES[value[0]][value].map(image => {
                if (IMAGES[value[0]][value].length !== 0) {
                  return (
                    <Col key={image.id} sm="4" className="col-12 m-1">
                      <RenderCurrencyImage image={image} />
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

  //
  //   let strengthView;
  //   console.log("entered RenderGalleryView" + selectedViewType);
}
class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdownABC = this.toggleDropdownABC.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onLetterSelect = this.onLetterSelect.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownABCOpen: false,
      modal: false,
      imagesSource: IMAGE,
      selectedViewType: "ABC",
      selectedValue: [{ label: "ABC", value: "ABC" }]
    };
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
    console.log("entered handle change of select react");
    if (value || name) {
      this.setState({ selectedViewType: name });
      this.setState({ selectedValue: value });
      console.log(
        "from gallery component - handleSelectChange value and name are not null" +
          JSON.stringify(this.state.selectedValue) +
          JSON.stringify(this.state.selectedViewType)
      );
    }
  }
  //handeling the source of the images
  onLetterSelect(view) {
    //console.log("view" + view);
    this.setState({ selectedView: view });
    if (view === "none") {
      this.setState({ imagesSource: IMAGES });
    } else {
      this.setState({ imagesSource: IMAGES });
    }
    return;
  }

  render() {
    const abcd = () => {
      let abc = [];
      var letter = "";
      for (var i = 0; i < 26; i++) {
        letter = String.fromCharCode(65 + i);
        abc.push(letter);
      }
      return abc;
    };
    const stateSelect = (
      <SelectCountry
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
      />
    );

    const galleryView = (
      <RenderGalleryViewIMAGES
        selectedViewType={this.state.selectedViewType}
        value={this.state.selectedValue}
        handleFunction={this.handleSelectChange}
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
      <div className="container">
        <Row>
          <Col>
            <h1>Currency Gallery</h1>
          </Col>
        </Row>

        <Row>
          <div className="col-3 col-auto">{stateSelect}</div>
          <div className="col-3 col-auto">{selectLetter}</div>
          <div className="col-3 col-auto">
            <Button size="sm" onClick={this.toggleModal}>
              Add Image
            </Button>
          </div>
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
        {galleryView}

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

export default ImageGallery;
