import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux"; //connects the main components to the store
//components
import Sidebar from "./SidebarComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import ManageExpenses from "./ManageEspensesComponent";
import Currency from "./CurrencyComponent";
import ImageDetail from "./ImageDetailComponent";
import { Footer } from "./FooterComponent";
import MyMap from "./googleMapComponent";
import SavingTips from "./SavingTipsComponent";
import { SpiningRates } from "./SpiningRatesComponent";
import ImageGallery from "./ImageGalleryComponent";

//databases- now obtained from redux store- they are called from the reducer.js
// import { COUNTRY } from "../shared/CountryObjectMaker";
import Logo from "../shared/logo/Logo_for_page_title200x200.png";
// import { IMAGE } from "../shared/ImagesData";
// import { IMAGES } from "../shared/ImagesData.1";
// import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";
//import { EXPENSE, calculateSpendSum } from "../shared/ExpenseData";

//importing actionCreators
import { addExpense, addTable, addComment } from "../redux/ActionCreators";

//a function that maps redux-store state to props that are passed down to the components:

const mapStateToStore = state => {
  return {
    rates: state.rates,
    ratesCurrencies: state.ratesCurrencies,
    converterPanel: state.converterPanel,
    country: state.country,
    logo: Logo,
    images: state.images,
    abcGallery: state.abcGallery,
    expenses_0: state.expenses_0,
    expenses_tables: state.expenses_tables,
    comments: state.comments
  };
};
//recieves the dispatch as one of the parameters from the dispatch function in the store
const mapDispatchToProps = dispatch => ({
  addExpense: (
    tableId,
    expense_type,
    amount_planned,
    currency,
    amount_spend,
    notes
  ) => {
    dispatch(
      addExpense(
        tableId,
        expense_type,
        amount_planned,
        currency,
        amount_spend,
        notes
      )
    );
  },
  addTable: (tableName, budget) => dispatch(addTable(tableName, budget)),
  addComment: (author, comment) => dispatch(addComment(author, comment))
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      ratesCurrencies: [],
      converterPanel: []
      // country: COUNTRY,
      // logo: Logo,
      // images: IMAGES,
      // abcGallery: GalleryAccordingtoABC,
      // expense: EXPENSE,
      // calculateSpendSum: calculateSpendSum
    };

    this.axios = axios.create({
      // baseURL: "http://data.fixer.io/api/"
    });
    //console.log(JSON.stringify(this.state.rates));
    this.axiosConvert = this.axiosConvert.bind(this);
    this.GalleryImage = this.GalleryImage.bind(this);
  }
  componentDidMount() {
    this.axios
      .get("latest", {
        params: {
          access_key: `7213b9a7b8b59ce8e6087fe3ba8243c2`
        }
      })
      .then(response => {
        //console.log("from response" + response.data);
        this.setState({ rates: response.data.rates });
        this.setState({ ratesCurrencies: Object.keys(response.data.rates) });
        //console.log(this.state.ratesCurrencies);
        //console.log(JSON.stringify(this.state.rates));
      });
  }
  axiosConvert(amount, fromRate, toRate) {
    const fromRateValue = this.state.rates[fromRate];
    const toRateValue = this.state.rates[toRate];
    //console.log("fromRateValue:" + fromRateValue);
    //console.log("toRateValue:" + toRateValue);
    //console.log("amountValue:" + amount);
    return amount * (toRateValue / fromRateValue);
  }

  //match object coming from the selected gallery image
  GalleryImage({ match }) {
    console.log("from matching image" + JSON.stringify(match.params));
    let selectedLetter = match.params.letter;
    let selectedCountry = match.params.country;
    // let selectedCountry = Object.keys(this.props.images[selectedLetter]).filter(
    //   image => match.params.country === image

    let selectedImage = this.props.images[selectedLetter][
      selectedCountry
    ].filter(image => parseInt(match.params.id, 10) === image.id);
    return (
      <ImageDetail
        key={match.params.country + parseInt(match.params.id, 10)}
        image={selectedImage[0]}
      />
    );
  }
  render() {
    return (
      <Container>
        <Row className="main-spacer-header-hr">
          <Col sm={12}>
            <Header logo={this.props.logo} />
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="sidebar">
            <Sidebar />
          </Col>

          <Col sm={8}>
            <Switch className="mainContainer">
              <Route
                path="/home"
                render={() => (
                  <Currency
                    {...this.props}
                    rates={this.props.ratesCurrencies}
                    ratesObject={this.props.rates}
                    axiosConvert={this.axiosConvert}
                    country={this.props.country}
                    image={this.props.images.a.algeria[0]}
                  />
                )}
              />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/contact" render={() => <Contact />} />
              <Route
                exact
                path="/gallery"
                render={() => (
                  <ImageGallery
                    images={this.props.images}
                    abcview={this.props.abcGallery}
                    rates={this.props.ratesCurrencies}
                    ratesObject={this.props.rates}
                    country={this.props.country}
                  />
                )}
              />
              <Route
                strict
                path="/gallery/:letter/:country/:id"
                component={this.GalleryImage}
              />
              <Route
                exact
                path="/saving"
                render={() => (
                  <SavingTips
                    {...this.props}
                    comments={this.props.comments}
                    addComment={this.props.addComment}
                  />
                )}
              />
              <Route
                exact
                path="/manage"
                render={() => (
                  <ManageExpenses
                    {...this.props}
                    expenses_0={this.props.expenses_0}
                    expenses_tables={this.props.expenses_tables}
                    addExpense={this.props.addExpense}
                    addTable={this.props.addTable}
                  />
                )}
              />

              {/* <Redirect to="/home" /> */}
            </Switch>

            <MyMap />
            <SpiningRates ratesObject={this.props.rates} />
          </Col>
          <Col sm={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(
  connect(
    mapStateToStore,
    mapDispatchToProps
  )(Main)
);
