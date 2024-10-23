import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Livros</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/livros">Lista de Livros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/livros/dados">Cadastrar Livro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
