import React from 'react';

const Product = (product) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
           <figure><img src={product.product.pic} alt={product.product.name} /></figure>
        <div  className="card-body gap-4">
         <h2 className="card-title">Product Name: {product.product.name}</h2>
          <p>Price: {product.product.price}</p>
      </div>
    </div>
    );
};

export default Product;