import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShield, faUser, faHeadset, faDoorOpen, faDesktop, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import advantageMobile from '../assets/advantage-mobile.png';


const Why: React.FC = () => {
    return (
        <div className='mt-16 md:mt-38 lg:mt-40'>
            <div className='grid place-items-center'>
                <h1 className='font-bold text-3xl md:text-5xl'>Why Choose Us</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12'>
                <div className="flex flex-col items-center justify-center text-center p-5">
                    <FontAwesomeIcon icon={faDoorOpen} className="bg-secondary text-3xl text-primary rounded-md p-5 mb-4" />
                    <h1 className="font-bold text-2xl mb-2">Be Radically Transparent</h1>
                    <p className="text-txtgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-5">
                    <FontAwesomeIcon icon={faMoneyBill1} className="bg-secondary text-3xl text-primary rounded-md p-5 mb-4" />
                    <h1 className="font-bold text-2xl mb-2">Charge as Little as Possible</h1>
                    <p className="text-txtgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-5">
                    <FontAwesomeIcon icon={faDesktop} className="bg-secondary text-3xl text-primary rounded-md p-5 mb-4" />
                    <h1 className="font-bold text-2xl mb-2">Support Payment From Every Platform</h1>
                    <p className="text-txtgray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 lg:mt-40'>
                <div className='grid place-items-center'>
                    <img src={advantageMobile} className='w-2/4' alt="" />
                </div>
                <div className='mt-16 lg:mt-30'>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>All Advantages in One </h1>
                    <p className='pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>

                    <div className='grid grid-rows-4 gap-y-10 pt-14'>
                        <div className='flex space-x-5'>
                            <FontAwesomeIcon icon={faBolt} className="bg-secondary text-3xl text-primary rounded-md p-[1.3rem] " />

                            <div className='grid-rows-2 gap-y-8'>
                                <h1 className='font-bold text-xl'>Fast</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        <div className='flex space-x-5'>
                            <FontAwesomeIcon icon={faShield} className="bg-secondary text-3xl text-primary rounded-md p-[1.3rem] " />

                            <div className='grid-rows-2 gap-y-8'>
                                <h1 className='font-bold text-xl'>Secure</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        <div className='flex space-x-5'>
                            <FontAwesomeIcon icon={faUser} className="bg-secondary text-3xl text-primary rounded-md p-[1.3rem] " />

                            <div className='grid-rows-2 gap-y-8'>
                                <h1 className='font-bold text-xl'>User Friendly</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        <div className='flex space-x-5'>
                            <FontAwesomeIcon icon={faHeadset} className="bg-secondary text-3xl text-primary rounded-md p-[1.3rem] " />

                            <div className='grid-rows-2 gap-y-8'>
                                <h1 className='font-bold text-xl'>24/7 Support</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;