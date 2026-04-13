import React from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-500">Contact Us</p>
        <h2 className="text-3xl font-bold">
          Feel <span className="text-blue-500">Free to Contact</span> <br />
          With Us
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
        {/* Mail */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail className="text-blue-500" />
          </div>
          <div>
            <p className="text-blue-500 font-medium">Drop a line</p>
            <h3 className="font-semibold text-lg">Mail Us</h3>
            <p className="text-gray-500 text-sm">contact123@gmail.com</p>
          </div>
        </div>

        {/* Call */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Phone className="text-blue-500" />
          </div>
          <div>
            <p className="text-blue-500 font-medium">24/7 Service</p>
            <h3 className="font-semibold text-lg">Call Us</h3>
            <p className="text-gray-500 text-sm">+45357 29632 32621</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <MapPin className="text-blue-500" />
          </div>
          <div>
            <p className="text-blue-500 font-medium">Location</p>
            <h3 className="font-semibold text-lg">Visit Us</h3>
            <p className="text-gray-500 text-sm">
              158, ralegth sit, houston, yk 2446, uk
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src="/contact-illustration.png" // replace with your image
            alt="contact"
            className="w-full"
          />
        </div>

        {/* Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Send your <span className="text-blue-500">Message To Us</span>
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message Here..."
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
