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

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
      <h1 className="text-5xl font-['Playfair_Display'] text-rose-600 text-center mb-4 mt-11">
        Кенди-Бар
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Яркие и вкусные композиции для любого праздника 🎉
      </p>

      {/* Навигация */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        {/* Dropdown для мобилок */}
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
                  <li
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      navigate(`/candy/${tab.id}`);
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

        {/* Десктоп */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(`/candy/${tab.id}`);
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
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
