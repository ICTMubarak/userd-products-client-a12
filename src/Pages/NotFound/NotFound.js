import React from 'react';
import notFoundImg from '../../picture/page404.jpg'

const NotFound = () => {
    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={notFoundImg} className="rounded-lg shadow-2xl w-1/2" alt="page404" />
        </div>
    </div>
    );
};

export default NotFound;