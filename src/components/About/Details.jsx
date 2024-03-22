import React from "react";

export const Details = () => {
    return (
        <section className="font-poppins">
            <div>
            <h1 className="mt-9 text-xl sm:text-2xl text-black font-bold text-center">What's Included:</h1>
                <ul className="text-md sm:text-xl text-black mt-5 mb-8">
                    <li className="m-2 flex flex-col flex-1 items-center">A one off build</li>
                    <li className="m-2 flex flex-col flex-1 items-center">Monthly upkeep</li>
                    <li className="m-2 flex flex-col flex-1 items-center">Changes at your request</li>
                    <li className="m-2 flex flex-col flex-1 items-center">Website domain</li>
                    <li className="m-2 flex flex-col flex-1 items-center">Website hosting</li>
                    <li className="m-2 flex flex-col flex-1 items-center">Email hosting</li>
                    <li className="m-2 flex flex-col flex-1 items-center">SSL certificate</li>
                </ul>
            </div>
        </section>
    );
};
