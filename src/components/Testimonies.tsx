import React from 'react';
import whatTheySay from '../assets/whattheysay.png';
import one from '../assets/profiles/one.jpg';
import two from '../assets/profiles/two.jpg';
import three from '../assets/profiles/three.jpg';
import four from '../assets/profiles/four.jpg';

const Testimonies: React.FC = () => {
    return (
        <div className='mt-36'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>What They Say about our App</h1>
                    <p className='pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor
                    </p>

                    <div className='space-y-10 pt-14'>
                        <div className='flex space-x-5'>
                            <img src={one} className='w-20 h-20 rounded-md' alt="" />

                            <div className='space-y-2'>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                                    sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                                    purus non enim .
                                </p>
                                <div>
                                    <h1 className='font-bold text-sm tet-primary'>Mary Blaise</h1>
                                    <p className='text-xs'>Business Owner</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex space-x-5'>
                            <img src={two} className='w-20 h-20 rounded-md' alt="" />

                            <div className='space-y-2'>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                                    purus non enim .
                                </p>
                                <div>
                                    <h1 className='font-bold text-sm tet-primary'>Anton Becker</h1>
                                    <p className='text-xs'>Financial Analyst</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex space-x-5'>
                            <img src={three} className='w-20 h-20 rounded-md' alt="" />

                            <div className='space-y-2'>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                                    purus non enim .
                                </p>
                                <div>
                                    <h1 className='font-bold text-sm tet-primary'>Jenny Doe</h1>
                                    <p className='text-xs'>Travel Blogger</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex space-x-5'>
                            <img src={four} className='w-20 h-20 rounded-md' alt="" />

                            <div className='space-y-2'>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                                    amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
                                    purus non enim .
                                </p>
                                <div>
                                    <h1 className='font-bold text-sm tet-primary'>Mike Hikigami</h1>
                                    <p className='text-xs'>Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid place-items-center pt-28 lg:pt-0'>
                    <img src={whatTheySay} className='w-10/12 lg:w-7/12' alt="" />
                </div>
            </div>
        </div>

    );
 };

export default Testimonies;