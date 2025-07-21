import { Translations, CategoryData } from '../types';

export const translations: Translations = {
  navHome: {
    en: 'Home',
    ru: 'Главная',
    uz: 'Asosiy',
  },
  navAbout: {
    en: 'About',
    ru: 'О нас',
    uz: 'Biz haqimizda',
  },
  navContact: {
    en: 'Contacts and Address',
    ru: 'Контакты и Адрес',
    uz: 'Kontaktlar va manzillar',
  },
  heroTitle: {
    en: 'Discover Our Services',
    ru: 'Откройте для себя наши услуги',
    uz: 'Xizmatlarimiz bilan tanishing',
  },
  heroSubtitle: {
    en: 'Experience excellence in sports, fitness, and education',
    ru: 'Испытайте совершенство в спорте, фитнесе и образовании',
    uz: 'Sport, fitness va ta\'limda mukammallikni his eting',
  },
  tryNowButton: {
    en: 'Sign up for a trial lesson',
    ru: 'Записаться на пробный урок',
    uz: 'Sinov darsiga yoziling',
  },
  application:{
    en: 'Leave a request',
    ru: 'Оставить заявку',
    uz: 'So\'rov qoldiring',
  },
  categoriesTitle: {
    en: 'Submit a Request',
    ru: 'Оставить заявку',
    uz: 'Ariza qoldirish',
  },  
  footerRights: {
    en: 'All rights reserved',
    ru: 'Все права защищены',
    uz: 'Barcha huquqlar himoyalangan',
  },
  followUs: {
    en: 'Follow us',
    ru: 'Подписывайтесь',
    uz: 'Bizni kuzating',
  },
};

export const categoriesData: CategoryData[] = [
  {
    id: 'tech-learning',
    title: {
      en: 'Technology & Innovation Lab',
      ru: 'Лаборатория Технологий и Инноваций',
      uz: 'Texnologiya va Innovatsiyalar Laboratoriyasi',
    },
    description: {
      en: 'Explore the future with hands-on STEM education, robotics, 3D printing, and coding bootcamps. Designed to spark curiosity and equip students with critical tech skills.',
      ru: 'Исследуйте будущее с практическим STEM-обучением, робототехникой, 3D-печатью и курсами программирования. Разработано для развития любознательности и освоения ключевых технологий.',
      uz: 'STEM ta\'limi, robototexnika, 3D chop etish va dasturlash kurslari orqali kelajakni o‘rganing. O‘quvchilarning texnik ko‘nikmalarini rivojlantirish uchun mo‘ljallangan.',
    },
    imageUrl: 'https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.jpg?s=612x612&w=0&k=20&c=y1fQ-3wbsvdDaMn-cuHPibcgozOxKQS99mIgz6DFcVA=',
    tryNowLink: 'https://t.me/techlabclub',
  },
  {
    id: 'language-hub',
    title: {
      en: 'Global Language Hub',
      ru: 'Центр Изучения Языков',
      uz: 'Xalqaro Til Markazi',
    },
    description: {
      en: 'Master new languages through immersive learning programs, native-speaker sessions, and interactive tools. Perfect for students preparing for global opportunities.',
      ru: 'Освойте новые языки с помощью погружных программ, занятий с носителями языка и интерактивных инструментов. Идеально подходит для подготовки к международным возможностям.',
      uz: 'Til o‘rganish dasturlari, ona tilida so‘zlovchilar bilan mashg‘ulotlar va interaktiv vositalar orqali yangi tillarni o‘rganing. Global imkoniyatlarga tayyorgarlik uchun ajoyib tanlov.',
    },
    imageUrl: 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/2/2022/10/%E6%8E%88%E6%A5%AD%E9%A2%A8%E6%99%AF-1.jpg',
    tryNowLink: 'https://t.me/languagehubuz',
  },
  {
    id: 'creative-academy',
    title: {
      en: 'Creative Arts Academy',
      ru: 'Академия Творческих Искусств',
      uz: 'Ijodiy San’at Akademiyasi',
    },
    description: {
      en: 'Develop your artistic talents in visual arts, music, theater, and digital media. Our curriculum encourages creativity, collaboration, and self-expression.',
      ru: 'Развивайте свои художественные таланты в области изобразительного искусства, музыки, театра и цифровых медиа. Наша программа поощряет творчество, сотрудничество и самовыражение.',
      uz: 'Tasviriy san’at, musiqa, teatr va raqamli media orqali san’at salohiyatingizni rivojlantiring. Dasturimiz ijodkorlik, hamkorlik va o‘zini ifodalashni rag‘batlantiradi.',
    },
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/6606c84f1cbdba4486745694/9babbdaf-50ad-4dfb-98ab-f4b9124c2a31/IMG_2038.JPG',
    tryNowLink: 'https://t.me/creativeacademyuz',
  },
];
// export const categoriesData: CategoryData[] = [
//   {
//     id: 'tennis',
//     title: {
//       en: 'Professional Tennis Academy',
//       ru: 'Профессиональная Теннисная Академия',
//       uz: 'Professional Tennis Akademiyasi',
//     },
//     description: {
//       en: 'Experience world-class tennis training at our state-of-the-art facility. Our program includes personalized coaching, advanced technique development, competitive training, and access to professional-grade courts. Perfect for beginners and aspiring professionals alike. Join our elite training programs, participate in tournaments, and learn from internationally certified coaches.',
//       ru: 'Испытайте теннисную подготовку мирового класса в нашем современном комплексе. Наша программа включает персональные тренировки, развитие продвинутой техники, соревновательную подготовку и доступ к профессиональным кортам. Присоединяйтесь к элитным программам подготовки, участвуйте в турнирах и учитесь у сертифицированных международных тренеров.',
//       uz: 'Zamonaviy majmuamizda jahon darajasidagi tennis mashg\'ulotlarini tajriba qiling. Bizning dasturimiz shaxsiy murabbiylik, ilg\'or texnikani rivojlantirish, musobaqa tayyorgarligi va professional kortlardan foydalanishni o\'z ichiga oladi. Elite tayyorgarlik dasturlariga qo\'shiling, musobaqalarda qatnashing va xalqaro sertifikatlangan murabbiylardan ta\'lim oling.',
//     },
//     imageUrl: 'https://www.bhf.org.uk/-/media/images/information-support/heart-matters/heart-matters/summer-2018/activity/tennis_racket_balls_ss_0618_noexp_620x400.jpg?rev=c18a71fbd05e4a91b4bbc40af01aafaa',
//     tryNowLink: 'https://t.me/Gotenniskidsbot',
//   },
//   {
//     id: 'gym',
//     title: {
//       en: 'Elite Fitness Center',
//       ru: 'Элитный Фитнес-Центр',
//       uz: 'Elite Fitness Markazi',
//     },
//     description: {
//       en: 'Transform your body and mind at our premium fitness facility. Featuring cutting-edge equipment, specialized training zones, and expert personal trainers. We offer comprehensive fitness assessments, customized workout plans, nutrition consulting, and group fitness classes. Experience our spa facilities, recovery rooms, and protein bar for complete wellness.',
//       ru: 'Преобразите свое тело и разум в нашем премиальном фитнес-центре. Современное оборудование, специализированные зоны тренировок и опытные персональные тренеры. Мы предлагаем комплексную оценку физической формы, индивидуальные планы тренировок, консультации по питанию и групповые занятия. Посетите наш спа-центр, комнаты восстановления и протеиновый бар.',
//       uz: 'Premium fitness markazimizda tanangiz va ongingizni o\'zgartiring. Zamonaviy uskunalar, maxsus mashg\'ulot zonalari va tajribali shaxsiy murabbiylar mavjud. Biz kompleks fitness baholash, individual mashg\'ulot rejasi, ovqatlanish bo\'yicha maslahatlar va guruh mashg\'ulotlarini taklif qilamiz. To\'liq salomatlik uchun spa, tiklanish xonalari va protein baridan foydalaning.',
//     },
//     imageUrl: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&fit=crop',
//     tryNowLink: 'https://t.me/Gosportclubuz',
//   },
//   {
//     id: 'learning',
//     title: {
//       en: 'Advanced Learning Center',
//       ru: 'Передовой Учебный Центр',
//       uz: 'Ilg\'or Ta\'lim Markazi',
//     },
//     description: {
//       en: 'Unlock your potential at our innovative learning center. We provide comprehensive educational programs, advanced technology labs, and expert mentorship. Features include interactive learning spaces, virtual reality classrooms, coding workshops, and language immersion programs. Small group sessions and one-on-one tutoring available for personalized learning experience.',
//       ru: 'Раскройте свой потенциал в нашем инновационном учебном центре. Мы предоставляем комплексные образовательные программы, современные технологические лаборатории и экспертное наставничество. Включает интерактивные учебные пространства, классы виртуальной реальности, мастер-классы по программированию и программы языкового погружения.',
//       uz: 'Innovatsion ta\'lim markazimizda o\'z salohiyatingizni ochib bering. Biz keng qamrovli ta\'lim dasturlari, ilg\'or texnologiya laboratoriyalari va ekspert murabbiylikni taqdim etamiz. Interaktiv o\'quv maydonlari, virtual reallik sinflari, dasturlash ustaxonalari va chet tili dasturlarini o\'z ichiga oladi. Shaxsiy ta\'lim tajribasi uchun kichik guruh va individual darslar mavjud.',
//     },
//     imageUrl: 'https://www.teachervision.com/sites/default/files/inline-images/learning%20center%20ideas.jpg',
//     tryNowLink: 'https://t.me/gokidsclub',
//   },
// ];