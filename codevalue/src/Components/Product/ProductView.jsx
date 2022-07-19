import { useState } from "react";
import ProductTable from "./Table/ProductTable";
import ProductDetails from "./Details/ProductDetails";
import "./View.css";


const ProductView = (props) =>
{
    const [selectedProduct, setSelectedProduct] = useState();

    const handleClickedProduct = (productId) => 
    {
        console.log(selectedProduct);
        setSelectedProduct(props.products.find((pr) => pr.id === productId))
        console.log(selectedProduct);
    };


    return(
        <div className="product-view">
            <ProductTable products={props.products} selectProduct={handleClickedProduct}/>
            {selectedProduct !== undefined && <ProductDetails product={selectedProduct}/>}
        </div>
       
    );
}

export default ProductView;