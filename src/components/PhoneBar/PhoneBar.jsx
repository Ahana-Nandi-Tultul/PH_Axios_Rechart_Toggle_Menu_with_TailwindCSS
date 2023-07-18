import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            
            const phoneInfo = data.data.data.map(phone =>{
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                return ({
                    name: phone.phone_name,
                    price: price,
                })
            })
            console.log(phoneInfo);
            setPhones(phoneInfo);
        })

    }, [])
    return (
        <div>
            <BarChart data={phones} width={1000} height={300}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PhoneBar;