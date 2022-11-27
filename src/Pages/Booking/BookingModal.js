import React from 'react';

const BookingModal = (bookProduct) => {
    console.log('bp=',bookProduct);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Laptop-Model-No:: {bookProduct.bookProduct.name}</h3>
                    <h3 className="text-lg font-bold">Laptop Price: {bookProduct.bookProduct.price}</h3>
                    <h3 className="text-lg font-bold">Saler Location: {bookProduct.bookProduct.location}</h3>
                    <h3 className="text-lg font-bold">Contuct : {bookProduct.bookProduct.mobile}</h3>
                    <form className='mt-10 grid grid-cols-1 gap-3'>
                        
                        Your Mobile No:- <input type="text" placeholder="Type your mobile number" className="input input-bordered w-full " /><br />
                        Your Email:- <input type="text" placeholder="Type your email" className="input input-bordered w-full " /><br />
                        Your Location:- <input type="text" placeholder="Type your location" className="input input-bordered w-full " />
                        <br /><br />
                        <input className='btn btn-primary' type="submit" value="Buy Confirm" />
                    </form>
                </div>
            </div>
          
        </>
    );
};

export default BookingModal;