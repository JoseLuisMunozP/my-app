import React from 'react';
import FotoPerfil from "../images/fotoPerfil.png"
import NameDeveloper from "./NameDeveloper"
import EmailLinkedin from "./Email";
import Info from "./Info";
import Footer from "./Footer";

function Main() {

  return(
    <div className="card">

        <img src={FotoPerfil} alt="Foto de perfil" className="card--fotoPerfil"/>        
        <NameDeveloper />
        <EmailLinkedin />
        <Info />
        <Footer />
    </div>
  )
}


export default Main;
