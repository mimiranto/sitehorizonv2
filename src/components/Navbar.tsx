import React, { useState } from 'react';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';

// On définit ce que la Navbar reçoit comme propriétés
interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* === NAVIGATION ORDINATEUR === */}
          <div className="hidden md:flex items-center space-x-6 ml-4">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.services')}</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.team')}</button>
            <button onClick={() => scrollToSection('appointment')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.appointment')}</button>
            
            <div className="flex items-center space-x-3">
              <a href="tel:0744994596" className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                <Phone className="w-4 h-4 mr-2" />
                {t('nav.phone')}
              </a>

              {/* Bouton Thème PC (Utilise les props de App.tsx) */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label="Changer le thème"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                   <Sun className={`w-5 h-5 absolute transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                   <Moon className={`w-5 h-5 absolute transition-all duration-500 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                </div>
              </button>

              <LanguageToggle />
            </div>
          </div>

          {/* === NAVIGATION MOBILE (Menu Hamburger uniquement) === */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3 z-50">
            
            {/* J'AI SUPPRIMÉ LE BOUTON THÈME ICI, CAR VOUS AVEZ CELUI DU BAS */}

            <LanguageToggle />
            
            <a href="tel:0176432168" className="p-2 sm:p-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md">
              <Phone className="w-5 h-5" />
            </a>
            
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 sm:p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300" aria-label="Menu">
              <div className="relative w-6 h-6">
                <Menu className={`absolute w-6 h-6 text-gray-700 dark:text-gray-200 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute w-6 h-6 text-gray-700 dark:text-gray-200 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Menu Déroulant Mobile */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-2 pb-2">
            <button onClick={() => scrollToSection('services')} className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">{t('nav.services')}</button>
            <button onClick={() => scrollToSection('team')} className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">{t('nav.team')}</button>
            <button onClick={() => scrollToSection('appointment')} className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">{t('nav.appointment')}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;