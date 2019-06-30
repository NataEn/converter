import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

class MyMap extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAXe3-XgAkqI0uN9D_UTt00KUppm3zwC4w "
      >
        <GoogleMap id="example-map">...Your map components</GoogleMap>
      </LoadScript>
    );
  }
}
export default MyMap;
