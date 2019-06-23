import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

class MyMap extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBeRL5nDOgcWsvub_FHmFr5l1SCUHcjQ4w"
      >
        <GoogleMap id="example-map">...Your map components</GoogleMap>
      </LoadScript>
    );
  }
}
export default MyMap;
