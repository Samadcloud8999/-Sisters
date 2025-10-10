import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Heart, Trophy, Gift, Coffee } from "lucide-react";

import GirlsCakes from "./Cakes/GirlsCakes";
import BoysCakes from "./Cakes/BoysCakes";
import AdultsCakes from "./Cakes/AdultsCakes";
import WeddingCakes from "./Cakes/WeddingCakes";

const Cakes = () => {
  const [activeTab, setActiveTab] = useState("girls");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const tabs = [
    {
      id: "girls",
      title: "Для девочек",
      icon: (
        <Heart className="w-5 h-5 text-pink-400 drop-shadow-[0_0_6px_rgba(255,105,180,0.7)]" />
      ),
      component: <GirlsCakes />,
    },
    {
      id: "boys",
      title: "Для мальчиков",
      icon: (
        <Trophy className="w-5 h-5 text-sky-400 drop-shadow-[0_0_6px_rgba(0,180,255,0.7)]" />
      ),
      component: <BoysCakes />,
    },
    {
      id: "adults",
      title: "Для взрослых",
      icon: (
        <Coffee className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(255,200,0,0.7)]" />
      ),
      component: <AdultsCakes />,
    },
    {
      id: "wedding",
      title: "Свадебные",
      icon: (
        <Gift className="w-5 h-5 text-violet-400 drop-shadow-[0_0_6px_rgba(186,85,211,0.7)]" />
      ),
      component: <WeddingCakes />,
    },
  ];

  const currentComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <section className="bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100 py-16 px-4 sm:px-8 relative overflow-hidden min-h-screen pb-32 font-['Cormorant_Garamond']">
      {/* Заголовок */}
      <motion.h2
        className="text-center text-5xl sm:text-6xl font-['Playfair_Display'] text-rose-600 mb-3 mt-11 drop-shadow-[0_2px_10px_rgba(255,0,120,0.3)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Наши Торты
      </motion.h2>

      <p className="text-center text-lg sm:text-xl text-gray-700 mb-10 font-light">
        Уникальные торты для любого праздника 🎂✨
      </p>

      {/* Навигация */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        {/* Мобильный dropdown */}
        <div className="sm:hidden relative w-full max-w-md">
          <button
            className="w-full flex justify-between items-center bg-white/90 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg font-semibold text-gray-800 hover:bg-pink-100 transition font-['Playfair_Display']"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="flex items-center gap-2">
              {tabs.find((tab) => tab.id === activeTab)?.icon}
              {tabs.find((tab) => tab.id === activeTab)?.title}
            </span>
            <ChevronDown
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute z-20 w-full mt-2 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden font-['Cormorant_Garamond']"
              >
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setDropdownOpen(false);
                    }}
                    className="px-5 py-3 cursor-pointer text-gray-700 font-medium flex items-center gap-2 hover:bg-gradient-to-r hover:from-pink-100 hover:to-violet-100 transition"
                  >
                    {tab.icon} {tab.title}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Десктоп кнопки */}
        <div className="hidden sm:flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-7 py-3 rounded-full font-semibold shadow-md flex items-center gap-2 transition-all duration-300 font-['Playfair_Display'] ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-rose-500 to-pink-400 text-white shadow-[0_0_15px_rgba(255,100,150,0.6)]"
                  : "bg-white/90 text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 hover:text-rose-600"
              }`}
            >
              {tab.icon} {tab.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Контент */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,150,200,0.3)] p-6 sm:p-10 border border-rose-100 font-['Cormorant_Garamond']"
        >
          {currentComponent}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Cakes;
