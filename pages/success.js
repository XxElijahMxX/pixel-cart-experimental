import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runSnow } from '@/lib/utils';


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runSnow();
    }, []);
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Congrats on your purchase!</h2>
            <p className='email-msg'>Please check your email for the receipt.</p>
            <p className='description'>
                If you have any questions, please email us at
                <a className='email' href='mailto:pixelcart@gmail.com'>
                    pixelcart@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type='button' width='300px'className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success