import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllSellers = () => {
    const allSellers = useLoaderData();
    return (
        <div>            
            <h1 class="text-center font-bold text-2xl">All sellers here</h1>
            <br /><br />
            <div  class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-1">
            {
                allSellers.map(seller => <p class="text-lg font-bold">Location: {seller.location}, Mobile: {seller.mobile}</p>)
            }
            </div>
        </div>
    );
};

export default AllSellers;