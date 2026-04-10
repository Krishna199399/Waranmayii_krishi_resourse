import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] px-6 py-12 text-center sm:px-10 lg:px-16">
        <h1 className="text-6xl font-semibold text-slate-900">Waranmayii</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">Empowering farming communities with modern tools, insights, and sustainable growth.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
