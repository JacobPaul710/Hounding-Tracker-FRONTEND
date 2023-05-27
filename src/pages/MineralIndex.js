
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Minerals () {
    const [minerals, setMinerals] = useState([]);

    const fetchMinerals = async () => {
        try {
            let mineralData = await fetch('https://hounding-tracker-backend.onrender.com/minerals');
            mineralData = await mineralData.json();
            // console.log(mineralData);
            setMinerals(mineralData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMinerals()
    }, []);

    return (
        <>
            {minerals.map((mineral) => {
                return (
                    <div key={mineral._id}>
                        <h1>{mineral.image}</h1>
                    </div>
                )
            })}
        </>
    )
}

export default Minerals;