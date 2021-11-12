import React from 'react'
import styles from './product.module.css'
import { BiTrash } from 'react-icons/bi';

const Product = ({ onDecrement, onIncrement, product, onDelete }) => {
    return (
        <div className={styles.product} >
            <p>product name : {product.title} course</p>
            <p>product price : {product.price} </p>
            <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={onDecrement}>{product.quantity > 1 ? "-" : <BiTrash />}</button>
            <span className={styles.value}>{product.quantity}</span>
            <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement}>+</button>
            <button className={styles.button} onClick={onDelete} >delete</button>
        </div>
    )
}

export default Product;