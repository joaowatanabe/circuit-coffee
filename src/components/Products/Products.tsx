export const Products = () => {
  return (
    <div className="container-products">
      {/* PREÇO E IMAGEM VARIÁVEIS */}
      <img src="#" alt="Imagem do produto" />
      <p className="preco-produto">R$ 0,00</p>
      <p className="preco-produto-anterior">R$ 0,00</p>
      <p className="descritivo-produto">Café com leite</p>
      <img src="#" alt="Contem lactose" />
      <p className="contem-lactose">Contém lactose</p>
      <img src="#" alt="vegano" />
      <p className="vegano">Vegano</p>
    </div>
  );
};
