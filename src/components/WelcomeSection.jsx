import { motion } from "framer-motion";
import { Cake, Coffee, Heart, Phone } from "lucide-react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

const WelcomeSection = () => (
  <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 via-white to-pink-50 overflow-hidden">
    {/* Декоративные blur */}
    <motion.div
      className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl -translate-x-1/2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.div
      className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-rose-200/20 rounded-full blur-2xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Заголовок */}
      <motion.div
        className="text-center mb-16 px-4"
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-rose-500 mb-4 leading-tight">
          Добро пожаловать в Sisters' Sweets 🍰
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
          Мы создаём сладкие шедевры с любовью, превращая каждый праздник в
          незабываемое событие.
        </p>
      </motion.div>

      {/* Карточки с иконками */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-4"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <Cake className="text-rose-500 w-10 h-10 mx-auto" />,
            title: "Красочное место",
            text: "Атмосфера уюта, нежные ароматы и десерты, созданные с душой — всё, чтобы вы чувствовали себя счастливыми.",
          },
          {
            icon: <Coffee className="text-rose-500 w-10 h-10 mx-auto" />,
            title: "Попробуйте сладости",
            text: "Вкуснейшие десерты, крема и фрукты, которые подарят вам момент наслаждения и радости.",
          },
          {
            icon: <Heart className="text-rose-500 w-10 h-10 mx-auto" />,
            title: "С любовью к каждому",
            text: "Каждый десерт создаётся вручную и с любовью, чтобы подарить вам не просто вкус, а эмоции.",
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          >
            {card.icon}
            <h3 className="text-xl sm:text-2xl font-semibold text-rose-500 mb-2 mt-4 text-center">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-800 text-center">
              {card.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WelcomeSection;
