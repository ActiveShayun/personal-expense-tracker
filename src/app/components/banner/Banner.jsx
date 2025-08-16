import React from 'react';

const Banner = () => {
    return (
        <div className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 py-20 px-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                Track Your Expenses Effortlessly
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-2xl">
                Manage all your expenses in one place, visualize your spending, and stay on top of your budget easily.
            </p>
            <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white/90 transition duration-300">
                Get Started
            </button>
        </div>

    );
};

export default Banner;