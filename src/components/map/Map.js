import { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import moment from 'moment';

const mapContainerStyle = {
  width: '400px',
  height: '400px'
}
const center = {
  lat: 47.6038321,
  lng: -122.330062
}

export default function Map(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getMarkers();
  }, []);

  async function postMarker(markerData) {
    if (markerData) {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/markers`,
        markerData
      );
    }
    getMarkers();
  }

  async function getMarkers() {
    let markerData = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/markers`,
    );
    setMarkers(markerData.data)
  }

  async function deleteMarker(id) {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_SERVER}/markers/${id}`,
    );
    getMarkers();
  }

  const onMapClick = useCallback((e) => {
    setMarkers(current => [...current, {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      petID: props.pet.petID
    }])
    let data = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      petID: props.pet.petID
    }
    postMarker(data);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'Error loading maps';

  return (
    <div>
      {isLoaded ?
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers && markers.filter(id => id.petID === props.pet.petID).map((marker) => (
            <Marker
              key={marker.time}
              position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
              icon={{
                url: '/paw.svg',
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
              }}
              onClick={() => {
                setSelected(marker)
              }}
              onDblClick={() => {
                deleteMarker(marker.id);
                setSelected(null);
              }}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: parseFloat(selected.lat), lng: parseFloat(selected.lng) }}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h4>Pet Spotted!</h4>
                <p>Spotted on {selected.time}</p>
              </div>
            </InfoWindow>) : null}
        </GoogleMap>
        : <div>Loading...</div>}
    </div>
  );
}
