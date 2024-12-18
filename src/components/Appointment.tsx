import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Appointment = () => {
  const { t } = useTranslation();

  return (
    <section id="appointment" className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">{t('appointment.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('appointment.description')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto transition-colors">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">{t('appointment.center')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{t('appointment.address')}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('appointment.phone')}</p>
              <p className="text-gray-600 dark:text-gray-300">{t('appointment.email')}</p>
            </div>

            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0596DE] text-white px-8 py-4 rounded-lg hover:bg-[#0477B2] transition-colors group"
            >
              <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold">{t('appointment.button')}</p>
                <img
                  src="https://www.bergonie.fr/wp-content/uploads/2021/10/logo-doctolib-blanc.png"
                  alt="Doctolib"
                  className="h-4 object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;