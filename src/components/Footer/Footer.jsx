import React from "react";
import logoFooter from "../../../public/logo-without-icon.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-primary_2 flex flex-col py-10 px-96 font-serif">
                <div>
                    <img src={logoFooter} className="h-8 w-32 mb-2" />
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-1/4 text-primary_1 text-sm">
                        <p>123 Oceanview Drive,</p>
                        <p> Byron Bay, NSW 2481,</p>
                        <p>Australia</p>
                        <p>+61 408 123 456</p>
                        <p>info@goldenluxretreat.com.au</p>

                    </div>
                    <div className="flex flex-col w-1/4 text-primary_1 text-sm space-y-3">
                        <p>Facilities</p>
                        <p>Rooms</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="flex flex-col w-1/4 text-primary_1 text-sm space-y-3">
                        <div className="flex space-x-2 items-center">
                            <FaFacebookF />
                            <p>Facebook</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <FaXTwitter />
                            <p>Twitter</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <FaInstagram />
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 text-primary_1 text-sm space-y-3">
                        <p>Subscribe to our newsletter</p>
                        <div className="flex flex-row space-x-0">
                            <input type="text" className="w-56 h-10 rounded-l-md text-center text-base bg-transparent border-2 border-primary_3" placeholder="email" />
                            <button onClick={() => preventDefault()} className="border-t-2 border-r-2 border-b-2 border-primary_3 bg-primary_3 h-10 w-14 rounded-r-md hover:bg-primary_2 active:bg-primary_4 active:text-primary_2 ease-in-out duration-300">OK</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Footer;
