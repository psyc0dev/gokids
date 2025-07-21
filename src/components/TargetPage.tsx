import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { formTexts } from '../data/formTexts';

const CHAT_IDS = {
  goTennis: '1793883770',     // Replace with your real chat ID for Tennis
  goKids: '5138952315',       // Replace with your real chat ID for Kids
  goSportsClub: '6252361244', // Replace with your real chat ID for Sports Club
};

// const CHAT_IDS = {
//   goTennis: '1793883770',     // Replace with your real chat ID for Tennis
//   goKids: '5138952315',       // Replace with your real chat ID for Kids
//   goSportsClub: '1022239785', // Replace with your real chat ID for Sports Club
// };

const TargetPage: React.FC = () => {
  const [formData, setFormData] = useState({
    city: '',
    course: '',
    age: '',
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phoneNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendTelegramMessage = async (message: string, chatId: string) => {
    const botToken = '7768996544:AAEIPv5V9R6Ymi4J0QZwD7oq6jULPiZc7zE';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  const getChatIdByCourse = (course: string): string => {
    const tennisCourses = ['tennis'];
    const kidsCourses = ['miniKindergarten', 'afterSchoolCare', 'chess', 'english', 'whyClub', 'camp'];
    const sportsCourses = ['karate', 'taekwondo', 'gymnastics', 'basketball', 'volleyball', 'wrestling', 'gym', 'fitness'];

    if (tennisCourses.includes(course)) return CHAT_IDS.goTennis;
    if (kidsCourses.includes(course)) return CHAT_IDS.goKids;
    if (sportsCourses.includes(course)) return CHAT_IDS.goSportsClub;

    return CHAT_IDS.goKids; // fallback
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validatePhoneNumber(formData.phone)) {
      alert(formTexts.phoneNumber[language] + ' ' + formTexts.invalid[language]);
      setIsSubmitting(false);
      return;
    }

    const isAdult = parseInt(formData.age) >= 18;
    const ageLabel = isAdult ? formTexts.adultAge[language] : formTexts.childAge[language];

    const formattedCity = formData.city === 'yes'
      ? formTexts.yes[language]
      : formData.city === 'no'
      ? formTexts.no[language]
      : '';

    const formattedCourse = formData.course ? formTexts[formData.course][language] : '';

    const message = `🆕 Новая заявка:
    
🏙️ ${formTexts.cityQuestion[language]} 
   Ответ: ${formattedCity}

🎯 ${formTexts.courseQuestion[language]} 
   Ответ: ${formattedCourse}

🎂 ${ageLabel} 
   Ответ: ${formData.age}

🧑 ${formTexts.yourName[language]} 
   Ответ: ${formData.name}

📞 ${formTexts.phoneNumber[language]} 
   Ответ: ${formData.phone}
    `;

    const chatId = getChatIdByCourse(formData.course);

    await sendTelegramMessage(message, chatId);

    setFormData({
      city: '',
      course: '',
      age: '',
      name: '',
      phone: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="request"
    >
    <div className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white dark:text-gray-200">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" />

      <div className="relative z-10 w-full max-w-4xl p-8 bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold mb-6">{translations.application[language]}</h1>
        <p className="text-lg mb-8">{translations.heroSubtitle[language]}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="city" className="block text-sm">{formTexts.cityQuestion[language]}</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">{formTexts.choose[language]}</option>
              <option value="yes">{formTexts.yes[language]}</option>
              <option value="no">{formTexts.no[language]}</option>
            </select>
          </div>

          <div>
            <label htmlFor="course" className="block text-sm">{formTexts.courseQuestion[language]}</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">{formTexts.selectCourse[language]}</option>

              {/* <optgroup label="🎾 GoTennis">
                <option value="tennis">{formTexts.tennis[language]}</option>
              </optgroup> */}

              <optgroup label="🧒 GoKids">
                <option value="miniKindergarten">{formTexts.miniKindergarten[language]}</option>
                <option value="afterSchoolCare">{formTexts.afterSchoolCare[language]}</option>
                <option value="chess">{formTexts.chess[language]}</option>
                <option value="english">{formTexts.english[language]}</option>
                <option value="whyClub">{formTexts.whyClub[language]}</option>
                <option value="camp">{formTexts.camp[language]}</option>
              </optgroup>

              {/* <optgroup label="🥋 GoSports Club">
                <option value="karate">{formTexts.karate[language]}</option>
                <option value="taekwondo">{formTexts.taekwondo[language]}</option>
                <option value="gymnastics">{formTexts.gymnastics[language]}</option>
                <option value="basketball">{formTexts.basketball[language]}</option>
                <option value="volleyball">{formTexts.volleyball[language]}</option>
                <option value="wrestling">{formTexts.wrestling[language]}</option>
                <option value="gym">{formTexts.gym[language]}</option>
                <option value="fitness">{formTexts.fitness[language]}</option>
              </optgroup> */}

            </select>
          </div>


          <div>
            <label htmlFor="age" className="block text-sm">{formTexts.childAge[language]}</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm">{formTexts.yourName[language]}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm">{formTexts.phoneNumber[language]}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-white text-black dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 px-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? formTexts.sending[language] : formTexts.tryNowButton[language]}
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default TargetPage;
