import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Acer = () => {
    const products = useLoaderData();
    return (
        <div>
        <h1 class="text-lg font-bold">All Acer Laptop</h1>
        <div  class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-3">
        {
            products.map(product => <Product key={product._id} product={product}></Product>)
        }
        </div>
    </div>
    );
};

export default Acer;