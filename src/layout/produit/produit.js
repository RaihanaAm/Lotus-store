import "./_produit.scss"
import Orange from "../../assets/images/orange.png"

export const Produit = (props) => {

    const Value = (e) => {
        
        const produit = {
            title: e.target.parentElement.previousElementSibling.children[0].textContent,
            dscp: e.target.parentElement.previousElementSibling.children[1].textContent,
            src: e.target.parentElement.parentElement.previousElementSibling.children[0].getAttribute("src"),
            price: e.target.previousElementSibling.textContent,
            stock: e.target.previousElementSibling.previousElementSibling.textContent,
            qntIn:1
        }

        props.setpoduct(produit)
        let tab = [...props.produits];
        let cound = false
        for (let i = 0; i < props.produits.length; i++) {
            const element = props.produits[i];
            if (element.title === produit.title) {
                
                element.qntIn+=1
                produit.stock-=1
                console.log(produit.stock);
                cound = true
            }
        }
        if (cound === false) {
            tab.push(produit)
            props.setProduit(tab)
            cound = true

        }






    }
    return (
        <div className="ProduitItem">
            <div>
                <img src={props.src} alt="5" />
            </div>
            <div>
                <div className="produitDescrip">
                    <h1>{props.title}</h1>
                    <p>{props.desp}</p>
                </div>
                <div className="price">
                    <h6>{props.stock}</h6>

                    <h5>{props.price}</h5>
                    <button onClick={Value}>Add to card</button>
                </div>
            </div>

        </div>

    )
}