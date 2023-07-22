import { useParams } from "react-router-dom"
import "./_ProductInfo.scss"
export const ProductInfo = (props) => {
    const { id } = useParams()
    return (
        <div>
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
                                                <button>-</button>
                                                <div><h1>{element.qnt}</h1></div>
                                                <button>+</button>
                                            </div>
                                            </div>
                                            
                                        </div>

                                    </div>

                                </div>
                                :
                                <></>
                        }
                    </>
                )
            }
        </div>
    )
}