import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

    const LivroDados = () => {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();


    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento) => {
        evento.preventDefault();
        const novoLivro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora
        };
        controleLivro.incluir(novoLivro);
        navigate('/');
    };

    return (
        <main>
            <h1>Cadastro de Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título:</label>
                    <input 
                        id="titulo" 
                        className="form-control"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo:</label>
                    <textarea 
                        id="resumo" 
                        className="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="autores" className="form-label">Autores (um por linha):</label>
                    <textarea 
                        id="autores" 
                        className="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="editora" className="form-label">Editora:</label>
                    <select 
                        id="editora"
                        className="form-select"
                        value={codEditora}
                        onChange={tratarCombo}
                    >
                        {opcoes.map((editora) => (
                            <option key={editora.value} value={editora.value}>
                                {editora.text}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </main>
    );
};

export default LivroDados;
