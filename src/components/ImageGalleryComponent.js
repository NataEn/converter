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
import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";

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
function RenderGalleryView({ selectedView, imagesSource }) {
  //console.log("entered RenderGalleryView" + selectedView);
  if (selectedView === "none" || selectedView === "") {
    //console.log("selected none");
    return (
      <div>
        <h4>{selectedView}</h4>
        {imagesSource.map(image => {
          return (
            <Col key={image.id} sm="4" className="col-12 m-1">
              <RenderCurrencyImage image={image} />
            </Col>
          );
        })}
      </div>
    );
  } else if (selectedView === "ABC") {
    return (
      <div>
        <h4>{selectedView}</h4>
        {Object.keys(imagesSource).map(letter => {
          return (
            <div key={letter}>
              <h3>{letter}</h3>
              {imagesSource[`${letter}`].map(image => {
                console.log("from inner map " + selectedView);
                return (
                  <Col key={image.id} sm="6" className="col-12 m-1">
                    <RenderCurrencyImage image={image} />
                  </Col>
                ); //ende of map return
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h4>{selectedView}</h4>
        {imagesSource[`${selectedView.toLowerCase()}`].map(image => {
          //console.log("from inner map " + selectedView);
          return (
            <Col key={image.id} sm="4" className="col-12 m-1">
              <RenderCurrencyImage image={image} />
            </Col>
          ); //ende of map return
        })}
      </div>
    );
  }
}

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdownABC = this.toggleDropdownABC.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onLetterSelect = this.onLetterSelect.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownABCOpen: false,
      modal: false,
      imagesSource: IMAGE,
      selectedView: ""
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
  onLetterSelect(view) {
    //console.log("view" + view);
    this.setState({ selectedView: view });
    if (view === "none") {
      this.setState({ imagesSource: IMAGE });
    } else {
      this.setState({ imagesSource: GalleryAccordingtoABC });
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

    let galleryView = this.props.images.IMAGE.map(image => {
      return (
        <Col key={image.id} sm="4" className="col-12 m-1">
          <RenderCurrencyImage image={image} />
        </Col>
      ); //end of return
    }); //end of gallery

    const galleryView2 = (
      <RenderGalleryView
        selectedView={this.state.selectedView}
        imagesSource={this.state.imagesSource}
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
          <Col>
            <ButtonDropdown
              isOpen={this.state.dropdownABCOpen}
              toggle={this.toggleDropdownABC}
              onClick={this.renderSelectView}
              size="sm"
            >
              <Button id="caret">ABC</Button>
              <DropdownToggle caret />
              <DropdownMenu
                modifiers={{
                  setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: data => {
                      return {
                        ...data,
                        styles: {
                          ...data.styles,
                          overflow: "auto",
                          maxHeight: 200
                        }
                      };
                    }
                  }
                }}
              >
                <DropdownItem onClick={() => this.onLetterSelect("none")}>
                  none <Badge pill>2</Badge>
                </DropdownItem>
                <DropdownItem onClick={() => this.onLetterSelect("ABC")}>
                  ABC <Badge pill>2</Badge>
                </DropdownItem>
                {abcd().map(letter => {
                  return (
                    <DropdownItem
                      key={letter}
                      onClick={() => this.onLetterSelect(letter)}
                    >
                      {letter} <Badge pill>2</Badge>
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </ButtonDropdown>
            {"  "}
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
              onClick={this.renderSelectView}
              size="sm"
            >
              <Button id="caret">Strength</Button>
              <DropdownToggle caret />
              <DropdownMenu>
                <DropdownItem>Strongest to Weekest</DropdownItem>
                <DropdownItem>Weekest to Strongest</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            {"  "}

            <Button size="sm" onClick={this.renderSelectView}>
              {" "}
              Country
            </Button>
            {"  "}
            <Button size="sm" onClick={this.toggleModal}>
              Add Image
            </Button>
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

        {galleryView}
        <h1>Selected view</h1>
        {galleryView2}

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
