import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2'>
            <CheckCircleIcon className="h-6 w-6 text-purple-700" />
            <p className='text-white'>{feature}</p>
        </div>
    );
};

export default Feature;