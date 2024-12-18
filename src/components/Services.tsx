import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.radiology.title'),
      description: t('services.radiology.description'),
      image: 'src/public/Asset/radio.jpg'
    },
    {
      title: t('services.ultrasound.title'),
      description: t('services.ultrasound.description'),
      image: 'src/public/Asset/mammo.jpg'
    },
    {
      title: t('services.mammography.title'),
      description: t('services.mammography.description'),
      image: 'src/public/Asset/Echo.jpg'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('services.title')}
        </h2>
        
        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-49 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view with Swiper */}
        <div className="md:hidden flex justify-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="w-[200px] h-[575px]"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="rounded-xl overflow-hidden">
                <div className="bg-white dark:bg-gray-800 h-full">
                  <img src={service.image} alt={service.title} className="w-full h-49 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;