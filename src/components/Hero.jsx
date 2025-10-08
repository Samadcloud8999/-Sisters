import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/yi.jpg";
import { Cake, Coffee, Info, Phone } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/info");
  };

  const catalog = [
    {
      title: "Торты",
      icon: <Cake size={24} className="text-rose-500" />,
      link: "/cakes",
    },
    {
      title: "Кенди-Бар",
      icon: <Coffee size={24} className="text-yellow-500" />,
      link: "/candy",
    },
    {
      title: "Информация",
      icon: <Info size={24} className="text-blue-500" />,
      link: "/info",
    },
    {
      title: "Контакты",
      icon: <Phone size={24} className="text-green-500" />,
      link: "/contacts",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl z-10 px-4"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-4 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sisters' Sweets
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl font-['Cormorant_Garamond'] text-white/90 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Сделаем Ваш праздник по-настоящему сладким и незабываемым!
          </motion.p>

          <motion.div
            className="text-white text-lg italic font-['Cormorant_Garamond'] mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p>"Жизнь сладка, когда есть торты."</p>
          </motion.div>

          <motion.button
            onClick={handleOrderClick}
            className="relative bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-rose-300 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileTap={{ scale: 0.96 }}
          >
            Заказать
          </motion.button>
        </motion.div>
      </section>

      {/* Каталог */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Каталог
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {catalog.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(item.link)}
              >
                {item.icon}
                <span className="mt-4 font-semibold text-lg text-gray-700">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
