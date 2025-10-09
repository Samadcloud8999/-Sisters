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
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      component: <GirlsCakes />,
    },
    {
      id: "boys",
      title: "Для мальчиков",
      icon: <Trophy className="w-5 h-5 text-blue-500" />,
      component: <BoysCakes />,
    },
    {
      id: "adults",
      title: "Для взрослых",
      icon: <Coffee className="w-5 h-5 text-yellow-500" />,
      component: <AdultsCakes />,
    },
    {
      id: "wedding",
      title: "Свадебные",
      icon: <Gift className="w-5 h-5 text-pink-500" />,
      component: <WeddingCakes />,
    },
  ];

  const currentComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-rose-50 py-16 px-4 sm:px-8">
      <motion.h2
        className="text-center text-5xl font-['Playfair_Display'] text-rose-600 mb-3 mt-11"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Наши Торты
      </motion.h2>

      <p className="text-center text-lg text-gray-600 mb-10">
        Уникальные торты для любого праздника 🎂✨
      </p>

      {/* Навигация */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        {/* Мобильный dropdown */}
        <div className="sm:hidden relative w-full max-w-md">
          <button
            className="w-full flex justify-between items-center bg-white px-4 py-3 rounded-full shadow-md font-semibold text-gray-700 hover:bg-rose-50 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {tabs.find((tab) => tab.id === activeTab)?.icon}
            {tabs.find((tab) => tab.id === activeTab)?.title}
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
                className="absolute z-20 w-full mt-2 bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-3 cursor-pointer text-gray-700 font-medium flex items-center gap-2 hover:bg-rose-50"
                  >
                    {tab.icon} {tab.title}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Десктоп кнопки */}
        <div className="hidden sm:flex justify-center gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-3 rounded-full font-semibold shadow-md flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-rose-500 text-white shadow-rose-300"
                  : "bg-white text-gray-700 hover:bg-rose-100 hover:text-rose-600"
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
          transition={{ duration: 0.4 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-10"
        >
          {currentComponent}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Cakes;
