import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/home"
import { Accesoire } from "./pages/accesoire/accesoire"
import { Huil } from "./pages/Huil/Huil"
import { Savon } from "./pages/savon/savon"
import { Naturel } from "./pages/Naturrele/naturel"
import { Nav } from "./layout/header/header"
import { Produit } from "./layout/produit/produit"

export const App = () => {

  return (
    <div>
    <Nav/>
      <Routes>
        {/* <Route path="*" element={<Error />}/> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/accesoire" element={<Accesoire />} />
        <Route path="/huil" element={<Huil />} />
        <Route path="/savon" element={<Savon />} />
        <Route path="/naturel" element={<Naturel />} />
        <Route path="/naturel/:id" element={<Produit />} />

      </Routes>
    </div>
  )
}