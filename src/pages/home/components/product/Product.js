import "./_Product.scss"
import { NavLink } from "react-router-dom";


export const Product = (props) => {
    return (
        <div className="ProduitItem">

            <div>
                <img src={props.src} alt="5" />
            </div>
            <div>
                <div className="produitDescrip">
                    <h1>{props.name}</h1>
                    <p>{props.descrip}</p>
                </div>
                <div className="price">
                    <div className="stock">
                        <h6>Stock: {props.stock}</h6>
                        <h5>{props.price}$</h5>
                    </div>
                    <NavLink to={`/product/${props.name}`}>
                        <button onClick={()=>{
                            props.addToPanier(props.name)
                        }}>Show product</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}