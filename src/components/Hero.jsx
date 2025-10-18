import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Импорт трёх фото (выбрал kendy1, kendy2, kendy3 — можешь поменять)
import kendy1 from "../assets/images/Kendygerls/kendy1.webp";
import kendy2 from "../assets/images/Kendygerls/kendy2.webp";
import kendy3 from "../assets/images/Kendygerls/kendy3.webp";

const Hero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  // Массив фото
  const images = [kendy1, kendy2, kendy3];

  // Автосмена изображений каждые 2 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleOrderClick = () => {
    navigate("/info");
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden text-center">
      {/* Слайд-шоу фон */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* затемнение фона */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Текст и кнопка */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-[0_0_25px_rgba(255,100,150,0.6)]"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "1px",
          }}
        >
          Sisters’ Sweets
        </motion.h1>

        <motion.button
          onClick={handleOrderClick}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-rose-300 transition-all duration-300 transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          Заказать
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
