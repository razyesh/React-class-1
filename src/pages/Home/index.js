import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import {BASE_URL} from '../../constants';


const formStyle = {
    marginTop: "10px",
}

function Home () {
    const url = BASE_URL + "users/";    
    const [firstName, setFirstName] = useState("default value");
    const [lastName, setLastName] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {"first_name": firstName, "last_name": lastName}
        axios.post(url, payload).then((response)=> {
            document.getElementById("form").reset();
            alert("Data Saved Successfully")
        }).catch((error) => {
            alert(error.response.data.first_name[0])
        })
    }

    // if (!users) return null;

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} style={formStyle} id="form">
                    <label>First Name</label>
                    <input name="first_name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                    <br/>
                    <label>Last Name</label>
                    <input name="last_name" type="text" onChange={e => setLastName(e.target.value)} required/>
                    <br />
                    <button type="submit" style={{marginTop: "10px"}}>Click Me!</button>

                </form>
            </div>
            <form>
                <label></label>
            </form>
        </>
    )
}

export default Home;

