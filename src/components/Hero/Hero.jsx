import { BsCalendar2CheckFill } from "react-icons/bs";
import heroImage from "../../../public/hero-image.jpg";
import React from "react";

const Hero = () => {
    return (
        <div className="hero-panel">
            <img src={heroImage} className="h-[600px] w-full object-cover opacity-60 shadow-md" />
            <div className="absolute inset-0 h-fit w-fit top-[350px] left-[670px] flex flex-col items-center justify-center">
                <div className="mb-40 text-primary_2">
                    <p className="font-sans text-2xl font-semibold">WELCOME TO</p>
                    <p className=" text-3xl font-extrabold">GOLDEN LUX RETREAT</p>
                    <p className="font-sans text-lg">Book your stay and enjoy Luxury redefined at the most affordable rates.</p>
                </div>
                <button className="flex items-center space-x-3 bg-primary_3 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary_2 active:bg-primary_4 active:text-primary_2 transition duration-300">
                    <BsCalendar2CheckFill />
                    <span>Book Now</span>
                </button>
            </div>
        </div>
    )
};

export default Hero;
