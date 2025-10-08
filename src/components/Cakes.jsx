import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Heart, Trophy, Gift, Coffee } from "lucide-react";
import GirlsCakes from "./Cakes/GirlsCakes";
import BoysCakes from "./Cakes/BoysCakes";
import AdultsCakes from "./Cakes/AdultsCakes";
import WeddingCakes from "./Cakes/WeddingCakes";

const Cakes = () => {
  const [activeTab, setActiveTab] = useState("girls");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    {
      id: "girls",
      title: "Торты для девочек",
      icon: <Heart className="inline-block w-5 h-5 mr-2 text-rose-500" />,
      component: <GirlsCakes />,
    },
    {
      id: "boys",
      title: "Торты для мальчиков",
      icon: <Trophy className="inline-block w-5 h-5 mr-2 text-blue-500" />,
      component: <BoysCakes />,
    },
    {
      id: "adults",
      title: "Торты для взрослых",
      icon: <Coffee className="inline-block w-5 h-5 mr-2 text-yellow-500" />,
      component: <AdultsCakes />,
    },
    {
      id: "wedding",
      title: "Свадебные торты",
      icon: <Gift className="inline-block w-5 h-5 mr-2 text-pink-500" />,
      component: <WeddingCakes />,
    },
  ];

  const currentComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-rose-50 py-16 px-4 sm:px-8">
      <motion.h2
        className="text-center text-3xl sm:text-5xl font-bold text-rose-600 mb-2 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Наши Торты
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-600 mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Уникальные торты для любого праздника и настроения 🎂✨
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <div className="sm:hidden relative w-full max-w-md">
          <button
            className="w-full flex justify-between items-center bg-white/90 px-4 py-3 rounded-full shadow-md font-semibold text-gray-700 hover:bg-rose-50 transition"
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
                className="absolute z-20 w-full mt-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                {tabs.map((tab) => (
                  <motion.li
                    key={tab.id}
                    whileHover={{ backgroundColor: "rgba(248, 113, 113, 0.1)" }}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-3 cursor-pointer text-gray-700 font-medium flex items-center gap-2 transition-colors"
                  >
                    {tab.icon} {tab.title}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden sm:flex overflow-x-auto justify-center gap-4 no-scrollbar">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 whitespace-nowrap rounded-full font-semibold shadow-md transition-all duration-300 text-sm sm:text-base flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-rose-500 text-white shadow-rose-300"
                  : "bg-white/80 text-gray-700 hover:bg-rose-100 hover:text-rose-600"
              }`}
            >
              {tab.icon} {tab.title}
            </motion.button>
          ))}
        </div>
      </div>

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
