import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';

import './App.css';
import './product.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={ <Layout /> }>
              <Route index element={<Home/> } />
              <Route path='/product' element={<Product/>} />
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


