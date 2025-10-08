import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const CandyBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("mixed");

  const tabs = [
    { id: "mixed", title: "Микс" },
    { id: "girls", title: "Для девочек" },
    { id: "boys", title: "Для мальчиков" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    navigate(`/candy/${tabId}`);
  };

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
      <h1 className="text-4xl font-bold text-sweet-pink text-center mb-12">
        Кенди-бар
      </h1>

      {/* Кнопки табов */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-5 sm:px-7 py-2 sm:py-3 whitespace-nowrap rounded-full font-semibold shadow-md transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-rose-500 text-white shadow-rose-300"
                : "bg-white/80 text-gray-700 hover:bg-rose-100 hover:text-rose-600"
            }`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>

      {/* Контент таба */}
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
