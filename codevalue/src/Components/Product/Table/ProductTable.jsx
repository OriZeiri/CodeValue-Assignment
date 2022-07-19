import { useState } from "react";
import ProductCell from "./ProductCell";

const ProductTable = (props) => 
{
    const [products] = useState(props.products);

    return(
        <div className="Table">
        { 
                products.map((product) => 
                (
                     <ProductCell
                        selectProduct={props.selectProduct}
                        key={product.id}
                        id={product.id}
                        name = {product.name}
                        description = {product.description}
                        img = {product.img}
                     />
                ))
       
        }
        </div>
    );
}

export default ProductTable;