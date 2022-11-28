import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Product from '../ProductShow/Product';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner><br /><br /><br />
            <section>
                <h1 class="text-center font-bold text-2xl">Advertised</h1>
                <div  class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-3">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>

            </section><br /><br /><br />
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;