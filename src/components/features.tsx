import React from 'react';

import arrowwDownUp from '../assets/arrow-down-up.svg';
import werfastMobile from '../assets/werfast-mobile.png';


const Features: React.FC = () => {
    return (
        <div className='mt-16 md:mt-38 lg:mt-40'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className="flex flex-col items-center justify-center text-center p-5">
                    <img src={arrowwDownUp} alt="" className="bg-secondary rounded-md p-3 mb-4" />
                    <h1 className="font-bold text-2xl mb-2">Send & Receive</h1>
                    <p className="text-txtgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-5">
                    <img src={arrowwDownUp} alt="" className="bg-secondary rounded-md p-3 mb-4" />
                    <h1 className="font-bold text-2xl mb-2">Online Payment</h1>
                    <p className="text-txtgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-5">
                    <img src={arrowwDownUp} alt="" className="bg-secondary rounded-md p-3 mb-4" />
                    <h1 className="font-bold text-2xl mb-2">Payment in Store</h1>
                    <p className="text-txtgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 lg:mt-40'>
                <div className='grid place-items-center'>
                    <img src={werfastMobile} className='' alt="" />
                </div>
                <div className='mt-16 lg:mt-30 space-y-8'>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>We Are Fast and Secure Payment Method</h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className='bg-primary text-white px-8 py-4 font-semibold rounded-md hover:bg-secondary hover:text-primary'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Features;