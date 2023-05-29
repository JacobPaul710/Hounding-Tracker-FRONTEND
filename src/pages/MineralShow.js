import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Nav2 from '../components/Nav2';


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
            <Nav2 />
            <div className="mineralImageDiv">
                <img src={mineral.image} alt={mineral.mineralType} />
            </div>
            <div className="mineralInfoDiv">
                <h1>Information</h1>
                <h2>Mineral Type: {mineral.mineralType}</h2>
                <h2>Date Found: {mineral.date}</h2>
                <h2>Conditions: {mineral.conditions}</h2>
                <h2>County: {mineral.county}</h2>
                <h2>Hounded by: {mineral.houndingName}</h2>
            </div>
        </>
    )
}

export default MineralShow;