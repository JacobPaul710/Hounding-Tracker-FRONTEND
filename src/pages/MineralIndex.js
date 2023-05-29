
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            
            {minerals.map((mineral) => {
                return (
                    <Link to={`/minerals/${mineral._id}`} key={mineral._id}>
                        <img src={mineral.image} alt={mineral.Type} />
                    </Link>
                )
            })}
        </>
    )
}

export default Minerals;