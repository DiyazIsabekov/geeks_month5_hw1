import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./ProductDetail.module.css"

const ProductDetail = () => {

    const location = useLocation()
    const products = location.state

    return (
        <div className={styles.details}>
            <h1>Детали товара</h1>
            <h2>Название: {products.name}</h2>
            <img className={styles.product_image} src={products.picture} alt="image" />
            <h2>Описание: {products.description}</h2>
            <h2>Цена:{products.price}</h2>
        </div>
    );
};

export default ProductDetail;