import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsComponent = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  const { id, name, price } = product;

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      
      {/* Button to navigate back to the product list */}
      <Link to="/">
        <button>Back to Product List</button>
      </Link>
    </div>
  );
};

export default ProductDetailsComponent;
