import closeImage from "../../assets/X.svg";
import deleteImage from "../../assets/Trash.svg";
import plantImage from "../../assets/Plant.png";
import CowImage from "../../assets/Cow.png";
import plusImage from "../../assets/Plus.svg";
import minusImage from "../../assets/Minus.svg";
import styles from "./cart.module.css";

import { formatPrice } from "../../utils/FormatPrice";
import { useCart } from "../../context/CartContext";
import { CartProps } from "../Header/Header";

export const Cart = ({ setIsCartOpen }: CartProps) => {
  const {
    cart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
    removeAllItems,
  } = useCart();

  const itemsQuantity = cart.length;

  const total = () => {
    let total = 0;
    cart.forEach((item) => {
      return (total += item.preco * item.quantidade);
    });
    return formatPrice(total);
  };

  const finishPurchase = () => {
    alert("Compra finalizada com sucesso");
  };

  return (
    <div className={styles.cart}>
      <header className="cart-header">
        <h3 className="cart-header_title">Seu Carrinho</h3>
        <button
          className={styles.cart__close}
          onClick={() => setIsCartOpen(false)}
        ></button>
        <img src={closeImage} alt="fechar carrinho" />
      </header>
      <section className={styles.cart__body}>
        <div className={styles.cart__info}>
          <h4 className={styles.cart__quantityItems}>
            {itemsQuantity} {itemsQuantity === 1 ? "item" : "itens"}
          </h4>
          <a
            href="#"
            className={styles.cart__deleteAll}
            onClick={() => removeAllItems()}
          >
            Excluir Tudo
          </a>
        </div>
        {/* item adicionado no carrinho */}
        <div className={styles.cart__products}>
          {cart.map((item) => (
            <div className={styles.cart__product} key={item.idProduto}>
              <img
                src={`/${item.imagem}`}
                alt=""
                className={styles.cart__productImage}
              />

              <div className={styles.cart__productInfo}>
                <div className={styles.cart__productRow}>
                  <div className={styles.cart__productColumn}>
                    <h2 className={styles.cart__productName}>{item.nome}</h2>

                    <div
                      className={`${styles.cart__product} ${styles.product__tag} product__tag `}
                    >
                      {item.vegano ? (
                        <img src={plantImage} alt="vegano" />
                      ) : (
                        <img src={CowImage} alt="lactose" />
                      )}
                      {item.vegano ? (
                        <span>Vegano</span>
                      ) : (
                        <span>Contém Lactose</span>
                      )}
                    </div>
                  </div>

                  <button
                    className={styles.cart__productDelete}
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    <img src={deleteImage} alt="Deletar produto" />
                  </button>
                </div>

                <div className={styles.cart__productRow}>
                  <h3 className={styles.cart__productPrice}>
                    {formatPrice(item.preco)}
                  </h3>

                  <section className={styles.product__quantity}>
                    <button
                      type="button"
                      className={styles.product__quantityMinus}
                      onClick={() => increaseCartQuantity(item.idProduto)}
                    >
                      <img src={plusImage} alt="mais um" />
                    </button>
                    <input
                      type="text"
                      readOnly
                      className={styles.product__quantityInput}
                      value={item.quantidade}
                    />
                    <button
                      type="button"
                      className={styles.product__quantityPlus}
                      onClick={() => decreaseCartQuantity(item.idProduto)}
                    >
                      <img src={minusImage} alt="menos um" />
                    </button>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.cart__footer}>
        <div
          className={`${styles.cart__footerRow} ${styles.cart__footerSubtotal}`}
        >
          <h3 className={styles.cart__footerTitle}>Subtotal</h3>
          <h3 className={styles.cart__footerPrice}>{total()}</h3>
        </div>
        <div
          className={`${styles.cart__footerRow} ${styles.cart__footerDelivery}`}
        >
          <h3 className={styles.cart__footerTitle}>Entrega</h3>
          <h3 className={styles.cart__footerPrice}>R$ 0,00</h3>
        </div>
        <div
          className={`${styles.cart__footerRow} ${styles.cart__footerTotal}`}
        >
          <h3 className={styles.cart__footerTitle}>Total</h3>
          <h3 className={styles.cart__footerPrice}>{total()}</h3>
        </div>
        <div className={`${styles.cart__footerRow} ${styles.cart__footerBuy}`}>
          <button
            type="button"
            className={styles.cart__buy}
            onClick={() => finishPurchase()}
          >
            Finalizar compra
          </button>
        </div>
      </footer>
    </div>
  );
};
