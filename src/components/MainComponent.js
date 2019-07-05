import React, { Component } from "react";
//import PersonList from "./PersonListComponents";
import axios from "axios";
import Sidebar from "./SidebarComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import ManageExpenses from "./ManageEspensesComponent";
import { Footer } from "./FooterComponent";
import Currency from "./CurrencyComponent";
import CurrencyDetail from "./CurrencyDetailComponent";
import { SpiningRates } from "./SpiningRatesComponent";
import MyMap from "./googleMapComponent";
import SavingTips from "./SavingTipsComponent";
import { CORRENCY } from "../shared/currenciesData";
import CurrencyAccordingtoABC from "../shared/CurrencyGalleryArrange";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import CurrencyGallery from "./CurrencyGalleryComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      ratesCurrencies: [],
      converterPanel: []
    };

    this.axios = axios.create({
      baseURL: "http://data.fixer.io/api/"
    });
    console.log(JSON.stringify(this.state.rates));
    this.axiosConvert = this.axiosConvert.bind(this);
  }
  componentDidMount() {
    this.axios
      .get("latest", {
        params: {
          access_key: `7213b9a7b8b59ce8e6087fe3ba8243c2`
        }
      })
      .then(response => {
        console.log("from response" + response.data);
        this.setState({ rates: response.data.rates });
        this.setState({ ratesCurrencies: Object.keys(response.data.rates) });
        //console.log(this.state.ratesCurrencies);
        //console.log(JSON.stringify(this.state.rates));
      });
  }
  axiosConvert(amount, fromRate, toRate) {
    const fromRateValue = this.state.rates[fromRate];
    const toRateValue = this.state.rates[toRate];
    console.log("fromRateValue:" + fromRateValue);
    console.log("toRateValue:" + toRateValue);
    console.log("amountValue:" + amount);
    return amount * (toRateValue / fromRateValue);
  }
  GalleryImage({ match }) {
    let selectedCurrency = CORRENCY.filter(
      currency => parseInt(match.params.id, 10) === currency.id
    );
    return <CurrencyDetail currency={selectedCurrency} />;
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <Header />
          </Col>

          <Col md="auto">
            <Sidebar />
          </Col>

          <Col xs={11} sm={9}>
            <Switch>
              <Route
                path="/home"
                render={() => (
                  <Currency
                    {...this.props}
                    rates={this.state.ratesCurrencies}
                    ratesObject={this.state.rates}
                    axiosConvert={this.axiosConvert}
                  />
                )}
              />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/contact" render={() => <Contact />} />
              <Route
                exact
                path="/gallery"
                render={() => (
                  <CurrencyGallery
                    currencies={{ CORRENCY }}
                    currenciesABC={CurrencyAccordingtoABC}
                  />
                )}
              />
              <Route exact path="/gallery/:id" component={this.GalleryImage} />
              <Route exact path="/saving" render={() => <SavingTips />} />
              <Route exact path="/manage" render={() => <ManageExpenses />} />

              <Redirect to="/home" />
            </Switch>

            <MyMap />
            <SpiningRates ratesObject={this.state.rates} />
          </Col>
          <Col sm={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Main);
