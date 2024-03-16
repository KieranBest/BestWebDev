import React, { useState } from "react";
import emailjs from 'emailjs-com';

import "../../App.css";

import styles from "./Form.module.css";

export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "Bossman",
        };

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then((response) => {
            console.log('Email sent successfully!', response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.log(error.text);
        });
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className="emailForm">
                <input className={styles.input}
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input className={styles.input}
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea className={styles.input}
                    cols="30"
                    rows="10"
                    value={message}
                    placeholder="Enter your message here..."
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
};