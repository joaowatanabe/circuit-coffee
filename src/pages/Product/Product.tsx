import PlantImage from "../../assets/Plant.png";
import Cow from "../../assets/Cow.png";
import MinusImage from "../../assets/Minus.svg";
import PlusImage from "../../assets/Plus.svg";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import {
  listarCarrinhoPorId,
  listarProdutosPorId,
  criarCarrinho,
  atualizarCarrinho,
} from "../../Api/axios";
import { useEffect, useState } from "react";
import { IProduct } from "../../@types/products";
import { formatarPreco } from "../../utils/FormatPrice";

export function Product() {
  const [inputQuantity, setQuantidadeDeEntrada] = useState<string>("1");
  const [inputObservation, setObservacaoDeEntrada] = useState<string>("");

  const { id } = useParams<{ id: string }>();
  const idProduct = id as string;
  const [product, setProduct] = useState<IProduct>({
    id: "",
    nome: "",
    descricao: "",
    imagem: "",
    preco: {
      de: 0,
      por: 0,
    },
    vegano: false,
    categoria: "",
  });

  useEffect(() => {
    async function carregarProdutoPorId() {
      try {
        const resposta = await listarProdutosPorId(idProduct);
        setProduct(resposta);
        console.log(resposta);
      } catch (error) {
        console.log(error);
      }
    }
    carregarProdutoPorId();
  }, [idProduct]);

  function atualizarQuantidadeDeEntradaDoProduto(value: number) {
    const newValueInput = parseInt(inputQuantity) + value;
    if (newValueInput < 1) {
      return;
    }
    setQuantidadeDeEntrada(String(newValueInput));
  }

  async function atualizarProdutosDoCarrinho() {
    const productCart = await listarCarrinhoPorId(idProduct);
    console.log(productCart);

    if (productCart) {
      productCart.quantidade += parseInt(inputQuantity);
      await atualizarCarrinho(productCart.id, productCart);
    } else {
      const newProduct = {
        id: idProduct,
        idProduto: idProduct,
        nome: product.nome,
        imagem: product.imagem,
        preco: product.preco.por,
        vegano: product.vegano,
        quantidade: Number(inputQuantity),
        observacao: inputObservation,
      };
      const resposta = await criarCarrinho(newProduct);
      console.log(resposta);
    }
  }

  return (
    <main>
      <div className={`${style["product__container"]} container`}>
        <a href="/" className={style["product__link"]}>
          Voltar para o início
        </a>
        <section className={style["product"]}>
          <div className={style["product__container--image"]}>
            <img
              src={`../../public/${product.imagem}`}
              className={style["product__image"]}
              alt="produto 1"
            />
          </div>
          <div className={style["product__data"]}>
            <h1 className={style["product__title"]}>{product.nome}</h1>
            <h2 className={style["product__price"]}>
              {formatarPreco(product.preco.por)}
            </h2>
            {product.vegano ? (
              <div className="product__tag">
                <img src={PlantImage} alt="planta" />
                <span>Vegano</span>
              </div>
            ) : (
              <div className="product__tag">
                <img src={Cow} alt="Vaca" />
                <span>Contém Lactose</span>
              </div>
            )}
            <p className={style["product__description"]}>{product.descricao}</p>
            <form>
              <section className={style["product__observation"]}>
                <label htmlFor="observation">Observações sobre o pedido</label>
                <textarea
                  value={inputObservation}
                  onChange={(e) => setObservacaoDeEntrada(e.target.value)}
                  rows={3}
                  name="observation"
                  id="observation"
                  placeholder="Digite suas observações. Ex.: Enviar açúcar"
                ></textarea>
              </section>
              <div className={style["product__buy"]}>
                <section className={style["product__quantity"]}>
                  <button
                    onClick={() => atualizarQuantidadeDeEntradaDoProduto(-1)}
                    type="button"
                    className={style["product__quantity--minus"]}
                  >
                    <img src={MinusImage} alt="mais um" />
                  </button>
                  <input
                    onChange={() => {}}
                    type="text"
                    className={style["product__quantity--input"]}
                    value={inputQuantity}
                  />
                  <button
                    onClick={() => atualizarQuantidadeDeEntradaDoProduto(+1)}
                    type="button"
                    className={style["product__quantity--plus"]}
                  >
                    <img src={PlusImage} alt="menos um" />
                  </button>
                </section>
                <button
                  type="button"
                  onClick={() => atualizarProdutosDoCarrinho()}
                  className={style["product__button"]}
                >
                  Comprar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
