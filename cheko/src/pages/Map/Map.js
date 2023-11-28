import { useState, useContext } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css'
import { RestaurantContext } from '../../App'
import { MAPBOX_ACCESS_TOKEN } from '../../utils/constants';
import Tooltip from './components/Tooltip';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const Map2 = () => {
    const { restaurantData } = useContext(RestaurantContext);
    const [showPopup, setShowPopup] = useState({});


    return (
        <>
            <Map
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                initialViewState={{
                    longitude: 46.6732065,
                    latitude: 24.7131947,
                    zoom: 14
                }}
                style={{ height: '85vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
            >
                {restaurantData.map((item, index) => {
                    return (
                        <>
                            <Marker
                                color='pink'
                                key={index}
                                longitude={Number(item.lng)}
                                latitude={Number(item.lat)}
                                anchor="bottom"
                                onClick={(e) => {
                                    e.originalEvent.stopPropagation();
                                    setShowPopup({ [item.id]: true })
                                }}
                            />
                            {showPopup[item.id] && (
                                <Popup
                                    key={index}
                                    longitude={Number(item.lng)} latitude={Number(item.lat)}
                                    anchor="bottom"
                                    offset={60}
                                    onClose={() => setShowPopup(false)}
                                    closeButton={false}
                                >
                                    <Tooltip item={item} />
                                </Popup>)}
                        </>
                    )
                }
                )}
            </Map>
        </>
    );
}

export default Map2;
