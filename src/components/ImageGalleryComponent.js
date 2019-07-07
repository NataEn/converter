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
import { ArrayAccordingtoLetterF } from "../shared/CurrencyGalleryArrange";

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
//should be send to main component:
// function RenderGalleryView(identifier){
//   if(identifier==0){
//     return (this.props.images.map(image => {
//       return (
//         <Col key={image.id} sm="4" className="col-12 m-1">
//           <RenderCurrencyImage image={image} />
//         </Col>
//       );
//   }))
// }

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
      modal: false
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
  onLetterSelect(letter) {
    console.log(letter);
    let array = ArrayAccordingtoLetterF(letter);
  }

  render() {
    const abcd = () => {
      let n = [];
      var letter = "";
      for (var i = 0; i < 26; i++) {
        letter = String.fromCharCode(65 + i);
        n.push(letter);
      }
      return n;
    };

    const galleryABC = this.props.imagesABC;

    const gallery = this.props.images.IMAGE.map(image => {
      return (
        <Col key={image.id} sm="4" className="col-12 m-1">
          <RenderCurrencyImage image={image} />
        </Col>
      ); //end of return
    }); //end of gallery
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
              onClick={this.selectLetter}
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
                {abcd().map(letter => {
                  return (
                    <DropdownItem
                      key={letter}
                      onClick={() => this.onLetterSelect({ letter })}
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
            <Button size="sm"> Country</Button>
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

        {gallery}
        {galleryABC}
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
