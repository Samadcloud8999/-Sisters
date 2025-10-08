import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Info = () => (
  <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-100 overflow-hidden">
    {/* 🌸 Decorative blur background */}
    <motion.div
      className="absolute -top-10 -right-10 w-72 h-72 bg-sweet-pink/20 rounded-full blur-3xl"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    />

    <div className="container mx-auto px-6 max-w-4xl relative z-10">
      <motion.h2
        className="text-5xl font-extrabold text-sweet-pink text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Как Заказать
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-6 text-center leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-semibold text-sweet-pink">Sisters' Sweets</span> —
        авторская кондитерская по изготовлению тортов и кенди-баров на заказ.
      </motion.p>

      <motion.p
        className="text-2xl font-semibold text-sweet-pink italic text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Сделаем Ваш праздник по-настоящему сладким и незабываемым!
      </motion.p>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Запускаем сразу при загрузке
      >
        {[
          {
            id: 1,
            title: "Написать нам",
            text: "По телефону +996 555 222 588 или Telegram @sisters_sweets_bishkek_direct. Обсудим торт, кенди-бар и детали заказа.",
            icon: <ArrowRight className="text-sweet-pink" />,
          },
          {
            id: 2,
            title: "Обсудить детали",
            text: "Уточним дату, количество гостей, тему, бюджет, размеры, начинку и т.д.",
            icon: <ArrowRight className="text-sweet-pink" />,
          },
          {
            id: 3,
            title: "Оплата",
            text: "Минимальный задаток 30% от суммы заказа. Тел: +996 555 222 588",
            icon: <ArrowRight className="text-sweet-pink" />,
          },
          {
            id: 4,
            title: "Кенди бар + торт",
            text: "Подготовим кенди-бар с декором, шариками, конфетами. Доставка по договорённости.",
            icon: <ArrowRight className="text-sweet-pink" />,
          },
          {
            id: 5,
            title: "Финал",
            text: "Получите готовый заказ! Доставка, сборка, фото-отчёт. Всё по договорённости с клиентом.",
            icon: <CheckCircle className="text-sweet-pink" />,
          },
        ].map(({ id, title, text, icon }) => (
          <motion.div
            key={id}
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-shrink-0 bg-sweet-pink text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-md">
              {id}
            </div>
            <div className="sm:ml-6 flex-1 mt-4 sm:mt-0">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
            <div className="ml-auto hidden sm:block">{icon}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Info;
