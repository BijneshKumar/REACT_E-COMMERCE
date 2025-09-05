import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router'
import ShopByCategory from './ShopByCategory'
import DataContext from '../context/DataContext'
import { Bounce, toast, ToastContainer } from 'react-toastify'


const Products = ({items}) => {

  const {addToCart} = useContext(DataContext)

  const {pathname} = useLocation()

  const handleclick = ()=>{

  toast('Item Added to Cart', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

  }



  return (
    <>
   <ToastContainer/>
    {pathname === '/' && <ShopByCategory/>}
    <div className='container my-5'>
      <div className="row d-flex justify-content-center">
       {
        items.map((product)=>(
          <div key={product.id} className='col-lg-4 col-md-6 my-3 d-flex justify-content-center'>

            <div className="card product-card text-center" style={{width:'18rem'}}>
              <Link to={`/product/${product.id}`} className='image-container'>
               <img src={product.imgSrc} alt='image' className='card-img-top'/>
              </Link>
              <div className="card-body text-center">
               <h5 className='card-title'>{product.title}</h5>
               <p className='product-price'>{product.price}₹</p>
               <div className="button-container">
                <button onClick={()=> addToCart(product.id,product.title,product.price,product.imgSrc)} className='btn btn-primary add-to-cart'>🛒 Add to cart</button>
               </div>
              </div>
            </div>
          </div>
        ))
       }
      </div>
    </div>
    </>
  )
}

export default Products




// import React from 'react'
// import { Link } from 'react-router'

// const Products = ({ items }) => {

//   return (
//     <>
//       <div className='container my-5'>
//         <div className="row d-flex justify-content-center">
//           {
//             items.map((product) => (
//               <div key={product.id} className='col-lg-4 col-md-6 my-3 d-flex justify-content-center'>

//                 <div className="card h-100 d-flex flex-column" style={{width:'18rem'}}>
//                   <img src={product.imgSrc} className="card-img-top" alt="Product Image" style={{height:'250px', objectfit: "cover"}}/>

//                     <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
//                       <div>
//                         <h5 className="card-title">{product.title}</h5>
//                         <p className="card-text fw-bold text-warning">{product.price}₹</p>
//                       </div>
//                       <a href="#" className="btn btn-primary mt-auto"><i className="bi bi-cart"></i> Add to cart</a>
//                     </div>
//                 </div>

//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// export default Products