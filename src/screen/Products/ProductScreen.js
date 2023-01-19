import React from 'react';
import ProductsList from '../../assets/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import styled from './ProductScreen.module.css';

export default function ProductScreen(props) {
  return (
    <ul className={styled.listProducts}>
      {ProductsList.map((product) => {
        return (
          <ProductCard 
            id={product.id}
            product={product}
          />
        )
        })}
    </ul>
  )
}
