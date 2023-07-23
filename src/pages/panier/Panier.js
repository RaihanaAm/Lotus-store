import "./_Panier.scss"
export const Panier = (props) => {
    
    return (
        <div className="Panier">
            <div className="name">

                <h1>panier</h1>
            </div>
            {
                props.panier.map((element) =>
                    <>
                        <div className="Onepanier">
                            <div className="image">
                                <img src={element.src} alt="a" />
                            </div>
                            <div className="items">
                                <div className="">
                                    <h1>{element.name}</h1>

                                </div>
                                <div className="">
                                    <p>{element.descrip}</p>
                                    <div className="price">
                                        <h6>Quantité: {element.qnt}</h6>
                                        <h5>{element.price}Dhs</h5>
                                    </div>
                                    <div className="add">
                                        <button onClick={()=>{
                                            props.RemovePnier(element)}
                                            } >-</button>
                                        <h1>{element.qnt}</h1>
                                        <button onClick={()=>{props.add(element)}} >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
            }
        </div>

    )
}