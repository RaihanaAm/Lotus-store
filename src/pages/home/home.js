import "./_home.scss"
import { HomeTitle } from "./components/HomeTitle/HomeTitle"
import { OsezLeNaturel } from "./components/OsezLeNaturel/OsezLeNaturel"
import { AllProduct } from "./components/AllProduct/AllProduct"




export const Home = (props) => {

    return (
        <>
            {/* <HomeTitle /> */}
            {/* <OsezLeNaturel /> */}
            <AllProduct products={props.products} addToPanier={props.addToPanier} />
        </>
    )
}