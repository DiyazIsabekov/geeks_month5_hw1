import React, { useState } from 'react';
import productsJSON from "../../json/products.json"
import { Link } from 'react-router-dom';
import styles from "./ProductList.module.css"

const ProductList = () => {

    const [products, setProducts] = useState(productsJSON)

    return (
        <div className={styles.products_list}>
            {products.map(e => (
                <li>
                    <Link className={styles.product_link} to="/detail" state={e}>{e.name}</Link>
                </li>
            ))}
        </div>
    );
};

export default ProductList;