import React from "react";
import logo3 from "../assets/logo3.png"

const Footer: React.FC = () => {
    return (
        <div className="bg-primary mt-32 text-white py-20">
            <div className="container px-4 xl:mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-6 space-x-5">
                    <div className="lg:col-start-1 lg:col-end-3">
                        <img src={logo3} alt="logo" className="w-2/4"/>
                        {/* <h1 className="text-3xl"><span className="font-bold ">Coin</span> <span className="">Tech</span></h1> */}
                        <p className="text-sm pt-5">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>

                    <div className="pt-20 lg:pt-0 xl:col-start-4 xl:col-end-6">
                        <div className="grid grid-cols-1 space-y-10 space-x-0 lg:flex lg:grid-cols-4 xl:grid-flow-col xl:auto-cols-max lg:space-x-20 lg:space-y-0">
                            <div>
                                <h1 className="font-bold text-lg">Product</h1>
                                <ul className="pt-5 space-y-4">
                                    <li>Android Version</li>
                                    <li>iOS Version</li>
                                    <li>Web Service</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="font-bold text-lg">About</h1>
                                <ul className="pt-5 space-y-4">
                                    <li>Blog</li>
                                    <li>Newsletter Version</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="font-bold text-lg">Company</h1>
                                <ul className="pt-5 space-y-4">
                                    <li>Career</li>
                                    <li>FAQ</li>
                                    <li>Support</li>
                                    <li>Term of Service</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="font-bold text-lg">Social Media</h1>
                                <ul className="pt-5 space-y-4">
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="pt-20">
                    Built by Edward Joshua and Designed By Mahima Gupta. Copyright 2024
                </p>

            </div>
        </div>
    );
};


export default Footer;