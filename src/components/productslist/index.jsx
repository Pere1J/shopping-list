import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { InputForm } from "../inputForm";
import { Product } from "../product";
import styles from "./productlist.module.css";

const dataBase = [
  {
    id: uuid(),
    productName: "comprar algo",
    isBought: false,
  },
  {
    id: uuid(),
    productName: "comprar algo más",
    isBought: false,
  },
  {
    id: uuid(),
    productName: "comprar algo menos",
    isBought: true,
  },
  {
    id: uuid(),
    productName: "de veras quieres comprar??",
    isBought: false,
  },
];

export const ProductsList = () => {
  const [productsList, setProductsList] = useState(dataBase); //State
  const buyById = (id) => {
    const filteredProduct = productsList.filter((product) => id == product.id);
    if (filteredProduct.length > 1) {
      throw new Error("¡Parámetros repetidos!");
    }
    if (filteredProduct.length == 1) {
      filteredProduct[0].isBought = !filteredProduct[0].isBought;
      setProductsList([...productsList]);
    }
  };
  const deleteById = (id) => {
    const filteredProduct = productsList.filter((product) => id == product.id);
    if (filteredProduct.length > 1) {
      throw new Error("¡Parámetros repetidos!");
    }
    if (filteredProduct.length == 1) {
      setProductsList(productsList.filter((product) => id != product.id));
    }
  };
  const editById = (id) => {
    const filteredProduct = productsList.filter((product) => id == product.id);
    if (filteredProduct.length > 1) {
      throw new Error("¡Parámetros repetidos!");
    }
    if (filteredProduct.length == 1) {
      //TODO resolver como pasar el producto al input
    }
  };

  const addProduct = (givenProductName, setGivenProductName) => {
    if (givenProductName === "") return;
    const newProduct = {
      id: uuid(),
      productName: givenProductName,
      isBought: false,
    };
    setProductsList([...productsList, newProduct]);
    setGivenProductName("");
  };
  return (
    <div>
      <InputForm addProduct={addProduct} />
      <div className={styles.ulContainer}>
        <ul className={styles.productList}>
          {productsList.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
                buyById={buyById}
                deleteById={deleteById}
                editById={editById}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
