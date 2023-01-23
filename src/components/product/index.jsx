import styles from "./product.module.css";
import React from "react";
import {
  MdAddShoppingCart,
  MdDeleteForever,
  MdBorderColor,
} from "react-icons/md";

export const Product = (props) => {
  /*  {
    id:'',
    productName:'',
    isBought: false,    
};  */
  return (
    <li key={props.product.id} className={styles.product}>
      {props.product.productName}{" "}
      <div>
        <MdAddShoppingCart /> <MdBorderColor /> <MdDeleteForever />
      </div>
    </li>
  );
};
