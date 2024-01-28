import React, { useState } from "react";
import "../mycssfiles/productlist.css";
import ProductDetails from "./ProductDetails";
import {Link} from 'react-router-dom'
import productArr from './ProductData'
const ProductList = () => {
  const [Products, setProducts] = useState(productArr);
  const [selected, setSelected] = useState(null);
  const [sorted, setSorted] = useState([]);
  const [visible, setVisible] = useState(false);

  const HandleFilter = (cat) => {
    if (selected === cat) {
      setProducts(productArr);
      setSelected(null);
    } else {
      const filteredArr = productArr.filter((product) => product.category === cat);
      setProducts(filteredArr);
      setSorted(filteredArr);
      setSelected(cat);
    }
  };

  const comparePrices = (product1, product2) => {
    return product1.price - product2.price;
  };

  const comparePrices1 = (product1, product2) => {
    return product2.price - product1.price;
  };

  const HighToLow = () => {
    const sortedProductArr = sorted.slice().sort(comparePrices);
    setProducts(sortedProductArr);
  };

  const LowToHigh = () => {
    const sortedProductArr = sorted.slice().sort(comparePrices1);
    setProducts(sortedProductArr);
  };

  const makeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="productList">
      <div className="but">
        <button onClick={() => HighToLow()}>Low to High</button>
        <button onClick={() => LowToHigh()}>High to Low</button>
        <button onClick={() => HandleFilter('T shirt')}>Tshirt</button>
        <button onClick={() => HandleFilter('Hoodie')}>hodie</button>
        <button onClick={() => HandleFilter('Pant')}>pants</button>
      </div>
      <div className="main">
        {Products.map((item, idx) => (
          <div className="sub" key={idx}>
            <img className="pic" src={item.img} alt={item.img} />
            <div>{item.name}</div>
            <div>price:{item.price}</div>
            
            <button>ADD To Cart</button>
            <button onClick={makeVisible}>Details</button>
            {visible && (
              <li key={item.id}>
                <Link
                  to={{
                    pathname: `/products/${idx}`,
                    state: { product: item },
                  }}
                >
                  {item.name}
                </Link>
              </li>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
