import { Route, Routes } from "react-router-dom"
//**Mes pages
import { Nav } from "./layout/header/header"
import { Home } from "./pages/home/home"
import { Accesoire } from "./pages/accesoire/accesoire"
import { Huil } from "./pages/Huil/Huil"
import { Savon } from "./pages/savon/savon"
import { Naturel } from "./pages/Naturrele/naturel"
import { Product } from "./pages/home/components/product/Product"

// **Mes Images
import  Abricot from "./assets/images/abricot.png"
import Avocat from "./assets/images/avocat.png"
import Citron from "./assets/images/citron.png"
import Jasmin from "./assets/images/jasmin.png" 
import Lavandair from "./assets/images/lavndaire.png"
import Orange from "./assets/images/orange.png"
import { useState } from "react"
import { ProductInfo } from "./pages/home/components/ProductInfo/ProductInfo"



export const App = () => {

  class product {
    constructor(name ,descrip,price,stock,src ,qnt){
      this.name =name;
      this.descrip=descrip;
      this.price=price;
      this.stock = stock ;
      this.src=src;
      this.qnt=qnt
    }
  }
  let HuilAbricot =new product ("Huile d'abricot","L'huile d'abricot est une huile végétale extraite des noyaux d'abricots, riche en nutriments et en acides gras essentiels. ",40,10,Abricot,1)
  let HuilAvocat =new product ("Huile d'avocat","L'huile d'avocat, extraite de la pulpe d'avocat, est riche en acides gras essentiels et en vitamines. Elle offre "  ,50,15,Avocat,1)
  let HuilCitron =new product ("Huile de citron","L'huile de citron, extraite de la pulpe d'avocat, est riche en acides gras essentiels et en vitamines. Elle offre "  ,30,35,Citron,1)
  let HuilJasmin =new product ("Huile de Jasmen","L'huile de jasmin est une huile essentielle extraite des fleurs du jasmin, appréciée pour son parfum floral envoûtant. " ,60,6,Jasmin,1)
  let HuilLavendair =new product ("Huile de lavande","L'huile de lavande est une huile essentielle extraite des fleurs de lavande, reconnue pour ses propriétés apaisantes, relaxantes" ,60,6,Lavandair,1)
  let HuilOrange =new product ("Huile de Orange","L'huile essentielle d'orange est extraite des écorces d'oranges et est appréciée pour son arôme frais et fruité" ,60,6,Orange,1)

  const [products , setProducts] = useState([HuilAbricot,HuilAvocat,HuilCitron,HuilJasmin,HuilLavendair,HuilOrange]);

  return (
    <div>
    <Nav/>
      <Routes>
        {/* <Route path="*" element={<Error />}/> */}
        <Route exact path="/" element={<Home products={products} setProducts={setProducts} />} />
        <Route path="/accesoire" element={<Accesoire />} />
        <Route path="/huil" element={<Huil />} />
        <Route path="/savon" element={<Savon />} />
        <Route path="/naturel" element={<Naturel />} />
        <Route path="/Product/:id" element={<ProductInfo products={products} setProducts={setProducts} />} />

      </Routes>
    </div>
  )
}