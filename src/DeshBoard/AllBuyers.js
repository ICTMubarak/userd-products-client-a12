import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllBuyers = () => {
    const allBuyers = useLoaderData();
    return (
        <div>
          
            <h1 class="text-center font-bold text-2xl">All Buyers</h1>
            <br /><br />
            <div  class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-1">
            {
                allBuyers.map(buyer => <p class="text-lg font-bold">Name: {buyer.name}, Mobile: {buyer.mobile}, Location: {buyer.location}</p>)
            }
            </div>
        </div>
    );
};

export default AllBuyers;