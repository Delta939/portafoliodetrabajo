// Dependencias generales
import React from "react";
import logo from "./assets/images/avion.jpg";
import logo2 from "./assets/images/bd.jpg";
import logo3 from "./assets/images/in.jpg";
import logo4 from "./assets/images/dw.jpg";
import logo5 from "./assets/images/iw.jpg";
import logo6 from "./assets/images/f.jpg";
import logo7 from "./assets/images/c.jpg";
import logo8 from "./assets/images/dw1.jpg";
import logo9 from "./assets/images/dw2.jpg";
//import TouchCarousel from '/react-touch-carousel';
//import Carousel from 'react-gallery-carousel';
//import 'react-gallery-carousel/dist/index.css';
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import "./assets/css/App.css";

import { HashRouter as Router, Route, Link } from "react-router-dom";

// Páginas internas
function Portafolio() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alignContent="right" alt="logo" />
        <h2>
          Portafolio del Ingeniero de Software y Desarrollador web Francisco
          Manuel Garcia Martinez
        </h2>
        <h3>Páginas web que he desarrollado</h3>
        <a
          className="App-link"
          href="http://uacmproyectoluchadoresambientales.atwebpages.com/Menuprincipal.php?txt_usuario=profesor&txt_password=295"
          target="_blank"
          rel="noopener noreferrer"
        >
          Servicio Social
        </a>
        <a
          className="App-link"
          href="http://catalogodelibros.atwebpages.com/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Catalogo de Libros
        </a>
        <a
          className="App-link"
          href="http://tablerodecontroldeproyectos.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tablero Kanban
        </a>

        <a
          className="App-link"
          href="http://proyectocifradotps.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cifrado Cesar
        </a>
        <a
          className="App-link"
          href="http://proyectometricasdesoftwareestimaciondelproyecto.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estimacion de un proyecto
        </a>
        <a
          className="App-link"
          href="http://tiendadedeporteshernandez.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tienda Deportiva
        </a>
        <a
          className="App-link"
          href="http://gestiondedocumentos.atwebpages.com/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gestion de Documentos
        </a>
        <a
          className="App-link"
          href="http://proyectodragon.atwebpages.com/Menuprincipal.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registro de Materias
        </a>
        <a
          className="App-link"
          href="http://proyectojuegos.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto Juegos
        </a>
        <a
          className="App-link"
          href="http://modulosdeaprendizajedeingles.atwebpages.com/Menuprincipal.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto Aprendizaje de ingles
        </a>
        <a
          className="App-link"
          href="http://proyectometricas.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto Metricas de Producto
        </a>
        <a
          className="App-link"
          href="http://proyectometricaspractica3.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Metricas de Estimacion
        </a>
        <a
          className="App-link"
          href="http://proyectometricaspractica3.atwebpages.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis proyectos en Github (Java consola, swing, jsp)
        </a>
      </header>
    </div>
  );
}

const images = [
  {
    original: logo2,
    thumbnail: logo2,
  },
  {
    original: logo3,
    thumbnail: logo3,
  },
  {
    original: logo4,
    thumbnail: logo4,
  },
  {
    original: logo5,
    thumbnail: logo5,
  },
  {
    original: logo6,
    thumbnail: logo6,
  },
  {
    original: logo7,
    thumbnail: logo7,
  },
  {
    original: logo8,
    thumbnail: logo8,
  },
  {
    original: logo9,
    thumbnail: logo9,
  },
];

function Certificaciones() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Certificaciones</h2>
        <ImageGallery items={images} />
      </header>
    </div>
  );
}

function Contacto() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Contacto</h2>
        <h2>
          Ingeniero de Software y Desarrollador web Francisco Manuel Garcia
          Martinez
        </h2>
        <h2>email: mmtz3301@gmail.com</h2>
        <h2>Cel: 55 60 41 10 00</h2>
      <a
          className="App-link"
          href="https://portafoliodetrabajodelta939.netlify.app/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mi portafolio en netlify con react
        </a>  
      <a
          className="App-link"
          href="http://portafoliodetrabajodelta.atwebpages.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          mi portafolio en página web
        </a>
        <a
          className="App-link"
          href="https://delta650338569.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mi portafolio en WordPress
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/t-90za9715er/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/Delta939"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

// Función del router
function AppRouter() {
  return (
    <header className="App-header">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">portafolio</Link>
            </li>
            <li>
              <Link to="/certificaciones/">certificaciones</Link>
            </li>
            <li>
              <Link to="/contacto/">contacto</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Portafolio} />
        <Route path="/certificaciones/" component={Certificaciones} />
        <Route path="/contacto/" component={Contacto} />
      </Router>
    </header>
  );
}
export default AppRouter;
