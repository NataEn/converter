import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux"; //connects the main components to the store
import { actions } from "react-redux-form";
//components
import Sidebar from "./SidebarComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import ManageExpenses from "./ManageEspensesComponent";
import Currency from "./CurrencyComponent";
import ImageDetail from "./ImageDetailComponent";
import Footer from "./FooterComponent";
import MyMap from "./googleMapComponent";
import SavingTips from "./SavingTipsComponent";
import { SpiningRates } from "./SpiningRatesComponent";
import ImageGallery from "./ImageGalleryComponent";
import Calculator from "./CalculatorComponent";
import { Loading } from "./LoadingComponent";

//databases- now obtained from redux store- they are called from the reducer.js
// import { COUNTRY } from "../shared/CountryObjectMaker";
import Logo from "../shared/logo/Logo_for_page_title200x200.png";
// import { IMAGE } from "../shared/ImagesData";
// import { IMAGES } from "../shared/ImagesData.1";
// import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";
//import { EXPENSE, calculateSpendSum } from "../shared/ExpenseData";

//importing actionCreators
import {
  addExpense,
  addExpenses,
  fetchExpenses,
  addTable,
  addRowToTable,
  deleteRowFromTable,
  resetTable,
  addTip
} from "../redux/ActionCreators";

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
    tips: state.tips,
    expenseTable: state.expenseTable
  };
};
//recieves the dispatch as one of the parameters from the dispatch function in the store
const mapDispatchToProps = dispatch => ({
  // fetchExpenses: () => {
  //   dispatch(fetchExpenses());
  // },
  // addExpense: (
  //   tableId,
  //   expense_type,
  //   amount_planned,
  //   currency,
  //   amount_spend,
  //   notes
  // ) => {
  //   dispatch(
  //     addExpense(
  //       tableId,
  //       expense_type,
  //       amount_planned,
  //       currency,
  //       amount_spend,
  //       notes
  //     )
  //   );
  // },
  // addTable: (tableName, budget) => dispatch(addTable(tableName, budget)),
  addRowToTable: (expense, price) => dispatch(addRowToTable(expense, price)),
  deleteRowFromTable: row => dispatch(deleteRowFromTable(row)),
  resetTable: () => dispatch(resetTable()),
  addTip: (author, tip) => dispatch(addTip(author, tip)),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
  // postFeedback: (
  //   firstName,
  //   lastName,
  //   telnum,
  //   email,
  //   agree,
  //   contactType,
  //   message
  // ) => {
  //   dispatch(
  //     postFeedback(
  //       firstName,
  //       lastName,
  //       telnum,
  //       email,
  //       agree,
  //       contactType,
  //       message
  //     )
  //   );
  // }
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
    // this.props.fetchExpenses();
    // this.axios
    //   .get("latest", {
    //     params: {
    //       access_key: `7213b9a7b8b59ce8e6087fe3ba8243c2`
    //     }
    //   })
    //   .then(response => {
    //     //console.log("from response" + response.data);
    //     this.setState({ rates: response.data.rates });
    //     this.setState({ ratesCurrencies: Object.keys(response.data.rates) });
    //console.log(this.state.ratesCurrencies);
    //console.log(JSON.stringify(this.state.rates));
    // });
  }
  axiosConvert(amount, fromRate, toRate) {
    const fromRateValue = this.state.rates[fromRate];
    const toRateValue = this.state.rates[toRate];
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
        imagesLoading={this.props.loading}
      />
    );
  }
  render() {
    console.log(
      "from main component the expenseTable is " +
        JSON.stringify(this.props.expenseTable)
    );
    return (
      <div className="container-fluid">
        <Row className="main-spacer-header-hr">
          <Col xs={12} className="ml-0 mr-0 pl-0 pr-0">
            <Header logo={this.props.logo} />
          </Col>
        </Row>

        <Row className="backgroundImage">
          <Col className="sidebar" md={{ size: 2, order: 1 }} sm={12}>
            <Sidebar />
          </Col>
          <Col md={{ size: 9, order: 2 }} sm={12}>
            <Col sm={12}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Currency
                      {...this.props}
                      rates={this.props.ratesCurrencies}
                      ratesObject={this.props.rates}
                      axiosConvert={this.axiosConvert}
                      country={this.props.country}
                      images={this.props.images}
                    />
                  )}
                />
                <Route
                  path="/home"
                  render={() => (
                    <Currency
                      {...this.props}
                      rates={this.props.ratesCurrencies}
                      ratesObject={this.props.rates}
                      axiosConvert={this.axiosConvert}
                      country={this.props.country}
                      images={this.props.images}
                    />
                  )}
                />
                <Route exact path="/about" render={() => <About />} />
                <Route
                  exact
                  path="/contact"
                  render={() => (
                    <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                  )}
                />
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
                      tips={this.props.tips}
                      addTip={this.props.addTip}
                    />
                  )}
                />
                <Route
                  exact
                  path="/tripCalculator"
                  render={() => (
                    <Calculator
                      {...this.props}
                      expenseTable={this.props.expenseTable}
                      addRowToTable={this.props.addRowToTable}
                      deleteRowFromTable={this.props.deleteRowFromTable}
                      resetTable={this.props.resetTable}
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
                      expensesLoading={this.props.expenses_0.isLoading}
                      expensesErrMess={this.props.expenses_0.errMess}
                      addTable={this.props.addTable}
                    />
                  )}
                />

                {/* <Redirect to="/home" /> */}
              </Switch>
            </Col>
            {/* <Col sm={12}>
              <MyMap />
              <SpiningRates ratesObject={this.props.rates} />
            </Col> */}
          </Col>
        </Row>
        <Row className="main-spacer-header-hr">
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToStore,
    mapDispatchToProps
  )(Main)
);
