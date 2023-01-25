import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { InputForm } from "../inputForm";
import { Product } from "../product";

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
    const filteredProduct = productsList.filter((product) => id === product.id);
    if (filteredProduct.length > 1) {
      throw new Error("¡Parámetros repetidos!");
    }
    if (filteredProduct.length === 1) {
      filteredProduct[0].isBought = !filteredProduct[0].isBought;
      setProductsList([...productsList]);
    }
  };
  const deleteById = (id) => {
    const filteredProduct = productsList.filter((product) => id === product.id);
    if (filteredProduct.length > 1) {
      throw new Error("¡Parámetros repetidos!");
    }
    if (filteredProduct.length === 1) {
      delFromApi(filteredProduct[0]);
      setProductsList(productsList.filter((product) => id !== product.id));
    }
  };
  const editById = (id) => {
    const filteredProduct = productsList.filter((product) => id === product.id);
    if (filteredProduct.length > 1) {
      throw new Error("¡Parámetros repetidos!");
    }
    if (filteredProduct.length === 1) {
      //TODO resolver como pasar el producto al input
    }
  };

  const addProduct = (givenProductName) => {
    const newProduct = {
      id: uuid(),
      productName: givenProductName,
      isBought: false,
    };
    postToApi(newProduct);
    setProductsList([...productsList, newProduct]);
  };

  const delFromApi = (product) => {
    const url =
      "https://63d0dab1d5f0fa7fbdbebaac.mockapi.io/products/" + product.id;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return Promise.resolve("Product deleted.");
        } else {
          return Promise.reject("An error occurred.");
        }
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  const postToApi = (product) => {
    const url = "https://63d0dab1d5f0fa7fbdbebaac.mockapi.io/products";

    const options = {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetch("https://63d0dab1d5f0fa7fbdbebaac.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <InputForm addProduct={addProduct} />
      <ul>
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
  );
};
