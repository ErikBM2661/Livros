import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  return (
    <tr>
      <td>{props.livro.titulo}</td>
      <td>{props.livro.resumo}</td>
      <td>{props.livro.autores.join(', ')}</td>
      <td>{controleEditora.getNomeEditora(props.livro.codEditora)}</td>
      <td>
        <button onClick={props.excluir} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};
