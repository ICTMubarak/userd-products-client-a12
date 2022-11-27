import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import BookingModal from './BookingModal';

const Booking = () => {
    
    const bookProduct = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(bookProduct);


    return (
        <div className="card w-full bg-base-100">
        <figure><img src={bookProduct.pic} alt={bookProduct.name} /></figure>
       <p class="text-lg font-bold">Model: {bookProduct.name}</p>
       <p class="text-lg font-bold">Price: {bookProduct.price}</p>
       
       <p class="text-lg font-bold">Location: {bookProduct.location}</p>
       <p class="text-lg font-bold">Mobile: {bookProduct.mobile}</p>
       <label htmlFor="booking-modal" className="btn btn-primary"
       
       >Book Now</label>
        <BookingModal bookProduct={bookProduct}></BookingModal>     
 </div>
    );
};

export default Booking;