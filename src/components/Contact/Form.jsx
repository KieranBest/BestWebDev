import { useState } from "react";
import "../../App.css";

import { sendCustomEmail } from "./SendEmail";

export const Form = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleDetailsChange = (event) => {
        const { name, value } = event.target;

        setDetails((prevDetails) => {
            return {
            ...prevDetails,
            [name]: value,
            };
        });
    };

    const handleSendEmail = () => {
            sendCustomEmail(details);
    };

    return (
        <section className="font-poppins">
            <div className="flex flex-col items-center justify-center my-8">
                <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                name="name"
                                value={details.name}
                                onChange={handleDetailsChange}
                                type="name"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Email Address
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                name="email"
                                value={details.email}
                                onChange={handleDetailsChange}
                                type="email"
                                placeholder="John@Doe.co.uk"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Message
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 resize-none"
                                rows="4"
                                cols="50"
                                name="message"
                                value={details.message}
                                onChange={handleDetailsChange}
                                type="text"
                                placeholder="Please help me build a website for my local gardening business."
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                        <button className="shadow bg-black hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            onClick={handleSendEmail}
                            type=""
                            >
                            Submit
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
