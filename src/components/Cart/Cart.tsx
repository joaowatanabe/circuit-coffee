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
    </div>
  );
};
