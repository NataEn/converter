import React, { Component } from "react";
import { Row, Col } from "reactstrap";
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
import SavingTips from "./SavingTipsComponent";
import ImageGallery from "./ImageGalleryComponent";
import Calculator from "./CalculatorComponent";
//import { Loading } from "./LoadingComponent";

//databases- now obtained from redux store- they are called from the reducer.js
import Logo from "../shared/logo/Logo_for_page_title200x200.png";

//importing actionCreators
import {
  updateRates,
  addRowToTable,
  deleteRowFromTable,
  resetTable,
  addTip,
  editExpenseTable,
  calculateExpensesSum
} from "../redux/ActionCreators";

// mapping redux-store state to props that are passed down to the components, using mapStateToStore function:

const mapStateToStore = state => {
  return {
    rates: state.initialRates.rates,
    ratesCurrencies: state.initialRates.ratesCurrencies,
    ratesLastUpdate: state.initialRates.ratesLastUpdate,
    country: state.country,
    logo: Logo,
    images: state.images,
    abcGallery: state.abcGallery,
    expenses_0: state.expenses_0,
    expenses_tables: state.expenses_tables,
    tips: state.tips,
    expenseTable: state.expenseTable,
    expensesSum: state.expensesSum
  };
};

//recieves the dispatch as one of the parameters from the dispatch function in the store
const mapDispatchToProps = dispatch => ({
  //commented Props are related to ManageExpenseComponent that is still in production
  /*fetchExpenses: () => {
      dispatch(fetchExpenses());
   },
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
  addTable: (tableName, budget) => dispatch(addTable(tableName, budget)),*/
  updateRates: () => dispatch(updateRates()),
  addRowToTable: (expense, price) => dispatch(addRowToTable(expense, price)),
  deleteRowFromTable: row => dispatch(deleteRowFromTable(row)),
  resetTable: () => dispatch(resetTable()),
  editExpenseTable: newTable => dispatch(editExpenseTable(newTable)),
  calculateExpensesSum: newSum => dispatch(calculateExpensesSum(newSum)),
  addTip: (author, tip) => dispatch(addTip(author, tip)),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: 2
    };
    this.currencyConvert = this.currencyConvert.bind(this);
    this.GalleryImage = this.GalleryImage.bind(this);
  }

  componentWillMount() {
    if (this.state.requests !== 0) {
      this.props.updateRates();
      // this.axios
      //   .get("latest", {
      //     params: {
      //       access_key: `7213b9a7b8b59ce8e6087fe3ba8243c2`
      //     }
      //   })
      //   .then(response => {
      //     this.setState({ rates: response.data.rates });
      //     this.setState({ ratesCurrencies: Object.keys(response.data.rates) });
      //   })
      //   .catch(error => {
      //     if (error.error.code === 104) console.log(error);
      //   });
      this.setState({ requests: this.state.requests - 1 });
      console.log("from main" + this.props.ratesLastUpdate);
    }
  }
  currencyConvert(amount, fromRate, toRate) {
    console.log(
      "from axios convert",
      amount,
      fromRate,
      this.props.ratesLastUpdate,
      toRate
    );
    const fromRateValue = this.props.rates[fromRate];
    const toRateValue = this.props.rates[toRate];
    return Math.round(amount * (toRateValue / fromRateValue) * 100) / 100;
  }

  //returning match object that is coming from the selection/clicking a gallery image
  GalleryImage({ match }) {
    let selectedLetter = match.params.letter;
    let selectedCountry = match.params.country;
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
                      ratesLastUpdate={this.props.ratesLastUpdate}
                      ratesObject={this.props.rates}
                      currencyConvert={this.currencyConvert}
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
                      ratesLastUpdate={this.props.ratesLastUpdate}
                      currencyConvert={this.currencyConvert}
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
                      editExpenseTable={this.props.editExpenseTable}
                      calculateExpensesSum={this.props.calculateExpensesSum}
                      expensesSum={this.props.expensesSum}
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

                {/* had som problemms with  <Redirect to="/home" /> */}
              </Switch>
            </Col>
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
