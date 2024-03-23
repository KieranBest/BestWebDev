import React from "react";

export const Header = () => {
    return (
        <header className="font-poppins sticky top-0 z-50">
            <nav className="flex w-full flex-nowrap items-center justify-between bg-black h-[10vh]"
            data-twe-navbar-ref>
                <div className="flex w-full flex-wrap items-center px-3 text-white justify-evenly">
                    <a className="mr-2 hover:text-slate-500 hover:underline font-bold text-2xl" href="/">Home</a>
                    <a className="ml-2 hover:text-slate-500 hover:underline font-medium text-xl" href="/About">About</a>
                    <a className="hover:text-slate-500 hover:underline font-medium text-xl" href="/Contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};

