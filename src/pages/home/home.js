import "./_home.scss"
import lavandair from "../../assets/images/lavndaire.png"
import avocat from "../../assets/images/avocat.png"
import jasmin from "../../assets/images/jasmin.png"
import Orange from "../../assets/images/orange.png"
import Citron from "../../assets/images/citron.png"
import { Produit } from "../../layout/produit/produit"

export const Home = () => {
    let images = [jasmin, lavandair, avocat, Orange, Citron]
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
                    <Produit />
                    <Produit />
                </div>
                <div className="productRow">
                    <Produit />
                    <Produit />
                </div>
                <div className="productRow">
                    <Produit />
                    <Produit />
                </div>
                <div className="panierSection">
                <h1>panier</h1>
                <div>
                    {/* item */}
                    <div className="itemPanier d-flex">
                        <img src={lavandair} alt="" />
                        <div>
                        <h3>Huile d'orange</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus.</p>
                        <div className="d-flex">
                            <button className="btn btn-success" >-</button>
                            <h1>1</h1>
                            <button className="btn btn-success">+</button>
                        </div>
                        </div>
                    </div>

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