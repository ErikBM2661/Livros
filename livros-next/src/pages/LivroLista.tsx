import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { LinhaLivro } from '../../componentes/LinhaLivro';
import { Menu } from '../../componentes/Menu';
import styles from '../../styles/Home.module.css';
import { Livro } from '../../classes/modelo/Livro';

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    setLivros(data);
    setCarregado(true);
  };

  const excluirLivro = async (codigo: number) => {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setLivros(livros.filter(livro => livro.codigo !== codigo));
    }
  };

  useEffect(() => {
    obterLivros();
  }, []);

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.main}>
        <h1>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {carregado && livros.map(livro => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluirLivro(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
