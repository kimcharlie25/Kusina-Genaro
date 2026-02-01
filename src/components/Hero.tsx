import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-6 animate-fade-in">
          Authentic Taiwanese Dimsum
          <span className="block text-primary mt-2">ClickEats</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
          Timeless Taiwanese Flavors, Freshly Made
        </p>
        <div className="flex justify-center">

          <a
            href="#dim-sum"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;