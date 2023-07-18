import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 p-4 rounded-lg flex flex-col'>
            <h1>
                <span className='text-5xl font-extrabold text-purple-900'>{price.price}</span>
                <span className='text-2xl text-white'>/month</span>
            </h1>
            <h2 className='text-2xl font-bold mb-6'>{price.option}</h2>
            <p className='text-white underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 text-white w-full py-3 rounded-lg mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;