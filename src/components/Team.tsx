import React from 'react';
import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">
          {t('team.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-12 h-12 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {t('team.doctor1.name')}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{t('team.doctor1.title')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('team.doctor1.description')}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-12 h-12 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {t('team.doctor2.name')}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{t('team.doctor2.title')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t('team.doctor2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;