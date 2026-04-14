import React from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";
import contactImg from "../assets/contact.png";

function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-4 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-white text-3xl">Contact Us</p>
        <h2 className="text-3xl font-bold text-white">
          Feel <span className="text-orange-300">Free to Contact</span> <br />
          With Us
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
        {/* Mail */}
        {/* <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail className="text-blue-500" />
          </div>
          <div>
            <p className="text-blue-500 font-medium">Drop a line</p>
            <h3 className="font-semibold text-lg">Mail Us</h3>
            <p className="text-gray-500 text-sm">contact123@gmail.com</p>
          </div>
        </div> */}
        <div className="group bg-gradient-to-r from-green-600 via-white/40 to-green-700 
                shadow-md rounded-xl p-6 flex items-start gap-4 
                transition-all duration-200 
                hover:border hover:border-orange-400 
                hover:backdrop-blur-lg hover:bg-white/30">
            {/* Icon */}
            <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="text-orange-500" />
            </div>
            {/* Content */}
            <div>
                <p className="text-white font-medium">Drop a line</p>
                <h3 className="font-semibold text-lg text-white">Mail Us</h3>
                <p className="text-white text-sm">contact123@gmail.com</p>
            </div>
        </div>

        {/* Call */}
        <div className="group bg-gradient-to-r from-green-600 via-white/40 to-green-700 
                shadow-md rounded-xl p-6 flex items-start gap-4 
                transition-all duration-200 
                hover:border hover:border-orange-400 
                hover:backdrop-blur-lg hover:bg-white/30">
          <div className="bg-orange-100 p-3 rounded-full">
            <Phone className="text-orange-500" />
          </div>
          <div>
            <p className="text-white font-medium">24/7 Service</p>
            <h3 className="font-semibold text-lg text-white">Call Us</h3>
            <p className="text-white text-sm">+45357 29632 32621</p>
          </div>
        </div>

        {/* Location */}
        <div className="group bg-gradient-to-r from-green-600 via-white/40 to-green-700 
                shadow-md rounded-xl p-6 flex items-start gap-4 
                transition-all duration-200 
                hover:border hover:border-orange-400 
                hover:backdrop-blur-lg hover:bg-white/30">
          <div className="bg-orange-100 p-3 rounded-full">
            <MapPin className="text-orange-500" />
          </div>
          <div>
            <p className="text-white font-medium">Location</p>
            <h3 className="font-semibold text-lg text-white">Visit Us</h3>
            <p className="text-white text-sm">
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
            src={contactImg} // replace with your image
            alt="contact"
            className="w-full h-140"
          />
        </div>

        {/* Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Send your <span className="text-orange-300">Message To Us</span>
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-green-100 text-white rounded-lg p-3 w-full focus:outline-none 
                   focus:border-transparent focus:ring-1 focus:ring-orange-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-green-100 text-white rounded-lg p-3 w-full focus:outline-none 
                focus:border-transparent focus:ring-1 focus:ring-orange-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-green-100 text-white rounded-lg p-3 w-full focus:outline-none 
                    focus:border-transparent focus:ring-1 focus:ring-orange-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-green-100 text-white rounded-lg p-3 w-full focus:outline-none 
                focus:border-transparent focus:ring-1 focus:ring-orange-300"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message Here..."
             className="border border-green-100 text-white rounded-lg p-3 w-full focus:outline-none 
             focus:border-transparent focus:ring-1 focus:ring-orange-300"
              ></textarea>

            <button
              type="submit"
              className="  rounded-lg flex items-center gap-2 border border-green-100 px-8 py-3 
                text-base font-semibold text-orange-300  hover:bg-green-50 hover:text-green-600 hover:border-green-400 transition"
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
