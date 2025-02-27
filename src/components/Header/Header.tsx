import { Dispatch, SetStateAction, useState } from "react";
import logoImage from "../../assets/logo.svg";
import ToteImage from "../../assets/Tote.svg";
import { Cart } from "../Cart/Cart";
import { useCart } from "../../context/CartContext";

export type CartProps = {
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={logoImage} alt="logo cubospresso" />
        </a>
        <a
          href="#"
          className="link__quantity"
          onClick={() =>
            isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)
          }
        >
          <img src={ToteImage} alt="Carrinho" />
          <span className="badge__quantity">{cart.length}</span>
        </a>
      </div>
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
    </header>
  );
};
