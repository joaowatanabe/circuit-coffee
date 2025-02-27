import { ItemCart } from "../ItemCart/ItemCart";

export const Cart = () => {
  return (
    <div className="container-cart">
      <header className="cart-header">
        <h1 className="cart-header_title">Seu Carrinho</h1>
        <img src="#" alt="fechar carrinho" />
      </header>
      <section className="items">
        <div className="info-items">
          <p>x itens</p>
          <p>Excluir tudo</p>
        </div>
        {/* item adicionado no carrinho */}
        <ItemCart />
      </section>
      <footer className="cart-footer">
        <div className="summary-cart">
          <div className="summary-info">
            <p>Subtotal</p>
            <p>Entrega</p>
            <h3>Total</h3>
          </div>
          <div className="summary-info-value">
            <p>R$ 0,00</p>
            <p>R$ 0,00</p>
            <h3>R$ 0,00</h3>
          </div>
        </div>
        <button className="cart-button">Finalizar compra</button>
      </footer>
    </div>
  );
};
