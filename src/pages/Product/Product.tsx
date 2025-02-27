// import PlantImage from "../../assets/Plant.png";
// import Cow from "../../assets/Cow.png";
// import MinusImage from "../../assets/Minus.svg";
// import PlusImage from "../../assets/Plus.svg";
// import style from "./style.module.css";
import { Header } from "../../components/Header/Header";
// import { useParams } from "react-router-dom";
// import {
//   listarCarrinhoPorId,
//   listarProdutosPorId,
//   criarCarrinho,
//   atualizarCarrinho,
// } from "../../Api/axios";
// import { useEffect, useState } from "react";
// import { IProduct } from "../../@types/products";
// import { formatarPreco } from "../../utils/FormatPrice";

export const Product = () => {
  return (
    <div className="product-page">
      <Header />
      <main>
        <a href="#">Voltar para o início</a>
        <section className="product-section">
          <div className="product-image">
            <img src="#" alt="imagem do café" />
          </div>
          <div className="product-description"></div>
        </section>
        <div className="order-observation">
          <p>Observações sobre o pedido</p>
          <input
            type="text"
            placeholder="Digite suas observações. Ex: Evitar açúcar"
          />
          <div className="add-item">
            <img src="#" alt="subtrair item" />
            <p>1</p>
            <img src="#" alt="adicionar item" />
          </div>
          <button>Comprar</button>
        </div>
      </main>
    </div>
  );
};
