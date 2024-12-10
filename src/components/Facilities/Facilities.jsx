import React from "react";
import Hero from "../Hero/Hero"
import gymImage from "../../../public/gym.jpg"
import poolsideBarImage from "../../../public/poolside-bar.jpg";
import spaImage from "../../../public/spa.jpg";
import swimmingPoolImage from "../../../public/swimming-pool.jpg";
import restaurantImage from "../../../public/restaurant.jpg";
import laundryImage from "../../../public/laundry.jpg";
import TestimonialsSlider from "../Home/TestimonialsSlider";

const Facilities = () => {
    return (
        <div className="flex flex-col font-serif">
            <Hero />
            <div className="mx-[550px] flex flex-col my-14 space-y-7">
                <div className="flex flex-col">
                    <p className="text-primary_2 font-semibold text-2xl self-center">Facilities</p>
                    <p className="text-primary_2 font-normal">
                        We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                        and our modern luxury resort facilities will help you enjoy the best of all.
                    </p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={gymImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">THE GYM</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={poolsideBarImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">POOLSIDE BAR</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={spaImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">THE SPA</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={swimmingPoolImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">SWIMMING POOL</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={restaurantImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">RESTAURANT</p>
                </div>
                <div className="h-[500px] flex flex-col">
                    <img src={laundryImage} className="h-[500px] w-full" />
                    <p className="text-primary_2 w-64 h-10 border border-b-0 border-t-primary_3 border-l-primary_3 border-r-primary_3 bg-white font-semibold text-xl self-center items-center text-center -mt-9">LAUNDRY</p>
                </div>
            </div>
            <TestimonialsSlider />
        </div>
    )
}

export default Facilities;
