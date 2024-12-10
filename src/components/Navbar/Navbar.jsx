import React from "react";
import logo from "../../../public/logo.png"

const Navabar = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="relative left-20 top-8 logo">
                    <a href="/">
                        <img src={logo} className="block h-24 w-auto" />
                    </a>
                </div>
                <div className="relative top-8 right-28 menu">
                    <ul className="flex space-x-24 text-base font-medium text-primary_3 list-none">
                        <a href="/"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-200">Home</li></a>
                        <a href="/facilities"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-200">Facilities</li></a>
                        <a href="/rooms"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-200">Rooms</li></a>
                        <a href="/contact-us"><li className="cursor-pointer hover:text-primary_2 ease-in-out duration-200">Contact Us</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Navabar;
