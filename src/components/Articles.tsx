import React from 'react';

import fintechDynamics from '../assets/fintech-dynamics.jpeg';
import fintechSecurity from '../assets/fintech-security.jpeg';
import fintechSpeed from '../assets/fintech-speed.jpeg';

const Articles: React.FC = () => {
    return (
        <div className='mt-36'>
            <h1 className='font-extrabold text-3xl md:text-5xl'>Latest Articles</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16'>
                <div>
                    <img src={fintechDynamics} className='rounded-lg' alt="" />
                    <h1 className='font-bold text-2xl pt-5'>How Dynamic Fintech Products Adapt to User Needs</h1>
                    <h5 className='font-medium pt-3'>14 Feb • Technology</h5>
                    <p className='text-txtgray pt-3'>
                        Lorem ipsum dolor sit amet, consectetur adisquat adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                        lectus magna fringilla urna, porttitor rhoncus dolor purus non enim .
                    </p>

                    <button className='text-primary font-bold pt-6 hover:opacity-80'>
                        Explore More
                    </button>
                </div>
                
                <div>
                    <img src={fintechSecurity} className='rounded-lg' alt="" />
                    <h1 className='font-bold text-2xl pt-5'>Robust Security Measures in Modern Fintech Solutions</h1>
                    <h5 className='font-medium pt-3'>14 Feb • Technology</h5>
                    <p className='text-txtgray pt-3'>
                        Lorem ipsum dolor sit amet, consectetur adisquat adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                        lectus magna fringilla urna, porttitor rhoncus dolor purus non enim .
                    </p>

                    <button className='text-primary font-bold pt-6 hover:opacity-80'>
                        Explore More
                    </button>
                </div>


                <div>
                    <img src={fintechSpeed} className='rounded-lg' alt="" />
                    <h1 className='font-bold text-2xl pt-5'>The Speed Advantage of Contemporary Fintech Innovations</h1>
                    <h5 className='font-medium pt-3'>14 Feb • Technology</h5>
                    <p className='text-txtgray pt-3'>
                        Lorem ipsum dolor sit amet, consectetur adisquat adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                        lectus magna fringilla urna, porttitor rhoncus dolor purus non enim .
                    </p>

                    <button className='text-primary font-bold pt-6 hover:opacity-80'>
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
 };

export default Articles;