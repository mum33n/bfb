import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className="w-screen min-h-screen py-5 px-2 md:px-10 bg-[#37ac2f] relative">
        <Navbar />
        <Hero />
        <footer className="text-center md:absolute md:left-0 md:bottom-0 md:py-3 text-xl text-white md:w-full">
          Copyright &copy; 2024
        </footer>
      </div>
    </>
  );
}

export default App;
