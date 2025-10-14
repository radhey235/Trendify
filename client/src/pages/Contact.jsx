import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-amber-500 mb-8 border-b-2 border-gray-300 inline-block">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Store Info */}
        <div>
          <h2 className="text-2xl font-semibold text-amber-500 mb-4">Our Store</h2>
          <p className="text-gray-700 mb-2">54709 Willms Station, Suite 350</p>
          <p className="text-gray-700 mb-4">Washington, USA</p>
          <p className="text-gray-700 mb-2">Tel: (415) 555-0132</p>
          <p className="text-gray-700 mb-4">Email: <a href="mailto:admin@trendify.com" className="text-amber-500 hover:underline">admin@trendify.com</a></p>
        </div>

        {/* Careers Info */}
        <div>
          <h2 className="text-2xl font-semibold text-amber-500 mb-4">Careers at Trendify</h2>
          <p className="text-gray-700 mb-4">
            Join our dynamic team and help us redefine online shopping. Explore opportunities to grow with Trendify and make an impact every day.
          </p>
          <a
            href="/careers"
            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
