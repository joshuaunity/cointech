import React from 'react';

import mobilePhone from '../assets/mobile-hero.png';
import partners from '../assets/partners.png';


const Hero: React.FC = () => {
    return (
        <div className="w-full pt-0 lg:pt-12">
            <div className="container px-3 xl:mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                    <div className='space-y-10 lg:col-span-8 lg:pt-14 xl:pt-28'>
                        <div>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-extrabold text-txtblack'>
                                New Way To Do
                            </h1>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary'>
                                Payment Method
                            </h1>
                        </div>
                        <p className='col-4 w-11/12 md:w-7/12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                        <div className='space-x-6'>
                            <button className='bg-primary text-white px-8 py-4 font-semibold rounded-md hover:bg-secondary hover:text-primary'>
                                Download
                            </button>
                            <button className='bg-white text-primary px-8 py-4 font-semibold rounded-md border-2 border-primary hover:border-primary hover:bg-secondary hover:border-0 hover:text-primary'>
                                learn More
                            </button>
                        </div>

                        <div className='lg:pt-8'>
                            <img src={partners} alt="partners" />
                        </div>
                    </div>

                    <div className='lg:col-span-4 lg:pl-12 pt-5 grid place-items-center'>
                        <img className='w-2/4 md:w-3/4 pt-10 lg:pt-0 lg:w-full' src={mobilePhone} alt="logo" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Hero;