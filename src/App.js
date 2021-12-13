import React from 'react'
import './App.css'
import Wrapper from './component/hoc/Wrapper';
import Navbar from './component/Navbar/Navbar';
import ProductsProvider from './component/Providers/ProductsProvider';
import ProductList from './component/productList/productList';
import Filter from './component/Filter/filter/Filter'

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  )
}

export default Wrapper(App, "container");
