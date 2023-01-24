import styles from "./product.module.css";
import React from "react";
import { MdAddShoppingCart, MdDeleteForever, MdModeEdit } from "react-icons/md";

export const Product = ({ product, buyById, editProductById, deleteById }) => {
  /*  {
    id:'', 
    productName:'',
    isBought: false,    
};  */
  return (
    <li key={product.id} className={styles.product}>
      {product.productName}
      <div className={styles.productButtonsContainer}>
        <MdAddShoppingCart
          className={`${styles.icon} ${styles.iconShopped}`}
          onClick={() => buyById(product.id)}
        />
        <MdModeEdit
          className={`${styles.icon} ${styles.iconEdit}`}
          onClick={() => editProductById(product.id)}
        />
        <MdDeleteForever
          className={`${styles.icon} ${styles.iconDelete}`}
          onClick={() => deleteById(product.id)}
        />
      </div>
    </li>
  );
};
