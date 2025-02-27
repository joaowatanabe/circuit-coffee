import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ICartItem } from "../interfaces/cartItem.interface";
import { createRequest } from "../utils/createRequest";
import { IProduct } from "../interfaces/product.interface";

type CartContextData = {
  increaseCartQuantity: (idProduto: string) => void;
  decreaseCartQuantity: (idProduto: string) => void;
  removeItemFromCart: (idProduto: string) => void;
  removeAllItems: () => void;
  addToCart: (item: IProduct, quantidade: number) => void;
  cart: ICartItem[];
}


export const CartContext = createContext({} as CartContextData);

type CartProviderProps = {
  children: ReactNode;
}


export function CartProvider ({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    const cart = await createRequest("/carrinho", "GET");
    setCartItems(cart);
  }


  async function increaseCartQuantity(idProduto: string) {
   const updatedCart = cartItems.map((item) => {
      if (item.idProduto === idProduto) {
        return {
          ...item,
          quantidade: item.quantidade + 1,
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    
    const itemFound = updatedCart.find(
      (item) => item.idProduto === idProduto
    );

    if (itemFound) {
      await createRequest(`/carrinho/${itemFound.id}`, "PUT", {...itemFound,
        qauntidade: itemFound.quantidade,
      })
    }
  }

 async function decreaseCartQuantity(idProduto: string) {
    const updatedCart = cartItems.map((item) => {
      if (item.idProduto === idProduto) {
        return {
          ...item,
          quantidade: item.quantidade > 1 ? item.quantidade - 1 : 0,
        };
      }
      return item;
    });

    setCartItems(updatedCart);

    const itemFound = updatedCart.find(
      (item) => item.idProduto === idProduto
    );
    
    if (itemFound && itemFound.quantidade > 0) {
      await createRequest(`/carrinho/${itemFound.id}`,"PUT", {
        ...itemFound,
        quantidade: itemFound.quantidade,
      });
    }
  }

   async function removeItemFromCart(id: string) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    await createRequest(`/carrinho/${id}`, "DELETE");
  }

  async function removeAllItems() {
    cartItems.forEach(async (item) => {
      await createRequest(`/carrinho/${item.id}`, "DELETE");
    })
    setCartItems([]);
  }

  async function addToCart(item: IProduct, quantidade: number) {
      const itemAlreadyInCart = cartItems.find((product) => {
        return product.idProduto === item.id;
      });

      if (itemAlreadyInCart) {
        await createRequest(`/carrinho/${itemAlreadyInCart.id}`, "PUT", {...itemAlreadyInCart, quantidade: itemAlreadyInCart.quantidade + quantidade,})
      } else {
        await createRequest("/carrinho", "POST", { id: crypto.randomUUID(),
          idProduto: item.id,
          nome: item.nome,
          imagem: item.imagem,
          preco: item.preco.por,
          vegano: item.vegano,
          quantidade,
          observacao: "",})
      } 
      loadCart();
  }


  return (
    <CartContext.Provider value={{ increaseCartQuantity, decreaseCartQuantity, removeItemFromCart, removeAllItems, addToCart, cart: cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextData => {
  return useContext(CartContext);
};