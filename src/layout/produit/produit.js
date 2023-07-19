import "./_produit.scss"
import Orange from "../../assets/images/orange.png"

export const Produit = (props) => {
    const Value=(e)=>{
        let price =e.target.previousElementSibling.textContent;
        console.log(price);

    }

    return (
        <div className="ProduitItem">
        <div>
            <img src={Orange} alt="5" />
        </div>
        <div>
        <div className="produitDescrip">
            <h1>Huil d'orange</h1>
            <p>Lorem, ipsum dolor Lorem, ipsum dolor.</p>
        </div>
        <div className="price">
        <h6>stock :</h6>
            <h5>65.00 dh</h5>
            <button onClick={Value}>Add to card</button>
        </div>
        </div>

        </div>

    )
}