import "../../App.css";

import React, { useEffect } from "react";
import WAVES from 'vanta/src/vanta.waves'

export const Intro = () => {
    useEffect(() => {
        WAVES({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            shininess: 53.00,
            waveHeight: 20.50,
            waveSpeed: 0.55,
            zoom: 0.77
        })
    });
    return (
        <section className="font-poppins" id="vanta">
            <div className="flex h-[90vh] flex-col flex-1 items-center justify-center">
                <h1 className="mx-5 h-[40vh] text-6xl text-white animate-slidein opacity-0 [--slidein-delay:600ms]">About</h1>
            </div>
            <div className="flex h-[30vh] flex-col flex-1 items-center justify-center text-center my-1">
                <p className="m-5 text-md sm:text-2xl text-white">Working as a small team to enable bespoke customer service and a website that you can be proud of.</p>
                <p className="m-5 text-md sm:text-2xl text-white">Charging a minimal amount to ensure that you're business can thrive.</p>
            </div>
        </section>
    );
};
