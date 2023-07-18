import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])
    return (
        <div className='my-12 mx-auto w-11/12'>
            <h2 className='text-center bg-purple-400 text-5xl py-4 font-bold'>Awesome Affordable Price</h2>
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;