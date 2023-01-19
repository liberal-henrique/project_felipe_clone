import React, { useState } from "react";
import lupaIcon from "../../assets/imagemLupa.svg";
import productsIcon from "../../assets/imagemProdutos.svg";
import cartIcon from "../../assets/imagemCarrinho.svg";
import styled from "./Header.module.css";

export default function Header(props) {
  const [searchItem, setSearchItem] = useState("");

  const onSearchInputHandler = (event) => {
    event.preventDefault();
    setSearchItem(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styled.header}>
      <div className={styled.headerContent}>
        <h1>Space Renner</h1>
        <span>
          <label>Ordenar Alfabetica:</label>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>

          <label>Ordenar por preço:</label>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </span>

        <div className={styled.buttonPages}>
          <button onClick={props.onProductHandler}>
            <img src={productsIcon} alt="Product Icon" />
          </button>
          <button onClick={props.onCartHandler}>
            <img src={cartIcon} alt="Cart Icon" />
          </button>
        </div>
      </div>
      <form className={styled.searchInput}>
        <input
          value={searchItem}
          onChange={onSearchInputHandler}
          placeholder="What are you looking for?"
        />
        <button onClick={onSearchInputHandler}>
          <img src={lupaIcon} alt="Lupa Icon" />
        </button>
      </form>
    </div>
  );
}
