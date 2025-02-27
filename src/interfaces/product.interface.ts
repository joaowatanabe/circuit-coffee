import { IPreco } from "./preco.interface";

export interface IProduct {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  preco: IPreco;
  vegano: boolean;
  categoria: "classicos" | "gelados";
}

export interface ProductProps {
  item: IProduct;
}
