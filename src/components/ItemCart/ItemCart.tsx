export const ItemCart = () => {
  return (
    <div className="item">
      <img src="#" alt="imagem café" />
      <div className="item-info">
        <div className="item-info-text">
          <p>Nome do produto</p>
          <p>Vegano</p>
        </div>
        <img src="#" alt="excluir item" />
      </div>
      <div className="item-value">
        <p>R$ 0,00</p>
        <div className="add-item">
          <img src="#" alt="subtrair item" />
          <p>1</p>
          <img src="#" alt="adicionar item" />
        </div>
      </div>
    </div>
  );
};
