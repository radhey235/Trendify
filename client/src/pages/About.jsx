import React from 'react';

const About = () => {
  return (
    <div className="px-8 py-12 max-w-6xl mx-auto mt-8 border-2 border-amber-300 rounded-2xl shadow-md bg-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <img
          src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=800&q=80"
          alt="Trendify Store"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
        />

        {/* Right Side - Text */}
        <div>
          <h1 className="text-4xl font-bold text-amber-500 mb-4 border-b-2 border-gray-300 inline-block">
            About Trendify
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-amber-600">Trendify</span> — where style
            meets convenience. Our mission is to make online shopping seamless, exciting, and
            tailored to your unique taste.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Trendify offers a curated selection of the latest fashion, tech gadgets, home essentials,
            and lifestyle products — all sourced from trusted brands and innovative creators. Every
            product is chosen to inspire confidence and make life a little more stylish.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From browsing our collections to receiving your order, we ensure a smooth, secure, and
            enjoyable shopping experience. With Trendify, shopping isn’t just buying — it’s
            discovering something you’ll love, every time.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-amber-500 mb-4 border-b border-gray-300 inline-block">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At Trendify, our mission is to redefine online shopping. We blend style, technology, and
          trust to create an experience that delights every customer, every time.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We’re committed to authenticity, quality, and a customer-first approach. Whether you're
          upgrading your wardrobe, decorating your home, or exploring the latest tech, Trendify
          ensures that every purchase is simple, safe, and satisfying.
        </p>
      </div>
    </div>
  );
};

export default About;
