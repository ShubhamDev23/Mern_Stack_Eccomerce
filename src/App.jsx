import React from 'react';
import ProductList from './componants/ProductList';
import ProductDetails from './componants/ProductDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MatchAndFind from './componants/MatchAndFind';
import productArr from './componants/ProductData';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Routes>
      <Route exact path="/"  element={<ProductList  />} />
      <Route path="/products/:productId"element={<MatchAndFind  />} />
      <Route path="*">
      </Route>
      </Routes>
    </Router>
    </div>
  )
};

export default App;

