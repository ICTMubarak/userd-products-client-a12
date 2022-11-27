import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Booking = () => {
    
    const bookProduct = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(bookProduct);


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
           <figure><img src={bookProduct.pic} alt={bookProduct.name} /></figure>
        <div  className="card-body gap-4">
         <h2 className="card-title">Product Name: {bookProduct.name}</h2>
          
      </div>
           
          <br />            
    </div>
    );
};

export default Booking;