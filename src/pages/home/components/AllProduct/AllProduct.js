import { Product } from "../product/Product"
import "./_AllProduct.scss"
export const AllProduct = (props) => {
    return (
        <div className="productSection">
            <div className="productRow">
                {
                    props.products.map((element, index) =>
                        <>
                            <Product name={element.name} descrip={element.descrip} price={element.price} stock={element.stock} src={element.src} addToPanier={props.addToPanier} />
                            {/* <Product /> */}
                        </>
                    )
                }
            </div>
        </div>
    )
}