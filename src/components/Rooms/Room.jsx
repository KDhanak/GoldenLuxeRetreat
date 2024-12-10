import React from "react";
import Hero from "../Hero/Hero"
import room1Image from "../../../public/room-1.jpg";
import room2Image from "../../../public/room-2.jpg";
import roomTwinsImage from "../../../public/room-twins.jpg";
import TestimonialsSlider from "../Home/TestimonialsSlider";
import { Helmet } from "react-helmet";

const Rooms = () => {
    return (
        <div className="flex flex-col font-serif">
            <Helmet>
                <title>Rooms</title>
                <meta name="description" content="home" />
            </Helmet>
            <Hero />
            <div className="mx-[550px] flex flex-col my-14 space-y-7">
                <div className="flex flex-col">
                    <p className="text-primary_2 font-semibold text-2xl self-center">ROOMS AND RATES</p>
                    <p className="text-primary_2 font-normal">
                        Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                        comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
                        by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
                    </p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={room1Image} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">SINGLE ROOM</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={room2Image} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">DOUBLE ROOM</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={roomTwinsImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">TWINS ROOM</p>
                </div>
            </div>
            <TestimonialsSlider />
        </div>
    )
}

export default Rooms;
