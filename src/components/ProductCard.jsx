import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">
          <Link to={`/product/${product.id}`} className="text-white">Detalhes</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
