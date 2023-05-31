import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Nav1 from '../../components/nav/Nav1';
import moment from 'moment'

import './mineralShow.css';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!mineral) {
        return <p>Loading mineral data...</p>
    }

    const formatted = moment(mineral.date).format("MM/DD/YYYY")
    return (
        <div id="showBody">
            <Nav1 />
            <div>
                <img id="mineralImageDiv" src={mineral.image} alt={mineral.mineralType} />
            </div>
            <div id="mineralInfoDiv">
                <h1>Information</h1>
                <h2>Mineral Type: {mineral.mineralType}</h2>
                <h2>Date Found: {formatted}</h2>
                <h2>Conditions: {mineral.conditions}</h2>
                <h2>County: {mineral.county}</h2>
                <h2>Hounded by: {mineral.houndingName}</h2>
            </div>
        </div>
    )
}

export default MineralShow;