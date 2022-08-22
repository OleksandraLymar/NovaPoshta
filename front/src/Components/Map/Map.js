import React from 'react'
import { GoogleMap, useJsApiLoader,Marker  } from '@react-google-maps/api';
import env from "react-dotenv";

//стили для контейнера
const containerStyle = {
    width: '800px',
    height: '400px',
    marginTop: 60,
    marginRight: 'auto',
    marginLeft: 'auto'
};

let center = {
    lat: 46.482084,
    lng: 30.731121
};

function MapNovaPoshta(props) {
    if (props.warehouses[0]) {
        center = {
            lat: parseFloat(props.warehouses[0].Latitude),
            lng: parseFloat(props.warehouses[0].Longitude)
        }
    }


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            zoom={10}
        >
            {props.warehouses.map(wh => {
                console.log(wh.Latitude + " " + wh.Longitude)
                let pos = {lat: parseFloat(wh.Latitude), lng: parseFloat(wh.Longitude) }
                return (
                    <Marker
                        key={wh.Ref} position={pos} />
                )
            })}

        </GoogleMap>
    ) : <></>
}

export default React.memo(MapNovaPoshta)