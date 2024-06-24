import "./MapBoxMap.css"
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.MAPBOX_KEY

const MapBoxMap = ({location}) => {
    const [longitude, latitude] = location.split(/,\s*/);
    const mapContainer = useRef(null);
    const map = useRef(null);
    // const [lng, setLng] = useState(longitude);
    // const [lat, setLat] = useState(latitude);
    // const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/standard',
        center: [longitude, latitude],
        zoom: 9,
        });

        map.current.addControl(new mapboxgl.FullscreenControl());
        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.on('style.load', () => {
            // Add custom configurations after style is loaded
            map.current.setConfigProperty('basemap', 'lightPreset', 'dusk');
        })
        // map.current.on('move', () => {
        //     setLng(map.current.getCenter().lng.toFixed(4));
        //     setLat(map.current.getCenter().lat.toFixed(4));
        //     setZoom(map.current.getZoom().toFixed(2));
        //   });
    
        
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map.current)
    
    },)

    
    return (
        <>
        <h1>Mapbox</h1>
        </>
        //   <div ref={mapContainer} className="map-container" />
      );
}

export default MapBoxMap