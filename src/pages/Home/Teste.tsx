import styles from "./home.module.css";

import { NavLink } from "react-router-dom";
import { IProduct } from "../../@types/products";
import PlantImage from "../../assets/Plant.png";
import CowImage from "../../assets/Cow.png";
import { formatPrice } from "../../utils/formatPrice";
import { createRequest } from "../../utils/createRequest";
import { useEffect, useState } from "react";

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts() {
    const response = await createRequest("/produtos", "GET");
    setProducts(response);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const classic = products.filter(
    (product) => product.categoria === "classicos"
  );
  const iced = products.filter((product) => product.categoria === "gelados");

  return (
    <>
      <main>
        <section className="slogan">
          <div className="container">
            <h1 className="slogan__title">
              Fragrância e sabor elevado ao cubo
            </h1>
            <p className="slogan__text">
              Explore nossa variedade de blends exclusivos e saboreie a
              perfeição em cada gole.
            </p>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className={styles.products__title}>Clássicos</h2>
            <div className={styles.products__list}>
              {classic.map((product) => (
                <NavLink
                  to={`/product/${product.id}`}
                  className={styles["products__list--item"]}
                  key={product.id}
                >
                  <img src={product.imagem} alt="" />
                  <h3 className={styles["products__list--price"]}>
                    {formatPrice(product.preco.por)}{" "}
                    <span>{formatPrice(product.preco.de)}</span>
                  </h3>
                  <h4 className={styles["products__list--name"]}>
                    {product.nome}
                  </h4>
                  <div className="product__tag">
                    {product.vegano ? (
                      <img src={PlantImage} alt="planta" />
                    ) : (
                      <img src={CowImage} alt="Lactose" />
                    )}
                    {product.vegano ? (
                      <span>Vegano</span>
                    ) : (
                      <span>Contém lactose</span>
                    )}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className={styles.products__title}>Gelados</h2>
            <div className={styles.products__list}>
              {iced.map((product) => (
                <NavLink
                  to={`/product/${product.id}`}
                  className={styles["products__list--item"]}
                  key={product.id}
                >
                  <img src={product.imagem} alt="" />
                  <h3 className={styles["products__list--price"]}>
                    {formatPrice(product.preco.por)}{" "}
                    <span>{formatPrice(product.preco.de)}</span>
                  </h3>
                  <h4 className={styles["products__list--name"]}>
                    {product.nome}
                  </h4>
                  <div className="product__tag">
                    {product.vegano ? (
                      <img src={PlantImage} alt="planta" />
                    ) : (
                      <img src={CowImage} alt="Lactose" />
                    )}
                    {product.vegano ? (
                      <span>Vegano</span>
                    ) : (
                      <span>Contém lactose</span>
                    )}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
