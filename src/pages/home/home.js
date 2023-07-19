import "./_home.scss"
import lavandair from "../../assets/images/lavndaire.png"
import avocat from "../../assets/images/avocat.png"
import jasmin from "../../assets/images/jasmin.png"
import Orange from "../../assets/images/orange.png"
import Citron from "../../assets/images/citron.png"
import { Produit } from "../../layout/produit/produit"
import { useState } from "react"

export const Home = () => {
    let images = [jasmin, lavandair, avocat, Orange, Citron];
    let [product, setProduct] = useState({
        title: "",
        dscp: "",
        src: "",
        price: "",
        stock: "",
        qntIn:""
    })
    let [produits,setProduit]=useState([])
    console.log(produits);
    return (
        <>
            {/* home */}
            <div className="Home d-none">
                <h1 className="skincare">SKINCARE</h1>
                <h1 className="Titlee">Elevate Your Beauty with <b>Lotus</b> .</h1>
                <p className="titleHome">
                    Welcome to <span>"Lotus Store"</span> your ultimate destination for all things  <span>beauty</span> and skincare. As you step into our enchanting cosmetic wonderland, you'll be captivated by an array of scents, colors, and textures that promise to unlock your true inner <span> radiance</span>.
                    With each </p>

                <div className="Mycarrousel" >
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                images.map((element, index) =>
                                    <>
                                        <div className={`carousel-item  ${index === 0 ? "active" : ""} `} data-bs-interval="4000">
                                            <img src={element} className="d-block w-100" alt="hi" />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* items */}
            <div className="ite d-none">
                <h1>Dare to be natural !</h1>
                <p> we believe that <b>beauty</b> knows no boundaries, and every individual deserves to feel empowered and <b>confident</b> in their own skin. Our store offers a meticulously curated selection of premium <b>cosmetic</b>  brands, ranging from renowned classics to the latest cutting-edge innovations</p>
            </div>

            <div className="productSection">
                <div className="productRow">
                    <Produit src={Orange} title={"Huil d'orange"} desp={"lorem lorem lorem orange"} price={25} stock={13} product={product} setpoduct={setProduct} produits={produits}  setProduit={setProduit}  />
                    <Produit src={lavandair} title={"Huil lavendair"} desp={"lorem lorem lorem lavendaire"} price={35} stock={3}  product={product} setpoduct={setProduct} produits={produits}  setProduit={setProduit}  />
                </div>
                <div className="productRow">
                <Produit src={Citron} title={"Huil citron"} desp={"lorem lorem lorem citron"} price={40} stock={20}  product={product} setpoduct={setProduct} produits={produits}  setProduit={setProduit}  />
                <Produit src={avocat} title={"Huil d'avocat"} desp={"lorem lorem lorem avocat"} price={25} stock={13}  product={product} setpoduct={setProduct} produits={produits}  setProduit={setProduit}  />
                </div>
                <div className="productRow">
                <Produit src={jasmin} title={"Huil d'jasmin"} desp={"lorem lorem lorem jasmin"} price={25} stock={13}  product={product} setpoduct={setProduct} produits={produits}  setProduit={setProduit}  />
                <Produit src={Orange} title={"Huil d'orange"} desp={"lorem lorem lorem orange"} price={25} stock={13}  product={product} setpoduct={setProduct} produits={produits}  setProduit={setProduit}  />
                </div>
                <div className="panierSection">
        
                    <h1>panier</h1>
                    <div>
                        {/* item */}
                        {
                            produits.map((element,index)=>
                            <div className="itemPanier d-flex">
                            <img src={element.src} alt="" />
                            <div>
                                <h3>{element.title}</h3>

                                <p>{element.dscp}</p>
                                <h5>{element.price}</h5>
                                <div className="d-flex">
                                    <button className="btn btn-success" >-</button>
                                    <h1>{element.qntIn}</h1> 
                                    <button className="btn btn-success">+</button>
                                </div>
                            </div>
                        </div>

                            
                            )
                        }
                        

                    </div>

                </div>
            </div>







            <div className="slider d-none">
                <div className="slide-track">
                    <div className="slide">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                    </div>

                </div>
            </div>
        </>

    )
}