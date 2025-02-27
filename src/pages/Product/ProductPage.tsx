import MinusImage from "../../assets/Minus.svg";
import PlusImage from "../../assets/Plus.svg";
import styles from "./productPage.module.css";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";
import PlantImage from "../../assets/Plant.png";
import CowImage from "../../assets/Cow.png";
import { createRequest } from "../../utils/createRequest";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/FormatPrice";
import { useCart } from "../../context/CartContext";

export const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<IProduct>({ preco: {} } as IProduct);
  const [quantityInput, setQuantityInput] = useState<number>(1);

  useEffect(() => {
    getProductById();
  }, [id]);

  const getProductById = async () => {
    const product = await createRequest(`/produtos/${id}`, "GET");
    setProduct(product);
  };

  const decreaseProductQuantity = async () => {
    setQuantityInput(quantityInput > 1 ? quantityInput - 1 : 1);
  };

  const increaseProductQuantity = async () => {
    setQuantityInput(quantityInput + 1);
  };

  return (
    <>
      <main>
        <div className={`container ${styles.product__container}`}>
          <a href="/" className={styles.product__link}>
            Voltar para o início
          </a>
          <section className={styles.product}>
            <>
              <div className={styles["product__container--image"]}>
                <img
                  src={`/${product.imagem}`}
                  className={styles.product__image}
                  alt="produto 1"
                />
              </div>
              <div className={styles.product__data}>
                <h1 className={styles.product__title}>{product.nome}</h1>
                <h2 className={styles.product__price}>
                  {formatPrice(product.preco.por)}
                </h2>
                <div className={`${styles.product__tag} product__tag`}>
                  {product.vegano ? (
                    <img src={PlantImage} alt="planta" />
                  ) : (
                    <img src={CowImage} alt="planta" />
                  )}
                  {product.vegano ? (
                    <span>Vegano</span>
                  ) : (
                    <span>Contém lactose</span>
                  )}
                </div>
                <p className={styles.product__description}>
                  {product.descricao}
                </p>
                <form>
                  <section className={styles.product__observation}>
                    <label htmlFor="observation">
                      Observações sobre o pedido
                    </label>
                    <textarea
                      rows={3}
                      name="observation"
                      id="observation"
                      placeholder="Digite suas observações. Ex.: Enviar açúcar"
                    ></textarea>
                  </section>
                  <div className={styles.product__buy}>
                    <section className={styles.product__quantity}>
                      <button
                        type="button"
                        className={styles["product__quantity--minus"]}
                        onClick={() => decreaseProductQuantity()}
                      >
                        <img src={MinusImage} alt="menos um" />
                      </button>
                      <input
                        type="text"
                        className={styles["product__quantity--input"]}
                        value={quantityInput}
                        readOnly
                      />
                      <button
                        type="button"
                        className={styles["product__quantity--plus"]}
                        onClick={() => increaseProductQuantity()}
                      >
                        <img src={PlusImage} alt="mais um" />
                      </button>
                    </section>
                    <button
                      type="button"
                      className={styles.product__button}
                      onClick={() => addToCart(product, quantityInput)}
                    >
                      Comprar
                    </button>
                  </div>
                </form>
              </div>
            </>
          </section>
        </div>
      </main>
    </>
  );
};
