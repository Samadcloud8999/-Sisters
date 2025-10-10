import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Heart, Trophy, Star } from "lucide-react";

const CandyBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("mixed");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const tabs = [
    {
      id: "mixed",
      title: "Микс",
      icon: (
        <Star className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]" />
      ),
    },
    {
      id: "girls",
      title: "Для девочек",
      icon: (
        <Heart className="w-5 h-5 text-rose-500 drop-shadow-[0_0_6px_rgba(255,105,180,0.7)]" />
      ),
    },
    {
      id: "boys",
      title: "Для мальчиков",
      icon: (
        <Trophy className="w-5 h-5 text-blue-500 drop-shadow-[0_0_6px_rgba(100,180,255,0.7)]" />
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100 py-16 px-4 sm:px-8 relative overflow-hidden min-h-screen pb-32">
      {/* Заголовок */}
      <motion.h1
        className="text-center text-5xl font-['Playfair_Display'] text-rose-600 mb-3 mt-11 drop-shadow-[0_2px_10px_rgba(255,0,120,0.3)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Кенди-Бар
      </motion.h1>

      <p className="text-center text-lg text-gray-700 mb-10">
        Яркие и вкусные композиции для любого праздника 🎉
      </p>

      {/* Навигация */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        {/* Мобильный dropdown */}
        <div className="sm:hidden relative w-full max-w-md">
          <button
            className="w-full flex justify-between items-center bg-white/90 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg font-semibold text-gray-800 hover:bg-pink-100 transition"
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
                className="absolute z-20 w-full mt-2 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
              >
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      navigate(`/candy/${tab.id}`);
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
              onClick={() => {
                setActiveTab(tab.id);
                navigate(`/candy/${tab.id}`);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-7 py-3 rounded-full font-semibold shadow-md flex items-center gap-2 transition-all duration-300 ${
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
          key={location.pathname}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,150,200,0.3)] p-6 sm:p-10 border border-rose-100 max-w-6xl mx-auto"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default CandyBar;
