import React from "react";

import portfolios from '../../data/portfolios.json';

import { getImageUrl } from '../../utils';

export const Portfolios = () => {
    return (
        <section className="font-poppins">
            <div>
                <h1 className="m-5 text-5xl text-center">Portfolio</h1>
                <div className="flex flex-col items-center justify-center my-8">
                    {portfolios.map(item => (
                        <a href={item.source} target="_blank" key={item.id}>
                            <div class="mb-12 max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img class="rounded-t-lg" src={getImageUrl(item.imageSrc)} alt={item.title} />
                                <div class="p-5">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>    
            </div>
        </section>
    );
}