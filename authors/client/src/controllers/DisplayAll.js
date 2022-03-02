import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

const DisplayAll = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/")
            .then(response => {
                console.log(response.data.allAuthors)
                setAuthors(response.data.allAuthors)
            })
            .catch((err) => console.log(err.response))
    }, [])

    return <div style = {{width: '1000px'}}>
        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
            <h1>Favorite authors</h1>
            <a href = "/new">add an author</a>
        </div>
        <div>
            <h2 style = {{display: 'flex'}}>We have quotes by:</h2>
{/* 
            {pets.map((pet) => {
                return(
                    <div key = {pet._id}>
                        <p>{pet.petName}</p>
                    </ div>
                )
            })} */}
            <table>
                <thead>
                    <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author) => {
                        return(
                        <tr key = {author._id}>
                            <td>{author.name}</td>
                            <td><a href = {`/${author._id}`}>details</a> | <a href = {`/${author._id}/edit`}>edit</a></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>;
};

export default DisplayAll;