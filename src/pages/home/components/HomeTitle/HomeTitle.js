import "./_HomeTitle.scss"
import lavandair from "../../../../assets/images/lavndaire.png"
import avocat from "../../../../assets/images/avocat.png"
import jasmin from "../../../../assets/images/jasmin.png"
import Orange from "../../../../assets/images/orange.png"
import Citron from "../../../../assets/images/citron.png"
export const HomeTitle = () => {
    let images = [jasmin, lavandair, avocat, Orange, Citron];

    return (
        <div className="Home ">
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


    )
}