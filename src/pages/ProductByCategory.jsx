import React, { useState } from 'react'
import { useParams } from 'react-router'
import ViderPlayer from '../components/ViderPlayer.jsx'
import Products from '../components/Products'
import {items} from '../context/Data.js'
import { Videos } from '../context/Data.js'

const ProductByCategory = () => {

  const {cat} = useParams()

  const videoByCategory = Videos.find(vid => vid.category.toLowerCase() === cat.toLowerCase())

  const productByCategory = items.filter(pro => pro.category.toLowerCase()=== cat.toLowerCase())

  return (
    <>
    <ViderPlayer src={videoByCategory.url}/>
    <Products items={productByCategory}/>
    </>
  )
}

export default ProductByCategory