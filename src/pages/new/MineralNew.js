import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav3 from '../../components/nav/Nav3';

import './mineralNew.css';

function NewMineral() {
   let [mineralForm, setMineralForm] = useState({
    mineralType:" ",
    date: 0,
    conditions:" ",
    county:" ",
    geocode: [0, 0],
    image:" ",
    houndingName:" "
   }) 

   const navigate = useNavigate();

   function handleChange(e) {
    setMineralForm((previousFormState) => ({
        ...previousFormState,
        [e.target.name]: e.target.value
    }))
   }



   async function handleSubmit(e) {
    try{
        e.preventDefault();
        mineralForm.geocode = mineralForm.geocode.split(", ");
        await fetch('https://hounding-tracker-backend.onrender.com/minerals', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mineralForm)
        })
    } catch(error) {
        console.log(error);
    } finally{
        e.target.reset();
        navigate('/minerals');
    }
   }


    return (
        <div id='newBody'>
            <Nav3 />
        <div id="newPageInfo">
            <h1>Add your hounding find to our collection!</h1>
        </div>
        <div id="newMineralForm">
            <form onSubmit={handleSubmit}>
                <label>Mineral Type:</label>
                <input type="text" name="mineralType" onChange={handleChange} placeholder="Mineral Type"/>
                <br></br>
                <label>Date:</label>
                <input type="date" name="date" onChange={handleChange} placeholder="Date of find"/>
                <br></br>
                <label>Conditions:</label>
                <input type="text" name="conditions" onChange={handleChange} placeholder="Conditions on day of find"/>
                <br></br>
                <label>County:</label>
                <input type="text" name="county" onChange={handleChange} placeholder="County of find"/>
                <br></br>
                <label>Optional Coordinates:</label>
                <input type="text" name="geocode" onChange={handleChange} placeholder="Enter rough coordinates of find"/>
                <br></br>
                <label>Image:</label>
                <input type="text" name="image" onChange={handleChange} placeholder="Paste image URL"/>
                <br></br>
                <label>Hounding Name:</label>
                <input type="text" name="houndingName" onChange={handleChange} placeholder="Name of hounder(username or real)"/>
                <br></br>
                <button id='submitButton'>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default NewMineral;