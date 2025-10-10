import { useEffect } from "react";
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

const Info = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Написать нам",
      text: "Позвоните или напишите в Telegram/WhatsApp +996 555 222 258. Обсудим торт, кенди-бар и детали заказа.",
      icon: <ArrowRight className="text-rose-400 w-6 h-6" />,
    },
    {
      id: 2,
      title: "Обсудить детали",
      text: "Уточним дату, тему праздника, начинку, количество гостей и декор.",
      icon: <ArrowRight className="text-rose-400 w-6 h-6" />,
    },
    {
      id: 3,
      title: "Оплата",
      text: "Вносится предоплата 30% от суммы заказа. Остаток — при получении.",
      icon: <ArrowRight className="text-rose-400 w-6 h-6" />,
    },
    {
      id: 4,
      title: "Приготовление и доставка",
      text: "Мы создаём ваш заказ, декорируем и при необходимости доставляем.",
      icon: <ArrowRight className="text-rose-400 w-6 h-6" />,
    },
    {
      id: 5,
      title: "Готово!",
      text: "Вы получаете ваш торт и кенди-бар. Наслаждайтесь праздником!",
      icon: <CheckCircle className="text-rose-400 w-6 h-6" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100 py-20 px-4 sm:px-8 overflow-hidden font-['Cormorant_Garamond']">
      {/* Фоновые элементы */}
      <motion.div
        className="absolute -top-10 -right-10 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8 }}
      />

      {/* Контент */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-['Playfair_Display'] text-rose-600 mb-8 drop-shadow-[0_2px_10px_rgba(255,0,120,0.3)]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Как заказать
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-semibold text-rose-500 font-['Playfair_Display']">
            Sisters' Sweets
          </span>{" "}
          — авторская кондитерская, создающая уникальные торты и кенди-бары на
          заказ.
        </motion.p>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map(({ id, title, text, icon }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_30px_rgba(255,150,200,0.3)] border border-rose-100 hover:shadow-[0_0_30px_rgba(255,180,200,0.6)] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-gradient-to-r from-rose-500 to-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-md font-['Playfair_Display']">
                {id}
              </div>
              <div className="sm:ml-6 flex-1 mt-4 sm:mt-0 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 font-['Playfair_Display']">
                  {title}
                </h3>
                <p className="text-gray-600">{text}</p>
              </div>
              <div className="ml-auto mt-4 sm:mt-0">{icon}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
