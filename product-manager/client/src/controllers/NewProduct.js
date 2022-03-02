import { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const NewProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/")
            .then(response => {
                setProducts(response.data.allProducts)
                console.log(response.data.allProducts)
            })
            .catch((err) => console.log(err.response))
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/", {
            title,
            price,
            description
        }).then(response => {
            console.log("SUCCESS");
            console.log(response);
            setTitle("");
            setPrice("");
            setDescription("");
            
        })
        .catch((err) => {
            console.log("ERROR")
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors)});
    }
    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = "title">Title</label>
                    <input 
                        type = "text"
                        id = "title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor = "price">Price</label>
                    <input 
                        type = "text"
                        id = "price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor = "description">Description</label>
                    <input 
                        type = "text"
                        id = "description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button>Create</button>
            </form>
            <hr />
            <div>
                <h1>All Products:</h1>
                
                {
                    products.map((product, key) => {
                        return(
                            <div key = {product._id}>
                                <a style = {{display: "block"}} href = {`/${product._id}`}>{product.title}</a>
                                <span>| <a href = {`/${product._id}/edit`}>Edit</a></span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewProduct;