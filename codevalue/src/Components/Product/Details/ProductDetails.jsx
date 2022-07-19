import { useState } from "react";
import "./ProductDetails.css";
import placeholder from "../../../Assets/images/placeholder.png";

const ProductDetails = (props) => {


    const [product,SetProduct] = useState(props.product);

    return(
    <div className="Product-Details">
        <form>
        <h1>{product.name + " Details"}</h1>
        <img src={product.img === undefined ? placeholder : props.img} alt="placeholder"/>
        <p>name:</p>
        <input placeholder={product.name}></input>
        <p>description:</p>
        <input placeholder={product.description}></input>
        <p>price:</p>
        <input placeholder={product.price}></input>
        </form>
    </div>
    );
    
};

export default ProductDetails;