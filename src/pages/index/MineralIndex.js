import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../../components/nav/Nav2';

import './mineralIndex.css';

function Minerals() {
    const [minerals, setMinerals] = useState([]);

    const fetchMinerals = async () => {
        try {
            let mineralData = await fetch('https://hounding-tracker-backend.onrender.com/minerals');
            mineralData = await mineralData.json();
            setMinerals(mineralData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMinerals()
    }, []);

    if (!minerals) {
        return <p>Loading mineral data...</p>
    }

    return (
        <div id="indexBody">
            <Nav2 />
            <div id="indexInstruct">
                <h1>Enjoy browsing through this collection of finds around Oregon!</h1>
                <h3>Click each image for more information. Or click the <Link to='/minerals/map'><button id="mapButton">Map</button></Link> to view the collection displayed on a map!</h3>
            </div>
            
            {minerals.map((mineral) => {
                return (
                    <div id="mineralDiv" key={mineral._id}>
                        <Link to={`/minerals/${mineral._id}`}>
                            <img id="mineralImg" src={mineral.image} alt={mineral.Type} />
                        </Link>
                        <p id="foundBy">Found by: {mineral.houndingName}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Minerals;