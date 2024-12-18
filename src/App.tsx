import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './i18n/config';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors overflow-x-hidden relative">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <Team />
        <Appointment />
      </main>
      <Footer />
      <div className="md:hidden fixed bottom-6 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;