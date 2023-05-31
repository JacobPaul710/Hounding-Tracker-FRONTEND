import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';
import './map.css';

function Map () {

    return (
        <>
            <MapContainer center={[44.412878, -120.230835]} zoom={7}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <div id='returnDiv'>
            <Link to='/minerals'><button id='returnButton'>Return to collection</button></Link>
            </div>
        </>
    )
}

export default Map;