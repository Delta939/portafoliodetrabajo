//import logo from './assets/images/logo.svg';
import logo from './assets/images/avion.jpg';
import './assets/css/App.css';
     {/* 
import MiComponente from 
'./components/MiComponente';
 */}
function HolaMundo(nombre,edad){
  
  var presentacion=
    <div> <h9>Página web elaborada por {nombre}</h9>
    <br></br>
    <h7>Tengo {edad} años</h7>
    </div>
  return presentacion;
}

function App() {
  var nombre="Francisco Manuel Garcia Martinez";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Portafolio de Trabajo 
        </p>
        <a
          className="App-link"
          href="/portafolio.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enlace
        </a>
        <a
          className="App-link"
          href="http://portafoliodetrabajodelta.atwebpages.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portafolio
        </a>
        <a
          className="App-link"
          href="http://portafoliodetrabajodelta.atwebpages.com/contacto.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
        {HolaMundo(nombre, 32)}

      </header>
     {/* 
        <section className="componentes">
           <MiComponente/>
        </section>
     */}



    </div>
  );
}

export default App;
