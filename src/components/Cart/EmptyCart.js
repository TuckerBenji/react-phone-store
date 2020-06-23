import React from 'react'

export default function EmptyCart() {
   return (
      <div className="container mt-5">
         <div className="row">
            <div className="col-10 mx-auto text-center text-title">
               <h1 className="mb-5 mt-5">your cart is currently empty</h1>
               <h5 className="text-lowercase">return to products page to add items to your cart</h5>
            </div>
         </div>
      </div>
   )
}


