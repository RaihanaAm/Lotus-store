import "./_home.scss"
import { HomeTitle } from "./components/HomeTitle/HomeTitle"
import { OsezLeNaturel } from "./components/OsezLeNaturel/OsezLeNaturel"


import { useState } from "react"
import { Product } from "./components/product/Product"


export const Home = (props) => {

    return (
        <>
            {/* <HomeTitle /> */}
            {/* <OsezLeNaturel /> */}
            <div className="productSection">
                <div className="productRow">
                    {
                        props.products.map((element, index) =>
                            <>
                                

                                    <Product name={element.name} descrip={element.descrip} price={element.price} stock={element.stock} src={element.src} />
                                    {/* <Product /> */}


                            </>
                        )
                    }
                </div>
            </div>
        </>

    )
}