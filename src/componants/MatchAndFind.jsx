// ProductDetailsWrapper.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import productArr from './ProductData';
const MatchAndFind = () => {
    const { productId } = useParams();
  console.log(productId)

  // Find the selected product based on the route parameter
  const selectedProduct = productArr.find(
    (product) => product.id.toString() === productId
  );

  return <ProductDetails product={selectedProduct} />;
};

export default MatchAndFind;
