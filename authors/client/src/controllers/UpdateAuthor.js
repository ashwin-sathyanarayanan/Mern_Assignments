import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

const UpdateProduct = (props) => {
    const { id } = props
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios
            .get( `http://localhost:8000/${ id }`)
            .then((response) => {
                console.log(response.data.queriedProduct);
                setTitle(response.data.queriedProduct.title);
                setPrice(response.data.queriedProduct.price);
                setDescription(response.data.queriedProduct.description);
            })
            .catch((err) => console.log(err.response))
    }, [])

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/${id}/edit`, {
                title,
                price,
                description   
            })
                .then((response) => {
                    console.log(response);
                    navigate("/");
                })
                .catch((err) => console.log(err.response))
    }

    const handleDeleteProduct = (idFromBelow) => {
        axios.delete(`http://localhost:8000/${ id }`)
        .then((response => {
            console.log(response)
            navigate("/")
        }))
        .catch((err) => console.log(err.response))
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleUpdateProduct}>
                <div>
                    <label htmlFor = "title">Title</label>
                    <input 
                        type = "text"
                        id = "title"
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor = "price">Price</label>
                    <input 
                        type = "text"
                        id = "price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor = "description">Description</label>
                    <input 
                        type = "text"
                        id = "description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button>Update</button> 
                <button onClick={handleDeleteProduct}>Delete</button>
            </form>
        </div>
    )
}

export default UpdateProduct;