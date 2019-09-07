import React, { Component } from "react";

import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; //with the provider the store is available to all the components in the app
import { ConfigureStore } from "../src/redux/configureStore";
const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
