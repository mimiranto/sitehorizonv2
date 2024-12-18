import React from 'react';
import { Facebook, Instagram, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="transform scale-90 origin-center md:scale-100">
              <Logo />
            </div>
            <div className="w-full">
              <p className="text-center md:text-left text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                {t('footer.followUs')}
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                {t('footer.address')}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                
                <Phone className="w-5 h-5 mr-2" />
                <a href='tel:0744994596'>
                {t('footer.phone')}
               </a>
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-2" />
                <a href='mailto:makimagerie@outlook.fr'>
                {t('footer.email')}
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">{t('footer.hours')}</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="w-5 h-5 mr-2" />
                {t('footer.weekdays')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 ml-7">{t('footer.saturday')}</p>
              <p className="text-gray-600 dark:text-gray-300 ml-7">{t('footer.sunday')}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;