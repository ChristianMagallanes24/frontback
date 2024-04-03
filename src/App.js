



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Home/Header/Header';
import Nav from './components/Home/Nav/Nav';
import './sass/App.scss';
import Proyectos from "./components/Home/Proyectos/Proyectos";
import Boton from "./components/Home/Header/Boton";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          {/* Agrega una ruta específica para la página de inicio */}
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          
        </Routes>
      </Router>
    </div>
  );
}

// Nuevo componente para la página de inicio
function Inicio() {
  return (
    <div className="App2">
      <Header />
     <Boton />
    
    </div>
  );
}

export default App;