import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/yi.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/info");
  };

  return (
    <section
      className="min-h-[110vh] flex items-center justify-center text-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Основной контент */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10 px-4"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sisters' Sweets
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-['Cormorant_Garamond'] text-white/90 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Сделаем Ваш праздник по-настоящему <br className="hidden md:block" />
          сладким и незабываемым!
        </motion.p>

        <motion.div
          className="text-white text-lg italic font-['Cormorant_Garamond'] mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p>"Жизнь сладка, когда есть торты."</p>
        </motion.div>

        {/* Кнопка "Заказать" */}
        <motion.button
          onClick={handleOrderClick}
          className="relative bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-rose-300 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileTap={{ scale: 0.96 }}
        >
          Заказать
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0, originY: 0 }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
