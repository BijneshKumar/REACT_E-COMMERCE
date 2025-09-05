import React, { useState } from 'react'
import DataContext from './DataContext'
import { items } from './Data'
import { Bounce, toast, ToastContainer } from 'react-toastify'


const DataState = (props) => {
  const [products, setProducts] = useState(items)
  const [cart, setCart] = useState([])

  console.log(cart)

  const addToCart = (id, title, price, imgSrc) => {
    const obj = { id, title, price, imgSrc }

    toast.success('Item Added to Cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setCart([...cart, obj])

  }
  return (
    <DataContext.Provider value={{ cart, setCart, products, setProducts ,addToCart}}>
      {props.children}
    </DataContext.Provider>
  )
}



export default DataState;




































































