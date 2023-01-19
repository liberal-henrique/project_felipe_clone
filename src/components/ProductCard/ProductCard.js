import React from 'react';
// import priceFormatter from '../../utils/priceFormatter';
import styled from './ProductCard.module.css';

export default function ProductCard(props) {
  const {product} = props;

  return (
    <li key={product.id}>
      <div className={styled.cardProducts}>
        <img src={product.imageUrl} alt={product.imageAlt}></img>
        <div className={styled.productName}>
          <h4>{product.name}</h4>
        </div>
        <div className={styled.cardPrice}>
          <p>{product.price} €</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </li>
  )
}
