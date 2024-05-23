import React from 'react';

import arrowwDownUp from '../assets/arrow-down-up.svg';


const Features: React.FC = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-40'>
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
    );
};

export default Features;