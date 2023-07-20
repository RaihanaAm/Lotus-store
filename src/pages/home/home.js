import "./_home.scss"

import { Produit } from "../../layout/produit/produit"
import { useState } from "react"
import { HomeTitle } from "./component/HomeTitle"

export const Home = () => {
    let [product, setProduct] = useState({ title: "", dscp: "", src: "", price: "", stock: "", qntIn: "" })
    let [produits, setProduit] = useState([])
    const moin = (element, index) => {
        if (element.qntIn===1) {
            let tab = [...produits]
            console.log(tab);
            tab.splice(produits.indexOf(element),1)
            setProduit(tab)
            
        }else{
            let tab = [...produits]
            element.qntIn -= 1
            setProduit(tab)
        }
    }
    
    const add = (element, index) => {
        let tab = [...produits]
        element.qntIn += 1
        setProduit(tab)
    }
    const [stock,setStock]=useState(Math.round(Math.random()*20))
    return (
        <>
            {/* home */}
            <HomeTitle/>

            {/* items */}
            <div className="ite ">
                <h1>Dare to be natural !</h1>
                <p> we believe that <b>beauty</b> knows no boundaries, and every individual deserves to feel empowered and <b>confident</b> in their own skin. Our store offers a meticulously curated selection of premium <b>cosmetic</b>  brands, ranging from renowned classics to the latest cutting-edge innovations</p>
            </div>

            <div className="productSection">
                <div className="productRow">
                    <Produit  title={"Huil d'orange"} desp={"lorem lorem lorem orange"} price={25} stock={stock} setStock={setStock} product={product} setpoduct={setProduct} produits={produits} setProduit={setProduit} />
                    <Produit src="" title={"Huil lavendair"} desp={"lorem lorem lorem lavendaire"} price={35} stock={stock} setStock={setStock} product={product} setpoduct={setProduct} produits={produits} setProduit={setProduit} />
                </div>
            </div>






        </>

    )
}