import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Nous n'avons plus besoin de l'icône Globe, mais je la laisse au cas où vous voudriez la remettre ailleurs
import { Globe } from 'lucide-react'; 

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'fr', name: 'Français', flag: 'fr' },
    { code: 'en', name: 'English', flag: 'gb' }
  ];

  // On trouve la langue active actuelle pour afficher le bon drapeau sur le bouton principal
  // Si jamais i18n ne trouve rien (ex: chargement), on prend le premier (Français) par défaut
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300
          border
          
          /* MODE CLAIR : Fond gris pâle, texte gris foncé */
          bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200
          
          /* MODE SOMBRE : Fond gris moyen, Texte BLANC, Bordure visible */
          dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
        "
        aria-label="Change language"
      >
        {/* REMPLACEMENT DU GLOBE PAR LE DRAPEAU ACTIF */}
        <img 
          src={`https://flagcdn.com/${currentLang.flag}.svg`} 
          alt={currentLang.name}
          className="w-5 h-4 object-cover rounded-sm shadow-sm"
        />
        
        <span className="text-sm font-medium hidden md:inline">
          {currentLang.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden transform origin-top-right transition-all duration-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                i18n.language === lang.code 
                  ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-white' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <img
                src={`https://flagcdn.com/${lang.flag}.svg`}
                alt={lang.name}
                className="w-5 h-4 mr-3 object-cover rounded-sm"
              />
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;