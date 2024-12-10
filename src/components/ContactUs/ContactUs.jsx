import React from "react";
import Hero from "../Hero/Hero"
import { Helmet } from "react-helmet";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="home" />
            </Helmet>
            <Hero />
            <div className="mx-[550px] flex flex-col my-14 space-y-7">
                <div className="flex flex-col">
                    <p className="text-primary_2 font-semibold text-2xl self-center">WE ARE HERE FOR YOU</p>
                    <p className="text-primary_2 font-normal">
                        At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                        please forward it to our support desk and we will get back to you as soon as possible.
                    </p>
                </div>
                <form className="flex flex-col space-y-10" onSubmit={() => preventDefault()}>
                    <div className="flex flex-col space-y-6 items-center">
                        <label className="w-full max-w-sm flex flex-col items-start text-primary_3 text-sm font-medium">
                            Name
                            <input
                                type="text"
                                className="w-full h-10 rounded-md text-center text-base bg-transparent border-2 border-primary_2 mt-1"
                                placeholder="Enter your name"
                            />
                        </label>

                        <label className="w-full max-w-sm flex flex-col items-start text-primary_3 text-sm font-medium">
                            Email
                            <input
                                type="email"
                                className="w-full h-10 rounded-md text-center text-base bg-transparent border-2 border-primary_2 mt-1"
                                placeholder="Enter your email"
                            />
                        </label>

                        <label className="w-full max-w-sm flex flex-col items-start text-primary_3 text-sm font-medium">
                            Message
                            <textarea
                                className="w-full h-24 rounded-md placeholder:text-center text-base bg-transparent border-2 border-primary_2 mt-1 resize-none"
                                placeholder="Enter your message"
                            />
                        </label>
                    </div>
                    <button onClick={() => preventDefault()} className="self-center border-primary_3 bg-primary_3 w-1/3 h-10 rounded-md hover:bg-primary_2 active:bg-primary_4 active:text-primary_2 ease-in-out duration-300">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;
