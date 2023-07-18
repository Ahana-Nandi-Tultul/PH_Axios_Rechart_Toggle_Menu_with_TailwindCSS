import React, { useState } from 'react';
import Link from '../LInk/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Products',
          path: '/products'
        },
        {
          id: 4,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 5,
          name: 'Services',
          path: '/services'
        }
      ];
      
    return (
        <div>
            <div className='md:hidden bg-purple-300 p-2' onClick={() => setOpen(!open)}>
                <p>
                    {
                    open === true ? 
                        <XMarkIcon className="h-6 w-6 text-blue-500" /> : 
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                    }
                </p>  
            </div>
            <ul className={`md:flex mt-4 md:mt-0 absolute md:static duration-500 bg-purple-300 py-4 px-8 ${open ? 'top-5' : '-top-96'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;