import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Icon } from "leaflet";
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './map.css';

function Map() {
    const [markers, setMarkers] = useState([]);

    const fetchMarkers = async () => {
        try {
            let markerData = await fetch(`https://hounding-tracker-backend.onrender.com/minerals`);
            markerData = await markerData.json();
            setMarkers(markerData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMarkers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

      const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconSize: [38, 38] // size of the icon
      });

      if (!markers) {
        return <p>Loading Map data...</p>
    }

    return (
        <>
            <MapContainer center={[44.412878, -120.230835]} zoom={7}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker) => {
                    return (
                    <Marker position={marker.geocode} icon={customIcon} key={marker.geocode}>
                        <Popup>{marker.mineralType} hounded by {marker.houndingName}</Popup>
                     </Marker>
                )}
                )}
            </MapContainer>

            <div id='returnDiv'>
                <Link to='/minerals'><button id='returnButton'>Return to collection</button></Link>
            </div>
        </>
    )
            }


export default Map;