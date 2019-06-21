import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {},
      red: "0",
      green: "0",
      blue: "0"
    };

    this.axios = axios.create({
      baseURL: "https://www.thecolorapi.com"
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    this.axios
      .get("id", {
        params: {
          rgb: `${this.state.red},${this.state.green},${this.state.blue}`
        }
      })
      .then(response => {
        console.log(response);
        this.setState({ color: response.data.name });
      });
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="number"
            min="0"
            max="255"
            name="red"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="number"
            min="0"
            max="255"
            name="green"
            step="5"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="number"
            min="0"
            max="255"
            name="blue"
            step="5"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <input type="submit" />
        </form>
        <p style={{ background: this.state.color.closest_named_hex }}>
          {this.state.color.value}
        </p>
      </div>
    );
  }
}

export default PersonList;
