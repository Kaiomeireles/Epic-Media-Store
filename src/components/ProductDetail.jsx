import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container mt-4">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="img-fluid" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
