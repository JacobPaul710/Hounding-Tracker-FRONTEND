
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../../components/nav/Nav2';

function Minerals() {
    const [minerals, setMinerals] = useState([]);

    const fetchMinerals = async () => {
        try {
            let mineralData = await fetch('https://hounding-tracker-backend.onrender.com/minerals');
            mineralData = await mineralData.json();
            console.log(mineralData);
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
        <>
            <Nav2 />
            <h1>Enjoy browsing through this collection of finds around Oregon!</h1>
            {minerals.map((mineral) => {
                return (
                    <div className="mineralDiv" key={mineral._id}>
                        <Link to={`/minerals/${mineral._id}`}>
                            <img src={mineral.image} alt={mineral.Type} />
                        </Link>
                        <p>Found by: {mineral.houndingName}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Minerals;