import "../../App.css";

import React, { useEffect } from "react";
import NET from 'vanta/src/vanta.net'

export const Intro = () => {
    useEffect(() => {
        NET({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,
            backgroundColor: 0x0,
            points: 11.00,
            maxDistance: 25.00,
            spacing: 14.00,
            showDots: false
        });
    }, []);
    return (
        <section className="font-poppins" id="vanta">
            <div className="flex h-[90vh] items-center justify-center">
                <h1 className="mx-5 h-[40vh] text-6xl text-white text-center animate-slidein opacity-0 [--slidein-delay:600ms]">Get a Website with <b>No Fuss</b>.</h1>
            </div>
            <div className="flex h-[30vh] items-center justify-center">
                <p className="mx-5 text-md sm:text-2xl text-white text-center leading-6 sm:leading-10">
                    Creating websites that are fast, secure, and easy to
                    manage. We specialize in websites for small businesses,
                    non-profits, and individuals.
                </p>
            </div>
        </section>
    );
};
