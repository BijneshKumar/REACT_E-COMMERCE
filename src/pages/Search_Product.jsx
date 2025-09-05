import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { items } from '../context/Data'
import Products from '../components/Products'

const Search_Product = () => {

  const {term} = useParams()

  const searchproducts = items.filter((pro)=> pro.title.toLowerCase().includes(term.toLowerCase()))

  // const [searchProduct, setSearchProduct] = useState([])

  // useEffect(() => {
  //    const data = items.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase()))
  //    setSearchProduct(data)
  // }, [term])
  


  return (
    <div>

      {
        searchproducts.length > 0 ?       <Products items={searchproducts}/> : <h3 className='text-center p-4'>No product found</h3>
      }
    </div>
  )
}

export default Search_Product