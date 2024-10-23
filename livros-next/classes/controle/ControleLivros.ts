import  { Livro }  from '../modelo/Livro';

let livros: Array<Livro> = [
    new Livro(1, 1, 'Livro A', 'Resumo A', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro B', 'Resumo B', ['Autor 3']),
    new Livro(3, 3, 'Livro C', 'Resumo C', ['Autor 4', 'Autor 5'])
];

export class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        livro.codigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const indice = livros.findIndex(l => l.codigo === codigo);
        if (indice >= 0) {
            livros.splice(indice, 1);
        }
    }
}
