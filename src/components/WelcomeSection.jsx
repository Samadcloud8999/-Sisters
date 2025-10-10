import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cake, Coffee, Heart } from "lucide-react";
import { useEffect } from "react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

const WelcomeSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 via-white to-pink-50 overflow-hidden font-['Cormorant_Garamond']">
      {/* Фон */}
      <motion.div
        className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-3xl -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-2xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeIn(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-['Playfair_Display'] font-semibold text-gray-800 mb-6 leading-tight">
            Авторская кондитерская{" "}
            <span className="text-rose-500">Sisters’ Sweets</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            100% натуральные и эксклюзивные торты. Заказ минимум за 3 дня — 10
            лет на рынке.
          </p>

          <a
            href="https://wa.me/996555222258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gradient-to-r from-rose-500 to-pink-400 text-white font-medium px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Связаться в WhatsApp
          </a>
        </motion.div>

 
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10"
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              id: 1,
              icon: <Cake className="text-rose-500 w-14 h-14 mb-4" />,
              title: "Торты",
              route: "/cakes",
              text: "Посмотреть коллекцию →",
            },
            {
              id: 2,
              icon: <Coffee className="text-amber-500 w-14 h-14 mb-4" />,
              title: "Кенди-Бар",
              route: "/candy",
              text: "Посмотреть сладости →",
            },
            {
              id: 3,
              icon: <Heart className="text-rose-500 w-14 h-14 mb-4" />,
              title: "Информация",
              route: "/info",
              text: "Узнать больше →",
            },
          ].map((item, i) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(item.route)}
              className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-8 border border-transparent hover:border-rose-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-['Playfair_Display']">
                {item.title}
              </h3>
              <p className="text-base text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
