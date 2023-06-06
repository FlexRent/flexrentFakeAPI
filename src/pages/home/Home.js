import React from "react";
import Header from "../../components/Header/Header";
import "../../components/Home/css/Home.css";

import Footer from "../../components/Footer/Footer";
import Categorias from "../../components/Home/Categorias";
import ComoFunciona from "../../components/Home/ComoFunciona";
import Vantagem from "../../components/Home/Vantagem";
// import ListaTodasCategorias from "../../components/ListaProdutos/ListaTodasCategorias";
import ListaCategoria from "../../components/ListaProdutos/ListaCategoria";

export default function HomeRent() {
  return (
    <div>
      <Header isHome={true} />
      <div className="banner">
        <img src="../assets/banner.png" alt="banner" className="banner-image" />
      </div>
          <Vantagem/>
          <ComoFunciona/>
          <Categorias/>
      {/* <ListaTodasCategorias/> */}
      {/* <ListaCategoria categoria={"Camping"} /> */}
      <Footer />
    </div>
  );
}
