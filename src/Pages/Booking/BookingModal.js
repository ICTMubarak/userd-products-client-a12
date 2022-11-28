import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const BookingModal = (bookProduct) => {
    const {user} = useContext(AuthContext);
    const [buyConfirm, setBuyConfirm] = useState({});

    console.log(buyConfirm);
    
    const handleBuyConfirm = event =>{
        event.preventDefault();
        fetch('https://used-laptop-server.vercel.app/orderconfirm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(buyConfirm)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                window.alert('Your order confirm successfully');
                event.target.reset();
            }
        })
        
    }


    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newBuyConfirm = {...buyConfirm}
        newBuyConfirm[field] = value;
        setBuyConfirm(newBuyConfirm);
        
    }


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
                    <form onSubmit={handleBuyConfirm} className='mt-4 grid grid-cols-1'>
                        
                    Product ID: <input onBlur={handleInputBlur} name="prodct_id" type="text" value={bookProduct.bookProduct._id} className="input input-bordered w-full " required/>
                        <input onBlur={handleInputBlur} name="name" type="text" placeholder="Type your name" className="input input-bordered w-full " required/><br />
                        <input onBlur={handleInputBlur} name="mobile" type="text" placeholder="Type your mobile number" className="input input-bordered w-full " required/><br />
                        <input onBlur={handleInputBlur} name="email" type="email" placeholder="Type your email" className="input input-bordered w-full " required/><br />
                         <input onBlur={handleInputBlur} name="location" type="text" placeholder="Type your location" className="input input-bordered w-full " required/>
                        
                        <br /><br />
        
                         <input className='btn btn-primary' type="submit" value="Buy Confirm" />
                           
                    </form>
                </div>
            </div>
          
        </>
    );
};

export default BookingModal;