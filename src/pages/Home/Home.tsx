// import { IProduct } from "../../@types/products";
// import { listarProdutos } from "../../Api/axios";
import style from "./style.module.css";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { formatarPreco } from "../../utils/FormatPrice";
import { Products } from "../../components/Products/Products";

export function Home() {
  const [produtos, setProdutos] = useState<IProduct[]>([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const resposta = await listarProdutos();
        setProdutos(resposta);
        console.log(resposta);
      } catch (error) {
        console.log(error);
      }
    }
    carregarProdutos();
  }, []);

  return (
    <main className="main-page">
      <section className="slogan">
        <div className="container-slogan">
          <h1 className={style["slogan__title"]}>
            A Energia do café que deixa no ritmo certo
          </h1>
        </div>
        <div className="container-slogan__text">
          <p className="slogan__text">
            Trabalhamos com o conceito de coffee experience. Apresentamos cafés
            raros e exóticos com sensoriais muito nítidos. Fazendo o blend
            perfeito com musicas energéticas.
          </p>
        </div>
      </section>
      <section className={style["products"]}>
        <div className="container-classicos">
          <h2 className={style["products__title"]}>Clássicos</h2>
          <Products />
        </div>
      </section>
      <section className={style["products"]}>
        <div className="container-gelados">
          <h2 className={style["products__title"]}>Gelados</h2>
        </div>
      </section>
    </main>
  );
}
