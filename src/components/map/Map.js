import { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import moment from 'moment';

const mapContainerStyle = {
  width: '315px',
  height: '315px'
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
    const items = JSON.parse(window.localStorage.getItem('markers'));
    if (items) {
      setMarkers(items);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('markers', JSON.stringify(markers));
  }, [markers]);

  const onMapClick = useCallback((e) => {
    setMarkers(current => [...current, {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      petID: props.pet.petID
    }])
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onDeleteMarker = () => {
    let results = markers.filter(marker => marker.petID !== props.pet.petID);
    setMarkers(results);
  }

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    console.log('inside onMapLoad', map);
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
              key={marker.lat}
              position={{ lat: marker.lat, lng: marker.lng }}
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
                onDeleteMarker();
                setSelected(null);
              }}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
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
