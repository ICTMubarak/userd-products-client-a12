import React from 'react';
import banner from '../../picture/banner.jpg'

const Banner = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg shadow-2xl w-5/6" alt="banner" />
            </div>
        </div>
    );
};

export default Banner;