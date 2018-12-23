import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './now.css';

import marker from '../img/map-marker.png';
import marker2x from '../img/map-marker-x2.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  shadowSize: [100, 100],
  shadowAnchor: [28, 100],
  popupAnchor: [0, -50],
});

export default class WhereAmINowMap extends Component {
  state = {
    lat: 6.244203,
    lng: -75.581215,
    zoom: 3,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{ width: '100vw', height: 'calc(100vh - 50px)' }}>
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
        />
        <Marker position={position}>
          <Popup>Medellin, Colombia</Popup>
        </Marker>
      </Map>
    )
  }
}

WhereAmINowMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};
