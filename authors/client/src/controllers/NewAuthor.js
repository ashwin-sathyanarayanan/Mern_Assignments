import { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const NewAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [authors, setAuthors] = useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/new", {
            name
        }).then(response => {
            console.log("SUCCESS");
            console.log(response);
            setName("")
            
        })
        .catch((err) => {
            console.log("ERROR")});
    }

    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    return(
        <div>
            <h1>Favorite authors</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = "name">Name</label>
                    <input 
                        type = "text"
                        id = "name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button onClick={routeChange}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewAuthor;