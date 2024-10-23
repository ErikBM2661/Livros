import React from 'react';
import './App.css';
import LivroLista from './LivroLista';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroDados from './LivroDados';


function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Livros</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link className="nav-link" to="/">Listagem de Livros</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/dados">Cadastro de Livros</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

          <Routes>
              <Route path="/" element={<LivroLista />} />
              <Route path="/dados" element={<LivroDados />} />
          </Routes>
      </Router>
  );
}


export default App;
