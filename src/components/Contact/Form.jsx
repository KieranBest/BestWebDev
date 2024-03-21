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
            swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Message is required!",
            });
            sendEmail();
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
        <form ref={form} onSubmit={checkValidation} className="font-poppins">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    );
};