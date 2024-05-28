import React from 'react';
import getitOrnaments from '../assets/getit-ornaments.svg';

const BottomHero: React.FC = () => { 
    return (
        <div className='bg-primary mt-32'
            style={{
                backgroundImage: `url(${getitOrnaments})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container px-4 xl:mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-40 gap-x-20">
                    <div className='text-white'>
                        <h1 className='text-5xl md:text-6xl font-bold'>Get it Now</h1>
                        <p className='text-sm pt-5 text-gray-300'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            luctus venenatis, lectus magna fringilla urna
                        </p>
                    </div>

                    <div className='space-x-2 md:space-x-6 pt-10 lg:p-0 xl:pl-[150px] place-content-end'>
                        <button className='bg-white text-black px-5 sm:px-10 py-3 rounded-md hover:bg-secondary'>
                            <div className='text-left'>
                                <h5 className='text-xs'>Available on the</h5>
                                <h1 className='font-semibold text-xl'>App Store</h1>
                            </div>
                        </button>
                        <button className='bg-black text-white px-5 sm:px-10 py-3 rounded-md hover:bg-gray-800'>
                            <div className='text-left'>
                                <h5 className='text-xs'>Available on the</h5>
                                <h1 className='font-semibold text-xl'>Google Play</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHero;