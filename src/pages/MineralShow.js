import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function MineralShow() {
    const [mineral, setMineral] = useState(null)
    const { id } = useParams();

    const fetchMineralDetails = async () => {
        try {
            let mineralDetaildata = await fetch(`https://hounding-tracker-backend.onrender.com/minerals/${id}`);
            mineralDetaildata = await mineralDetaildata.json();
            console.log(mineralDetaildata);
            console.log("This is the id", id);
            setMineral(mineralDetaildata);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMineralDetails()
    }, []);

    if (!mineral) {
        return <p>Loading mineral data...</p>
    }

    return (
        <>
            <h1>{mineral._id}</h1>
            <h1>{mineral.mineralType}</h1>
            <h1>{mineral.date}</h1>
            <h1>{mineral.conditions}</h1>
            <h1>{mineral.county}</h1>
            <h1>{mineral.image}</h1>
            <h1>{mineral.houndingName}</h1>
            <h1>{mineral.createdAt}</h1>
        </>
    )
}

export default MineralShow;