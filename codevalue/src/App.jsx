import Header from "./Components/Header/Header";
import "./app.css"
import { useState } from "react";
import ProductView from "./Components/Product/ProductView";
import productsData from "./Assets/ProductData";


function App() {

  const [products] = useState(productsData);


  return (
    <div className="App">
     <Header/>
     <ProductView products={products}/>
    </div>
  );
}

export default App;