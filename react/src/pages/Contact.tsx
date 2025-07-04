import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-50 min-h-screen">
      {/* Left Side */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get In Touch<span className="text-purple-600">.</span>
        </h2>
        <p className="text-lg text-gray-600 mt-6">
          Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
        </p>

        {/* Contact Info */}
        <div className="mt-10 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 border rounded-full">
              <Mail className="text-gray-700" />
            </div>
            <span className="text-gray-700 text-lg">info@purplefolio.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 border rounded-full">
              <Phone className="text-gray-700" />
            </div>
            <span className="text-gray-700 text-lg">+1 123 123 1234</span>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="mb-10 md:mb-0">
        <div className="relative w-72 h-72 rounded-full border border-purple-300 overflow-hidden">
          <img
            src="/your-image.jpg" // Replace with actual image path
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
