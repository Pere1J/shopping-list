import styles from "./product.module.css";
import React from "react";
import { MdAddShoppingCart, MdDeleteForever, MdModeEdit } from "react-icons/md";

export const Product = ({ product, buyById, editById, deleteById }) => {
  /*  {
    id:'', 
    productName:'',
    isBought: false,    
};  */
  return (
    <li
      className={`${styles.product} ${
        product.isBought ? styles.productBought : ""
      }`}
    >
      {product.productName}
      <div className={styles.productButtonsContainer}>
        <MdAddShoppingCart
          className={`${styles.icon} ${styles.iconShopped}`}
          onClick={() => buyById(product.id)}
        />
        <MdModeEdit
          className={`${styles.icon} ${styles.iconEdit}`}
          onClick={() => editById(product.id)} //añadir clase disabled con cursor: no-drop
        />
        <MdDeleteForever
          className={`${styles.icon} ${styles.iconDelete}`}
          onClick={() => deleteById(product.id)}
        />
      </div>
    </li>
  );
};
