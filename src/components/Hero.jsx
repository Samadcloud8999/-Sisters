import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/logotip.PNG";
import { Cake, Coffee, Info, Phone } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/info");
  };

  const catalog = [
    {
      title: "Торты",
      icon: <Cake size={26} className="text-rose-500" />,
      link: "/cakes",
    },
    {
      title: "Кенди-Бар",
      icon: <Coffee size={26} className="text-yellow-500" />,
      link: "/candy",
    },
    {
      title: "Информация",
      icon: <Info size={26} className="text-blue-500" />,
      link: "/info",
    },
    {
      title: "Контакты",
      icon: <Phone size={26} className="text-green-500" />,
      link: "/contacts",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-4 sm:px-6 md:px-10 overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* затемнение фона */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        {/* Текст */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl text-white drop-shadow-lg"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Sisters' Sweets
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
            Сделаем Ваш праздник по-настоящему сладким и незабываемым!
          </p>

          <motion.button
            onClick={handleOrderClick}
            whileTap={{ scale: 100 }}
            className="bg-rose-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-rose-400 hover:shadow-rose-300 transition-transform duration-300 hover:scale-105"
          >
            Заказать
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
