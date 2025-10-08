import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Heart, Trophy, Star } from "lucide-react";

const CandyBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("mixed");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    {
      id: "mixed",
      title: "Микс",
      icon: <Star className="w-5 h-5 text-yellow-500 mr-2" />,
    },
    {
      id: "girls",
      title: "Для девочек",
      icon: <Heart className="w-5 h-5 text-rose-500 mr-2" />,
    },
    {
      id: "boys",
      title: "Для мальчиков",
      icon: <Trophy className="w-5 h-5 text-blue-500 mr-2" />,
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    navigate(`/candy/${tabId}`);
    setDropdownOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-sweet-pink text-center mb-2 drop-shadow-sm">
        Кенди-бар
      </h1>

      {/* Подзаголовок */}
      <p className="text-center text-lg text-gray-600 mb-12">
        Яркие и вкусные композиции для любого праздника 🎉
      </p>

      {/* Навигация */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        {/* Мобильный dropdown */}
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
                    onClick={() => handleTabClick(tab.id)}
                    className="px-4 py-3 cursor-pointer text-gray-700 font-medium flex items-center gap-2 transition-colors"
                  >
                    {tab.icon} {tab.title}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Кнопки для десктопа */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 sm:px-7 py-2 sm:py-3 whitespace-nowrap rounded-full font-semibold shadow-md transition-all duration-300 flex items-center gap-2 ${
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

      {/* Контент */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <Outlet />
      </motion.div>
    </section>
  );
};

export default CandyBar;
