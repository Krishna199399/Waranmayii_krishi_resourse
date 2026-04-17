import React from 'react'




{/* ==================== Sidebar Component ==================== */}
import { Home, User, Package, BarChart3, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AdvisorSidebar() {
  return (
    <aside className="h-screen w-72 bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 left-10 h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 h-80 w-80 bg-lime-400/10 blur-3xl rounded-full" />

      {/* Logo */}
      <div className="relative px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-black tracking-wide">
          🌱 Waranamayii
        </h1>
      </div>

      {/* Navigation */}
      <nav className="relative mt-6 px-4 space-y-2">

        {/* Item */}
        <NavItem to="/dashboard" icon={<Home size={20} />} label="Dashboard" />
        <NavItem to="/about" icon={<User size={20} />} label="About" />
        <NavItem to="/products" icon={<Package size={20} />} label="Products" />
        <NavItem to="/analytics" icon={<BarChart3 size={20} />} label="Analytics" />
        <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />

      </nav>

      {/* Bottom Profile */}
      <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 backdrop-blur-md">
          <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">
            R
          </div>
          <div>
            <p className="text-sm font-semibold">Roy Rag</p>
            <p className="text-xs text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ==================== Nav Item ==================== */
function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
        ${
          isActive
            ? "bg-emerald-500/20 text-emerald-300 shadow-lg"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <span className="transition group-hover:scale-110">
        {icon}
      </span>
      <span className="font-medium tracking-wide">
        {label}
      </span>
    </NavLink>
  );
}