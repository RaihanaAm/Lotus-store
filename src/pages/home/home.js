import "./_home.scss"
import { HomeTitle } from "./components/HomeTitle/HomeTitle"
import { OsezLeNaturel } from "./components/OsezLeNaturel/OsezLeNaturel"


import { Produit } from "../../layout/produit/produit"
import { useState } from "react"

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
            <HomeTitle/>
            <OsezLeNaturel/>
           

            <div className="productSection">
                <div className="productRow">
                    <Produit  title={"Huil d'orange"} desp={"lorem lorem lorem orange"} price={25} stock={stock} setStock={setStock} product={product} setpoduct={setProduct} produits={produits} setProduit={setProduit} />
                    <Produit src="" title={"Huil lavendair"} desp={"lorem lorem lorem lavendaire"} price={35} stock={stock} setStock={setStock} product={product} setpoduct={setProduct} produits={produits} setProduit={setProduit} />
                </div>
            </div>






        </>

    )
}