import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import swal from "sweetalert2";

export const Form = () => {
    const form = useRef();

    const checkValidation = (e) => {
        e.preventDefault();
        if (form.current.name.value === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Name is required!",
            });
            return false;
        } else if (form.current.email.value === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email is required!",
            });
            return false;
        } else if (form.current.message.value === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Message is required!",
            });
            return false;
        } else {
            sendEmail();
            form.current.reset();
            swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Message is required!",
            });
            return true;
        }
    }

    const sendEmail = () => {
        emailjs
        .sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID, 
            import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_EMAIL_USER_KEY,
        )
        .then(
            () => {
            console.log('Message Sent');
            },
            (error) => {
            console.log('Sending Failed', error.text);
            },
        );
    };

    return (
        <section className="font-poppins ">
            <div className="flex flex-col items-center justify-center my-8">
                <form ref={form} onSubmit={checkValidation} className=" w-10/12 max-w-xl">
                    <div className="sm:flex sm:items-center mb-6">
                        <div className="sm:w-1/3">
                            <label className="block text-black font-bold text-center sm:text-right mb-1 sm:mb-0 pr-4" htmlFor="name">
                                Name
                            </label>
                        </div>
                        <div className="sm:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                                type="text" 
                                name="name"
                                id="name"
                                autoComplete="given-name"
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center mb-6">
                        <div className="sm:w-1/3">
                            <label className="block text-black font-bold text-center sm:text-right mb-1 sm:mb-0 pr-4" htmlFor="email">
                                Email
                            </label>
                        </div>
                        <div className="sm:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                                type="email" 
                                name="email" 
                                id="email"
                                autoComplete="email"
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center mb-6">
                        <div className="sm:w-1/3">
                            <label className="block text-black font-bold text-center sm:text-right mb-1 sm:mb-0 pr-4" htmlFor="message">
                                Message
                            </label>
                        </div>
                        <div className="sm:w-2/3">
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black resize-none"
                                name="message"
                                id="message"
                                autoComplete='off'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="sm:w-1/3"></div>
                        <div className="flex flex-col items-center justify-center sm:w-2/3">
                            <input className="content-center shadow bg-black hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                value="Send" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};