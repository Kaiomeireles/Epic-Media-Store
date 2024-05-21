import React from 'react';
import ProductList from '../components/ProductList';

const ProductPage = ({ products }) => {
  return (
    <div>
      <h1>Filmes, Séries e Livros</h1>
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
