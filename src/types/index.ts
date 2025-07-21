export type Language = 'en' | 'ru' | 'uz';

export type ThemeMode = 'light' | 'dark';

export interface CategoryData {
  id: string;
  title: {
    en: string;
    ru: string;
    uz: string;
  };
  description: {
    en: string;
    ru: string;
    uz: string;
  };
  imageUrl: string;
  tryNowLink: string;
}

export interface Translations {
  navHome: {
    en: string;
    ru: string;
    uz: string;
  };
  navAbout: {
    en: string;
    ru: string;
    uz: string;
  };
  navContact: {
    en: string;
    ru: string;
    uz: string;
  };
  heroTitle: {
    en: string;
    ru: string;
    uz: string;
  };
  heroSubtitle: {
    en: string;
    ru: string;
    uz: string;
  };
  tryNowButton: {
    en: string;
    ru: string;
    uz: string;
  };
  application: {
    en: string;
    ru: string;
    uz: string;
  };
  categoriesTitle: {
    en: string;
    ru: string;
    uz: string;
  };
  footerRights: {
    en: string;
    ru: string;
    uz: string;
  };
  followUs: {
    en: string;
    ru: string;
    uz: string;
  };
}