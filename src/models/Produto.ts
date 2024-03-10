import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: number;
    nomeProduto: string;
    preco: number;
    foto: string;
    descricao: string;
    categoria?: Categoria | null;
    usuario?: Usuario | null;
}