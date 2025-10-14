import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12 border-t-2 border-gray-300">
      <div className="max-w-6xl mx-auto px-8 py-10 grid md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-amber-500 mb-4">About Trendify</h2>
          <p className="text-gray-600 text-sm">
            Trendify is your go-to online store for the latest fashion, tech, home essentials,
            and lifestyle products. We make shopping convenient, stylish, and reliable.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-bold text-amber-500 mb-4">Company</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="/" className="hover:text-amber-500">Home</a></li>
            <li><a href="/about" className="hover:text-amber-500">About Us</a></li>
            <li><a href="/delivery" className="hover:text-amber-500">Delivery</a></li>
            <li><a href="/privacy" className="hover:text-amber-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-amber-500 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-sm">Phone: +1-000-000-0000</p>
          <p className="text-gray-600 text-sm">Email: greatstackdev@gmail.com</p>
          <p className="text-gray-600 text-sm">Instagram: <a href="#" className="hover:text-amber-500">@trendify</a></p>
        </div>

        {/* Newsletter or Additional Info */}
        <div>
          <h2 className="text-xl font-bold text-amber-500 mb-4">Stay Updated</h2>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to our newsletter to get the latest updates, offers, and trends.
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-500 mb-2"
          />
          <button className="w-full bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 text-gray-600 text-center text-sm py-4 mt-6">
        © 2025 Trendify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
