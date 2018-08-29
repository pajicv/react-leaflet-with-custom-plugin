import React, { Component } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-polylineoffset";
import logo from './logo.svg';
import './App.css';
import {Map, Polyline, TileLayer} from 'react-leaflet';

class App extends Component {
  render() {
      const center = [51.505, -0.09];

      const polyline = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]];

      return (
      <div className="App">
          <Map center={center} zoom={13}>
              <TileLayer
                  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polyline
                  color="red"
                  positions={polyline}
                  ref={ (polyref) => {this._onPolylineReady(polyref)}}
              />
              <Polyline
                  color="blue"
                  positions={polyline}
              />
          </Map>
      </div>
    );
  }

    _onPolylineReady = (polyref) => {

      const leafletPolyline = polyref.leafletElement;

      leafletPolyline.setOffset(20);

    };
}



export default App;
