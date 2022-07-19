import "./ProductCell.css"
import placeholder from "../../../Assets/images/placeholder.png";


const Cell = (props) =>{
    const handleDelete = () =>
    {
        props.onDelete(props.id);
    }

    const handleClickedProduct = () => 
    {
        props.selectProduct(props.id)
    }

    return(
        <div className="TableCell" onClick={() => (handleClickedProduct())}>
            <img src={props.img === undefined ? placeholder : props.img} alt="placeholder.png"></img>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );

}

export default Cell;