import React from "react";
import roomImage from "../../../public/room.jpg";
import beachImage from "../../../public/beach.jpg";
import TestimonialsSlider from "./TestimonialsSlider";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <>
            <div className="home flex flex-col font-serif">
                <Hero />
                <div className="flex flex-col mt-36 mx-96 space-y-36 mb-20">
                    <div className="flex items-center h-96 space-x-10">
                        <div className="my-4 h-full w-[1px] bg-primary_2"></div>
                        <div className="w-2/5 space-y-6">
                            <p className="text-primary_3 font-bold  text-2xl">Luxury Redefined</p>
                            <p className="text-primary_2 font-normal  text-lg">
                                Our rooms are designed to transport
                                you into an environment made for leisure.
                                Take your mind off the day-to-day of home
                                life and find a private paradise for yourself.
                            </p>
                            <button className="flex items-center space-x-3 bg-primary_3 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary_2 active:bg-primary_4 active:text-primary_2 transition duration-300">
                                Explore
                            </button>
                        </div>
                        <div className="w-3/5">
                            <img src={roomImage} className="h-96 w-full shadow-md" />
                        </div>
                    </div>
                    <div className="flex items-center h-96 space-x-10">
                        <div className="w-3/5">
                            <img src={beachImage} className="h-96 w-full shadow-md" />
                        </div>
                        <div className="w-2/5 space-y-6">
                            <p className="text-primary_3 font-bold  text-2xl">Leave your worries in the sand</p>
                            <p className="text-primary_2 font-normal  text-lg">
                                We love life at the beach. Being close
                                to the ocean with access to endless sandy
                                beach ensures a relaxed state of mind. It
                                seems like time stands still watching the
                                ocean.
                            </p>
                            <button className="flex items-center space-x-3 bg-primary_3 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary_2 active:bg-primary_4 active:text-primary_2 transition duration-300">
                                Explore
                            </button>
                        </div>
                        <div className="my-4 h-full w-[1px] bg-primary_2"></div>
                    </div>
                </div>
                <TestimonialsSlider />
            </div>
        </>
    )
};

export default Home;
