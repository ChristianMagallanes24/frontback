




import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Home/Header/Header';
import Nav from './components/Home/Nav/Nav';
import './sass/App.scss';
import Proyectos from "./components/Home/Proyectos/Proyectos";
import LoadingScreen from "./components/Home/Carga/LoadingScreen";
import Front from './components/Front/Front';
import Back from './components/Back/Back';

function App() {

  return (
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          {/* Agrega una ruta específica para la página de inicio */}
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/front" element={<Front />} />
          <Route path="/Back" element={<Back />} />
          
        </Routes>
      </Router>
    </div>
  );
}


// Nuevo componente para la página de inicio
function Inicio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga con un temporizador
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milisegundos (2 segundos) como ejemplo
  }, []);

  return (
    <div className="App2">
     {loading ? <LoadingScreen /> : <Header />}
    
    </div>
  );
}


export default App;