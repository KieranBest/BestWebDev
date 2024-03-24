import "../../App.css";

import React, { useEffect } from "react";
import RINGS from 'vanta/src/vanta.rings'

export const Intro = () => {
    useEffect(() => {
        RINGS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color: 0xffffff
        });
    }, []);
    return (
        <section className="font-poppins" id="vanta">
            <div className="flex h-[90vh] items-center justify-center">
                <h1 className="mx-5 h-[40vh] text-6xl text-white text-center animate-slidein opacity-0 [--slidein-delay:600ms]">Page Not Found</h1>
            </div>
        </section>
    );
};
