import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { FaMobile, FaLaptop, FaTablet, FaClock, FaThLarge, FaRupeeSign } from 'react-icons/fa'
import DataContext from '../context/DataContext'
import { items } from '../context/Data'


const categories = [
  { name: "All Products", icons: <FaThLarge /> },
  { name: "Mobiles", icons: <FaMobile /> },
  { name: "Laptops", icons: <FaLaptop /> },
  { name: "Tablets", icons: <FaTablet /> },
  { name: "Watches", icons: <FaClock /> },
]

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000]

const ShopByCategory = () => {
  const { setProducts } = useContext(DataContext);

  const [selectedPrice, setSelectedPrice] = useState(80000)

  const filterByCategory = (cat)=>{
    if(cat === 'All Products'){
      setProducts(items)
      return
    }
    setProducts(items.filter(pro => pro.category.toLowerCase() === cat.toLowerCase()))
  }

  const filterByPrice = (price)=>{
    setProducts(items.filter((pro)=> pro.price <= price))
  }

  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className='text-center mb-3'>Filter Products</h3>
        <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center align-items-center">
          {categories.map(({ name, icons }) => (
            <div onClick={()=>filterByCategory(name)} key={name} className='d-flex align-items-center gap-3 px-3 py-2 rounded bg-secondary text-light fw-bold' style={{ cursor: "pointer" }}>{icons} <span>{name}</span></div>
          ))}
        </div>

        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {priceRanges.map((value) => (
            <div onClick={()=>filterByPrice(value)} key={value} className={`fw-bold badge p-3 ${selectedPrice === value ? 'bg-warning text-dark' : 'bg-light text-dark' }`} style={{ cursor: "pointer", fontSize: '1rem',borderRadius:'10px' }}>
             <FaRupeeSign/>{value}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShopByCategory











{/* <div className='container text-center bg-dark rounded'>
       <h3 className='py-4'>caterories</h3>
       <div className="category-container ">
        <div className="row d-flex justify-content-center gap-2 mt-4">
          <Link to={`/product/category/mobile`} className="col-lg-2 text-center bg-primary p-2 rounded font-bold">mobile</Link>
          <Link to={`/product/category/laptop`} className="col-lg-2 text-center  bg-primary p-2 rounded font-bold">laptop</Link>
          <Link to={`/product/category/tab`} className="col-lg-2 text-center  bg-primary p-2 rounded font-bold">tab</Link>
          <Link to={`/product/category/apple`} className="col-lg-2 text-center  bg-primary p-2 rounded font-bold">apple</Link>
          <Link to={`/product/category/macbook`} className="col-lg-2 text-center  bg-primary p-2 rounded font-bold">macbook</Link>
        </div>

        <div className="row d-flex justify-content-center gap-2 pt-4 pb-5 ">
          <Link to={`/product/category/`} className="col-lg-2 text-center bg-danger p-2 rounded font-bold">30000</Link>
          <Link to={`/product/category/`} className="col-lg-2 text-center  bg-danger p-2 rounded font-bold">40000</Link>
          <Link to={`/product/category/`} className="col-lg-2 text-center  bg-danger p-2 rounded font-bold">50000</Link>
          <Link to={`/product/category/`} className="col-lg-2 text-center  bg-danger p-2 rounded font-bold">60000</Link>
          <Link to={`/product/category/`} className="col-lg-2 text-center  bg-danger p-2 rounded font-bold">70000</Link>
        </div>
       </div>
    </div> */}