import Produto from "./Produto";

export default interface Categoria {
    id: number;
    nomeCategoria: string;
    tipo: string;
    foto: string;
    produto?: Produto | null;
}