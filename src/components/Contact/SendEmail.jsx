import emailjs from "@emailjs/browser";
import swal from "sweetalert2";

const sendCustomEmail = (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_KEY);
    emailjs
    .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
        from_name: details.name,
        reply_to: details.email,
        message: details.message,
        }
    )
    .then((response) => {
        console.log(response);
        swal.fire({
            icon: 'success',
            title: 'Sent Successfully',
            animation: true,
            position: 'center',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        })
    })
    .catch((error) => {
        console.log(error);
        swal.fire({
            icon: 'error',
            title: 'Error Sending Message',
            animation: true,
            position: 'center',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        })
    });
};

export { sendCustomEmail };
