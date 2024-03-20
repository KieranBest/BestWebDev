import React from "react";

import portfolios from '../../data/portfolios.json';

import { getImageUrl } from '../../utils';

export const Portfolios = () => {
    return (
        <section className="font-poppins">
            <div>
                <h1 className="m-5 text-5xl text-center">Portfolio</h1>
                <div className="flex flex-col items-center justify-center my-8 lg:grid lg:grid-flow-row-dense lg:grid-cols-3 md:grid md:grid-flow-row-dense md:grid-cols-2">
                    {portfolios.map(item => (
                        <div key={item.id} className="mb-12 max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[45vh] mx-5">
                            <a href={item.source} target="_blank" className="text-black hover:text-slate-500">
                                <img className="rounded-t-lg" src={getImageUrl(item.imageSrc)} alt={item.title} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">{item.title}</h5>
                                    <p className="mb-3 font-normal text-center">{item.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>    
            </div>
        </section>
    );
}