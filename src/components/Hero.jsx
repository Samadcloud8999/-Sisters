import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/videos/clipfly-ai-20251010210213.mp4";

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleOrderClick = () => {
    navigate("/info");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      const stopAt = 3;
      const checkTime = () => {
        if (video.currentTime >= stopAt) {
          video.pause();
          video.removeEventListener("timeupdate", checkTime);
        }
      };
      video.addEventListener("timeupdate", checkTime);
      return () => video.removeEventListener("timeupdate", checkTime);
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden text-center">
      {/* Видео фон */}
      <video
        ref={videoRef}
        src={videoBg}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
      />

      {/* затемнение фона */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Текст и кнопка */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Заголовок */}
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

        {/* Кнопка */}
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
