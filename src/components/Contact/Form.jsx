import { useState } from "react";
import "../../App.css";
import { sendCustomEmail } from "./SendEmail";
import swal from "sweetalert2";

export const Form = () => {
    const [details, setDetails] = useState({
        from_name: "",
        reply_to: "",
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
        if (emailValid() && nameValid() && messageValid()) {
            sendCustomEmail(details);
            resetFields();
        } else {
            runError();
        };
    };

    const resetFields = () => {
        setDetails({
            from_name: "",
            reply_to: "",
            message: "",
        });
    };

    let errorReason = '';

    const emailValid = () => {
        if (details.reply_to.includes('@') && details.reply_to.includes('.') || !details.reply_to === "") {
            return true;
        } else {
            errorReason = 'Your email is invalid. Please try again.';
            return false;
        };
    };

    const nameValid = () => {
        if (details.from_name.length > 0) {
            return true;
        } else {
            errorReason = 'Your name is invalid. Please try again.';
            return false;
        };
    };

    const messageValid = () => {
        if (details.message.length > 0) {
            return true;
        } else {
            errorReason = 'Your message is invalid. Please try again.';
            return false;
        };
    };

    const runError = () => {
        if(!emailValid() || !nameValid() || !messageValid()) {
            swal.fire({
                icon: 'error',
                title: errorReason,
                animation: true,
                position: 'center',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
            })
        };
    };

    return (
        <section className="font-poppins">
            <div className="flex flex-col items-center justify-center my-8">
                <form class="w-full max-w-sm">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Full Name
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                name="from_name"
                                value={details.from_name}
                                onChange={handleDetailsChange}
                                type="text"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Email Address
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                name="reply_to"
                                value={details.reply_to}
                                onChange={handleDetailsChange}
                                type="email"
                                placeholder="John@Doe.co.uk"
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Location
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                name="reply_to"
                                value={details.reply_to}
                                onChange={handleDetailsChange}
                                type="text"
                                placeholder="Maidstone, Kent"
                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Message
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 resize-none"
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
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                        <button class="shadow bg-black hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            onClick={handleSendEmail}
                            type="">
                            Sign Up
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
