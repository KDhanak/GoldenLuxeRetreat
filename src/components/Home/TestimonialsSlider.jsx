import React, { useState } from "react";
import testimonials from './testimonials.json';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const TestimonialsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonial-slider flex flex-col items-center text-center p-4 space-y-4">
            <p className="text-primary_2 font-semibold text-2xl self-center">Testimonials</p>

            {/* Testimonial */}
            <div className="testimonial-item">
                <p className="text-base font-semibold text-primary_2">{testimonials[currentIndex].feedback}</p>
                <p className="text-sm text-primary_2">
                    - {testimonials[currentIndex].travellerName}, {testimonials[currentIndex].country}
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons flex space-x-4">
                <button
                    onClick={handlePrevious}
                    className="p-1 bg-primary_3 text-white rounded shadow-md active:text-primary_2 active:bg-primary_4 hover:bg-gray-800 ease-in-out duration-200"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="p-1 bg-primary_3 text-white rounded shadow-md active:text-primary_2 active:bg-primary_4 hover:bg-gray-800 ease-in-out duration-200"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
