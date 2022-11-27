import React from 'react';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const Product = (product) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
           <figure><img src={product.product.pic} alt={product.product.name} /></figure>
        <div  className="card-body gap-4">
         <h2 className="card-title">Product Name: {product.product.name}</h2>
          <p>Model: {product.product.name}</p>
          <p>Price: {product.product.price}</p>
          <p>Product Condition: {product.product.condition}</p>
          <p>Description: {product.product.description}</p>
          <p>Location: {product.product.location}</p>
          <p>Mobile: {product.product.mobile}</p>
      </div>
           <Link to={`/booking/${product.product._id}`}>
            <button className='btn btn-primary'>Book now</button>
          </Link>
          <br />            
    </div>
    );
};

export default Product;