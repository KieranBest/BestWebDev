import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_KEY);
    emailjs
    .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
        from_name: details.from_name,
        reply_to: details.reply_to,
        message: details.message,
        }
    )
    .then((response) => {
        console.log(response);
        details.from_name = "Name";
        details.reply_to = "Email Address";
        details.message = "Please enter your message";
    })
    .catch((error) => {
        console.log(error);
    });
};

export { sendCustomEmail };
