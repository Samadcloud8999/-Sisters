import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import video1 from "../assets/videos/video1.mp4";

const VideoSlider = () => {
  const videos = [{ src: video1, alt: "Видео 1" }];

  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const videoRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % videos.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  const handleVideoEnd = () => {
    nextSlide();
  };

  // 🔳 Включение и выключение полноэкранного режима
  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const handleChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", handleChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  return (
    <section
      className={`relative py-16 sm:py-24 ${
        isFullscreen
          ? "bg-black"
          : "bg-gradient-to-b from-rose-50 via-white to-pink-50"
      } overflow-hidden`}
    >
      <div
        className={`relative mx-auto text-center ${
          isFullscreen ? "max-w-full" : "max-w-5xl px-3 sm:px-6"
        }`}
      >
        {/* Видео контейнер */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-xl ${
            isFullscreen ? "" : "aspect-video"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.video
              key={current}
              ref={videoRef}
              src={videos[current].src}
              controls
              playsInline
              autoPlay
              muted
              onEnded={handleVideoEnd}
              className={`w-full ${
                isFullscreen
                  ? "h-screen object-contain bg-black"
                  : "object-cover aspect-video"
              }`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* 🔘 Кнопка "весь экран" */}
          <button
            onClick={handleFullscreen}
            className={`absolute top-3 right-3 ${
              isFullscreen ? "bg-white/30" : "bg-white/70"
            } backdrop-blur-md hover:bg-sweet-pink hover:text-white text-sweet-pink p-2 sm:p-3 rounded-full shadow-md transition-all`}
          >
            {isFullscreen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>

          {/* ⬅️ Стрелка влево */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 ${
              isFullscreen ? "bg-white/20" : "bg-white/60"
            } hover:bg-sweet-pink hover:text-white text-sweet-pink backdrop-blur-md p-2 sm:p-3 rounded-full shadow-lg transition-all active:scale-95`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* ➡️ Стрелка вправо */}
          <button
            onClick={nextSlide}
            className={`absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 ${
              isFullscreen ? "bg-white/20" : "bg-white/60"
            } hover:bg-sweet-pink hover:text-white text-sweet-pink backdrop-blur-md p-2 sm:p-3 rounded-full shadow-lg transition-all active:scale-95`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* 🔘 Индикаторы под видео */}
        {!isFullscreen && (
          <div className="flex justify-center mt-5 space-x-2 sm:space-x-3">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-sweet-pink scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 💫 Фон */}
      {!isFullscreen && (
        <motion.div
          className="absolute -bottom-32 left-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-sweet-pink/10 blur-3xl rounded-full -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      )}
    </section>
  );
};

export default VideoSlider;
