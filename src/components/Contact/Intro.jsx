import "../../App.css";

import React, { useEffect } from "react";
import BIRDS from 'vanta/src/vanta.birds'

export const Intro = () => {
    useEffect(() => {
        BIRDS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color1: 0xffffff,
            color2: 0xffffff,
            birdSize: 0.60,
            speedLimit: 3.00,
            separation: 57.00,
            alignment: 47.00,
            cohesion: 94.00
        })
    });
    return (
        <section className="font-poppins" id="vanta">
            <div className="flex h-[90vh] flex-col flex-1 items-center justify-center">
                <h1 className="mx-5 h-[40vh] text-6xl text-white animate-slidein opacity-0 [--slidein-delay:600ms]">Contact.</h1>
            </div>
            <div className="flex h-[30vh] flex-col flex-1 items-center justify-center text-center">
                <p className="m-5 text-2xl text-white">So you wish to get in contact?</p>
                <p className="m-5 text-2xl text-white">Well, you've come to the right place.</p>
                <p className="m-5 text-2xl text-white">Fill out the form below and we'll get back to you as soon as we can.</p>
            </div>
        </section>
    );
};
