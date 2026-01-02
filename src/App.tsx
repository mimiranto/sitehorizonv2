import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react'; // On importe les icônes ici aussi

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './i18n/config';

function App() {
  // --- 1. LOGIQUE DU THÈME (Déplacée ici pour être partagée) ---
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  // -----------------------------------------------------------

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors overflow-x-hidden relative">
      
      {/* On passe le thème et la fonction à la Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-24">
        <Routes>
          {/* ACCUEIL */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Team />
              <Appointment />
            </>
          } />

          {/* PAGE 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* === VOTRE BOUTON FLOTTANT MOBILE (EN BAS À DROITE) === */}
      {/* Il est visible uniquement sur mobile (md:hidden) */}
      <button
        onClick={toggleTheme}
        className="md:hidden fixed bottom-6 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition-all duration-300"
        aria-label="Changer le thème"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Sun className={`w-6 h-6 absolute transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
          <Moon className={`w-6 h-6 absolute transition-all duration-500 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
        </div>
      </button>

    </div>
  );
}

export default App;