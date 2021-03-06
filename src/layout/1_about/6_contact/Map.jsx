import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import css from "./styles.module.scss";

export default function Map() {
  const TOKEN = `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;
  const [viewport, setViewport] = useState({
    width: "30vw",
    height: "40vh",
    latitude: 60.16723,
    longitude: 24.92175,
    zoom: 12,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/theshortcut/ck9zsj3703njw1isa34hx4jzy"
      onViewportChange={(viewport) => {
        window.innerWidth <= `768`
          ? (viewport.width = "90vw")
          : (viewport.width = viewport.width);
        setViewport(viewport);
      }}
    >
      <Marker latitude={60.16723} longitude={24.92175}>
        <button className={css.marker}>
          <img src={require("../../../assets/icons/pin.png")} alt="logo" />
        </button>
      </Marker>
    </ReactMapGL>
  );
}
