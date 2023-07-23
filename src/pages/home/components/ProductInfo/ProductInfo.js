import { useParams } from "react-router-dom"
import "./_ProductInfo.scss"
import { useEffect } from "react"
export const ProductInfo = (props) => {
    const { id } = useParams()
    useEffect(() => {
        for (let index = 0; index < props.products.length; index++) {
            let element = props.products[index];
            if (element.name===id) {
                if (element.qnt === 1) {
                    props.setRedesabled(true)
                }
            }
        }
    }, [])
    return (
        <>

            {
                props.products.map((element, index) =>
                    <>
                        {
                            id === element.name ?
                                <div className="ProductInfo">

                                    <div className="items">
                                        <div >
                                            <img src={element.src} alt="" />
                                        </div>
                                        <div className="item">
                                            <h1>{element.name}</h1>
                                            <p>{element.descrip} sit amet consectetur adipisicing elit. Corporis, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum et esse alias exercitationem omnis suscipit enim similique asperiores nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempora dolores architecto illo quos non laudantium dolor {element.descrip}</p>
                                            <div className="price">
                                                {/* <h5> Quantité:{element.stock}</h5> */}
                                                <h4>{element.price}:00 Dhs</h4>
                                                <div className="add">
                                                    <button onClick={() => { props.remove(element) }} disabled={props.redisabled}>-</button>
                                                    <div><h1>{element.qnt}</h1></div>
                                                    <button onClick={() => { props.add(element) }} disabled={props.disabled}>+</button>
                                                </div>
                                            </div>
                                            {/* <div className="addToCard">
                                            <button >Add to card</button>
                                            </div> */}

                                        </div>

                                    </div>

                                </div>
                                :
                                <></>
                        }
                    </>
                )
            }
        </>
    )
}