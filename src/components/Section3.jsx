import React from 'react';
import CardCarousel from './CardCarousel';

const Section3 = () => {
  return (
    <section className="relative px-4 md:mx-36 my-16">
      <div className="w-full text-center flex flex-col gap-3">
        <p className="text-sky-300 text-sm md:text-base">Our Features</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Made for You:</h1>
        <h1 className="text-2xl md:text-5xl font-medium text-gray-400">
          Easy, Fast, and Smart Payments
        </h1>
      </div>

      {/* Carousel below */}
      <div className="mt-10">
        <CardCarousel />
      </div>
    </section>
  );
};

export default Section3;
