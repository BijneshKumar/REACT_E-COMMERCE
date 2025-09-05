import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import All_Products from './components/All_Products'  
import Product_Detail from './pages/Product_Detail'
import ProductByCategory from './pages/ProductByCategory'
import Search_product from './pages/Search_product'
import TrendingSlider from './components/Trending_Slider'

const App = () => {
  return (
  <>
  <Navbar />
   <Routes>
    <Route path='/' element={<All_Products/>} />
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product/:id' element={<Product_Detail/>}/>
    <Route path='/product/category/:cat' element={<ProductByCategory/>}/>
    <Route path='/product/search/:term' element = {<Search_product/>}/>
   </Routes>
   <TrendingSlider/>
  </>
     )
}

export default App