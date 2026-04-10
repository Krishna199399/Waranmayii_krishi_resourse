import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          Waranmayii
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <a href="/contact" className="hover:text-blue-600">Contact Us</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Register
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">

          <a href="/" className="block">Home</a>
          <a href="/about" className="block">About Us</a>
          <a href="/products" className="block">Products</a>
          <a href="/contact" className="block">Contact Us</a>

          <div className="flex gap-3 pt-2">
            <button className="w-full px-4 py-2 border rounded-lg">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}