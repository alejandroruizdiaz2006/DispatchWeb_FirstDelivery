import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        homeTitle: 'DISPATCH',
        homeDescription:
          'Videojuego narrativo centrado en la gestión de emergencias y decisiones críticas.',
        charactersTitle: 'Personajes',
        contactTitle: 'Contacto',
        contactText:
          '¿Tienes alguna duda sobre Dispatch o este proyecto? Escríbenos.'
      }
    },
    en: {
      translation: {
        homeTitle: 'DISPATCH',
        homeDescription:
          'Narrative video game focused on emergency management and critical decisions.',
        charactersTitle: 'Characters',
        contactTitle: 'Contact',
        contactText:
          'Do you have any questions about Dispatch or this project? Contact us.'
      }
    }
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
