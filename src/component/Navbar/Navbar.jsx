import React from 'react'
import { useProducts } from '../Providers/ProductsProvider'
import styles from './navbar.module.css'



const Navbar = () => {

    const products = useProducts()
    const totalItems = products.filter((p) => p.quantity > 0).length;

    return (
        <header className={styles.navbar}>
            <h2>Shopping Cart</h2>
            <span>{totalItems}</span>
        </header>
    )
}

export default Navbar;