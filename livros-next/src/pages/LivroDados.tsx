import { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ControleEditora } from '../../classes/controle/ControleEditora';
import { Menu } from '../../componentes/Menu';
import styles from '../../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";

const LivroDados: NextPage = () => {
  const controleEditora = new ControleEditora();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);
  const router = useRouter();

  const incluirLivro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });

    if (response.ok) {
      router.push('/livros');
    }
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.main}>
        <h1>Cadastrar Livro</h1>
        <form onSubmit={incluirLivro}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input type="text" className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Resumo</label>
            <textarea className="form-control" value={resumo} onChange={e => setResumo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Autores</label>
            <textarea className="form-control" value={autores} onChange={e => setAutores(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Editora</label>
            <select className="form-select" value={codEditora} onChange={e => setCodEditora(Number(e.target.value))}>
              {controleEditora.getEditoras().map(editora => (
                <option key={editora.codEditora} value={editora.codEditora}>
                  {editora.nome}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
