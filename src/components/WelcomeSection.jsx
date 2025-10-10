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
    <section className="relative py-24 px-6 sm:px-8 bg-gradient-to-b from-pink-100 via-rose-50 to-amber-50 overflow-hidden font-['Cormorant_Garamond']">
      {/* Фоновые сладкие шары */}
      <motion.div
        className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-rose-200/30 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3 }}
      />

      {/* Декоративные “сахарные” волны */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-pink-200/60 to-transparent rounded-t-[50%] blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={fadeIn(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-['Playfair_Display'] font-bold text-rose-600 mb-6 drop-shadow-md">
            Добро пожаловать в{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Sisters’ Sweets
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            Искусство сладостей — 100% натуральные ингредиенты, эксклюзивный
            дизайн и нежный вкус. Уже 10 лет создаём торт мечты!
          </p>

          <motion.a
            href="https://wa.me/996555222258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            Связаться в WhatsApp 🍰
          </motion.a>
        </motion.div>

        {/* Карточки */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12"
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              id: 1,
              icon: <Cake className="text-rose-500 w-14 h-14 mb-3" />,
              title: "Торты",
              route: "/cakes",
              text: "Посмотреть коллекцию →",
              bg: "from-pink-100 to-rose-50",
            },
            {
              id: 2,
              icon: <Coffee className="text-amber-500 w-14 h-14 mb-3" />,
              title: "Кенди-Бар",
              route: "/candy",
              text: "Посмотреть сладости →",
              bg: "from-amber-100 to-pink-50",
            },
            {
              id: 3,
              icon: <Heart className="text-rose-400 w-14 h-14 mb-3" />,
              title: "Информация",
              route: "/info",
              text: "Узнать больше →",
              bg: "from-rose-100 to-amber-50",
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.06, rotate: 0.5 }}
              onClick={() => navigate(item.route)}
              className={`group bg-gradient-to-br ${item.bg} rounded-3xl p-8 shadow-md hover:shadow-xl border border-transparent hover:border-rose-200 transition-all duration-300 cursor-pointer flex flex-col items-center text-center backdrop-blur-md`}
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

      {/* Конфетти */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-20 bg-[url('/images/confetti.svg')] bg-repeat-x opacity-40"
        initial={{ backgroundPositionX: 0 }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default WelcomeSection;
