import axios from "axios";
import { useEffect, useState } from "react";

const DisplayOne = (props) => {
    const { id } = props
    const [productData, setProductData] = useState({})
    useEffect(() => {
        axios
            .get( `http://localhost:8000/${ id }`)
            .then((response) => {
                console.log(response.data.queriedProduct);
                setProductData(response.data.queriedProduct);
            })
            .catch((err) => console.log(err.response))
    }, [])

    return(
        <div>
            <h2>{productData.title}</h2>
            <p>price: {productData.price}</p>
            <p>description: {productData.description}</p>
        </div>
    )

}

export default DisplayOne;