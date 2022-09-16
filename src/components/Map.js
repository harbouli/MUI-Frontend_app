import React from "react";

import GoogleMapReact from "google-map-react";

export default function Map() {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{height: "100vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyAARG82GQMzZ3sAFQHC6RVRByIXMnqy9x0"}}
        defaultCenter={center}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
}
