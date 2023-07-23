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
import Abricot from "./assets/images/abricot.png"
import Avocat from "./assets/images/avocat.png"
import Citron from "./assets/images/citron.png"
import Jasmin from "./assets/images/jasmin.png"
import Lavandair from "./assets/images/lavndaire.png"
import Orange from "./assets/images/orange.png"
import { useEffect, useState } from "react"
import { ProductInfo } from "./pages/home/components/ProductInfo/ProductInfo"
import { Panier } from "./pages/panier/Panier"



export const App = () => {

  class product {
    constructor(name, descrip, price, stock, src, qnt) {
      this.name = name;
      this.descrip = descrip;
      this.price = price;
      this.stock = stock;
      this.src = src;
      this.qnt = qnt
    }
  }
  let HuilAbricot = new product("Huile d'abricot", "L'huile d'abricot est une huile végétale extraite des noyaux d'abricots, riche en nutriments et en acides gras essentiels. ", 40, 10, Abricot, 0)
  let HuilAvocat = new product("Huile d'avocat", "L'huile d'avocat, extraite de la pulpe d'avocat, est riche en acides gras essentiels et en vitamines. ", 50, 15, Avocat, 0)
  let HuilCitron = new product("Huile de citron", "L'huile de citron, extraite de la pulpe d'avocat, est riche en acides gras essentiels et en vitamines. ", 30, 35, Citron, 0)
  let HuilJasmin = new product("Huile de Jasmen", "L'huile de jasmin est une huile essentielle extraite des fleurs du jasmin, appréciée pour son parfum floral envoûtant. ", 60, 6, Jasmin, 0)
  let HuilLavendair = new product("Huile de lavande", "L'huile de lavande est une huile essentielle extraite des fleurs de lavande, reconnue pour ses propriétés apaisantes, relaxantes", 60, 6, Lavandair, 0)
  let HuilOrange = new product("Huile de Orange", "L'huile essentielle d'orange est extraite des écorces d'oranges et est appréciée pour son arôme frais et fruité", 60, 6, Orange, 0)

  const [products, setProducts] = useState([HuilAbricot, HuilAvocat, HuilCitron, HuilJasmin, HuilLavendair, HuilOrange]);
  const [disabled, setDesabled] = useState(!true)
  const [redisabled, setRedesabled] = useState(false)
  const [panier, setPanier] = useState([])

  const addToPanier = (element) => {
    for (let index = 0; index < products.length; index++) {
      let product = products[index];
      if (product.name === element) {
        const found = panier.find(el => el.name === element);
        if (found === undefined) {
          let newTab = [...panier]
          product.qnt= product.qnt+1
          newTab.push(product)

          setPanier(newTab)
          console.log(panier);
        } else {
          add(found)
        }
      }
    }
  }
  const RemovePnier = (elemen) => {
    for (let index = 0; index < panier.length; index++) {
      let inde = panier.indexOf(elemen)
      const newTab=[...panier]
      if (elemen.qnt === 1) {
        // newTab[inde].stock = newTab[inde].stock + 1
        newTab.splice(inde, 1)
      } 
      else {
        newTab[inde].qnt = newTab[inde].qnt - 1
        newTab[inde].stock = newTab[inde].stock + 1
      }
      setPanier(newTab)
      
    }

  }

  const add = (element) => {
    let index = products.indexOf(element)
    const newTab = [...products]
    if (newTab[index].stock === 0) {
      alert(`le product ${newTab[index].name} is out of stock`)
      setDesabled(!disabled)
    } else {
      // if (newTab[index].qnt === 1) {
      //   newTab[index].qnt = newTab[index].qnt + 1
      //   newTab[index].stock = newTab[index].stock - 2
      // } else {
        newTab[index].qnt = newTab[index].qnt + 1
        newTab[index].stock = newTab[index].stock - 1
      // }
      setRedesabled(false)
      setDesabled(disabled)
    }
    setProducts(newTab)
  }
  const remove = (element) => {
    let index = products.indexOf(element)
    const newTab = [...products]
    if (newTab[index].qnt === 2 || newTab[index].qnt === 1) {
      setRedesabled(true)
      newTab[index].qnt = newTab[index].qnt - 1
      newTab[index].stock = newTab[index].stock + 2
    } else {
      newTab[index].qnt = newTab[index].qnt - 1
      newTab[index].stock = newTab[index].stock + 1
      setRedesabled(false)
    }
    setDesabled(false)
    setProducts(newTab)
  }
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="*" element={<Error />}/> */}
        <Route exact path="/" element={<Home products={products} setProducts={setProducts} addToPanier={addToPanier} />} />
        <Route path="/accesoire" element={<Accesoire />} />
        <Route path="/huil" element={<Huil />} />
        <Route path="/savon" element={<Savon />} />
        <Route path="/naturel" element={<Naturel />} />
        <Route path="/Product/:id" element={<ProductInfo products={products} setProducts={setProducts} add={add} remove={remove} disabled={disabled} redisabled={redisabled} setRedesabled={setRedesabled} />} />
        <Route path="/panier" element={<Panier panier={panier} add={add} remove={remove} RemovePnier={RemovePnier} />} />

      </Routes>
    </>
  )
}