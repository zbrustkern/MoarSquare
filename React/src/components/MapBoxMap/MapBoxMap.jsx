import "./MapBoxMap.css"; // Ensure correct path and import statement
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

const mbToken = import.meta.env.VITE_MAPBOX_KEY; // Double-check access token
mapboxgl.accessToken = mbToken

const MapBoxMap = ({ location }) => {
    const [longitudeString, latitudeString] = location.slice(1,-1).split(",")
    const longitude = parseFloat(longitudeString)
    const latitude = parseFloat(latitudeString)
    console.log('long: '+ longitude)
    console.log('lat: '+ latitude)
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null); // Use state to manage map instance

    useEffect(() => {
        if (map) return; // Avoid re-initializing on updates

        try {
        const newMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/standard",
            center: [longitude, latitude],
            zoom: 9,
        });
        setMap(newMap); // Set map state

        newMap.addControl(new mapboxgl.FullscreenControl());
        newMap.addControl(new mapboxgl.NavigationControl());

        newMap.on("style.load", () => {
            newMap.setConfigProperty("basemap", "lightPreset", "dusk");
        });

        // Error handling (optional)
        } catch (error) {
        console.error("Error initializing map:", error);
        }
    }, [location]);

    return (
        <>
        <h1>Mapbox</h1>
        <div ref={mapContainer} className="map-container" /> {/* Provide container */}
        </>
    );
};

export default MapBoxMap;