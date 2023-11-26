import { useRef, useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css'
import { RestaurantContext } from '../../App'
import { MAPBOX_ACCESS_TOKEN } from '../../utils/constants';
import Tooltip from './components/Tooltip';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const Map = () => {
    const { restaurantData, filteredRestaurantData } = useContext(RestaurantContext);
    const mapContainer = useRef(null);
    const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        // map.on('move', () => {
        //     setLng(map.getCenter().lng.toFixed(4));
        //     setLat(map.getCenter().lat.toFixed(4));
        //     setZoom(map.getZoom().toFixed(2));
        // });

        // change cursor to pointer when user hovers over a clickable feature
        map.on('mouseenter', e => {
            if (e.features.length) {
                map.getCanvas().style.cursor = 'pointer';
            }
        });

        // reset cursor to default when user is no longer hovering over a clickable feature
        map.on('mouseleave', () => {
            map.getCanvas().style.cursor = '';
        });

        // add tooltip when users mouse move over a point
        map.on('mousemove', e => {
            const features = map.queryRenderedFeatures(e.point);
            if (features.length) {
                const feature = features[0];

                // Create tooltip node
                const tooltipNode = document.createElement('div');
                ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

                // Set tooltip on map
                tooltipRef.current
                    .setLngLat(e.lngLat)
                    .setDOMContent(tooltipNode)
                    .addTo(map);
            }
        });

        // Create default markers
        restaurantData.map((item) =>
            new mapboxgl.Marker().setLngLat([Number(item.lng), Number(item.lat)]).addTo(map)
        );

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        // Clean up on unmount
        return () => map.remove();
    });


    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    );
}

export default Map;
