import { useState } from "react";
import "../../App.css";
import { sendCustomEmail } from "./SendEmail";
import swal from "sweetalert2";

import styles from "./Form.module.css";

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
        <div className="container">
            <div className={styles.content}>
                <input 
                    name="from_name"
                    value={details.from_name}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    name="reply_to"
                    value={details.reply_to}
                    onChange={handleDetailsChange}
                    type="email"
                    placeholder="Email Address"
                />
                <textarea
                    name="message"
                    value={details.message}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Please enter your message"
                    
                />
                <button
                    onClick={handleSendEmail}
                    type=""
                >
                <span>Send Email</span>
                </button>
            </div>
        </div>
    );
};
