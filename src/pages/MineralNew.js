import { useState } from 'react';
import Minerals from './MineralIndex';

function NewMineral() {
   const [mineralForm, setMineralForm] = useState({
    mineralType:" ",
    date: 0,
    conditions:" ",
    county:" ",
    image:" ",
    houndingName:" "
   }) 

   function handleChange(e) {
    console.log(e.target);
    setMineralForm((previousFormState) => ({
        ...previousFormState,
        [e.target.name]: e.target.value
    }))
   }

   async function handleSubmit(e) {
    try{
        e.preventDefault();
        await fetch('https://hounding-tracker-backend.onrender.com/minerals', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mineralForm)
        })
         Minerals();
         e.target.reset();
    } catch(error) {
        console.log(error);
    }
   }


    return (
    <form onSubmit={handleSubmit}>
        <label>Mineral Type:</label>
        <input type="text" name="mineralType" onChange={handleChange} placeholder="Mineral Type"/>
        <label>Date:</label>
        <input type="text" name="date" onChange={handleChange} placeholder="Date of find"/>
        <label>Conditions:</label>
        <input type="text" name="conditions" onChange={handleChange} placeholder="Conditions on day of find"/>
        <label>County:</label>
        <input type="text" name="county" onChange={handleChange} placeholder="County of find"/>
        <label>Image:</label>
        <input type="text" name="image" onChange={handleChange} placeholder="Paste image URL"/>
        <label>Hounding Name:</label>
        <input type="text" name="houndingName" onChange={handleChange} placeholder="Name of hounder(username or real)"/>
        <button>Submit</button>
    </form>
    )
}

export default NewMineral;