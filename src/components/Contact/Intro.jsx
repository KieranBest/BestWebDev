import React from "react";

import "../../App.css";

export const Intro = () => {
    return (
        <section className="font-poppins">
            <div className="flex h-[90vh] flex-col flex-1 items-center justify-center bg-black">
                <h1 className="mx-5 h-[40vh] text-6xl text-white animate-slidein opacity-0 [--slidein-delay:600ms]">Contact.</h1>
            </div>
            <div className="flex h-[30vh] flex-col flex-1 items-center justify-center bg-black text-center">
                <p className="m-5 text-2xl text-white">So you wish to get in contact?</p>
                <p className="m-5 text-2xl text-white">Well, you've come to the right place.</p>
                <p className="m-5 text-2xl text-white">Fill out the form below and we'll get back to you as soon as we can.</p>
            </div>
        </section>
    );
};
