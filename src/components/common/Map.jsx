"use client";

import { useEffect, useRef, useState } from "react";

const APIKEY = "dj_bpoNDunfVa_irOFSLaAOJ82i23Qjko1-TwTdT2EY"


const HereMapWithCircle = ({ cordinate, radius = 1000 }) => {
    const lat = cordinate?.lat ? cordinate.lat : 37.7749;
    const lng = cordinate?.lng ? cordinate.lng : -122.4194;
    const center = { lat, lng };

    const mapContainer = useRef(null);
    const [isHereMapsLoaded, setHereMapsLoaded] = useState(false);

    useEffect(() => {
        // Check if the HERE Maps library is loaded
        const checkHereMaps = () => {
            if (window.H) {
                setHereMapsLoaded(true);
                console.log("H is there!")
            } else {
                console.log("H is missing!")
                setTimeout(checkHereMaps, 100); // Retry every 100ms
            }
        };
        checkHereMaps();
    }, []);


    useEffect(() => {
        if (!isHereMapsLoaded) return;

        const platform = new H.service.Platform({
            apikey: APIKEY, // Replace with your HERE Maps API key
        });

        const defaultLayers = platform.createDefaultLayers();

        const map = new H.Map(
            mapContainer.current,
            defaultLayers.vector.normal.map,
            {
                center,
                zoom: 14,
            }
        );
        console.log("MAP Object created!");
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        const circle = new H.map.Circle(center, radius, {
            style: {
                strokeColor: "rgba(0, 128, 255, 0.5)",
                lineWidth: 2,
                fillColor: "rgba(0, 128, 255, 0.2)",
            },
        });

        map.addObject(circle);

        return () => {
            map.dispose();
        };
    }, [isHereMapsLoaded, center, radius]);

    return <div ref={mapContainer} className="size-full" />;
};

export default HereMapWithCircle;



export const MapWithMarkers = ({ locations }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the map when the component mounts
        const platform = new H.service.Platform({
            apikey: APIKEY,
        });

        const defaultLayers = platform.createDefaultLayers();

        const map = new H.Map(
            mapRef.current,
            defaultLayers.vector.normal.map,
            {
                zoom: 10,
                center: { lat: 52.5200, lng: 13.4050 }, // Default center (Berlin)
            }
        );

        // Add behavior to map (pan and zoom)
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the UI (zoom controls, etc.)
        const ui = H.ui.UI.createDefault(map, defaultLayers);

        // Add multiple markers to the map
        locations.forEach((location) => {
            const { lat, lng, title } = location;

            // Create a marker at each location
            const marker = new H.map.Marker({ lat, lng });

            // Add the marker to the map
            map.addObject(marker);

            // Optionally, add a tooltip or info bubble
            marker.setData(title);
            marker.addEventListener("tap", function (evt) {
                const data = marker.getData();
                alert(data); // Show title of the location
            });
        });

        return () => {
            map.dispose(); // Clean up the map on component unmount
        };
    }, [locations]);

    return <div ref={mapRef} className="size-full" />;
};
