import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

const VideoSlider = () => {
  const videos = [
    { src: video3, alt: "Видео 3" },
    { src: video1, alt: "Видео 1" },
    { src: video2, alt: "Видео 2" },
  ];

  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);

  const handleSlideChange = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => handleSlideChange((current + 1) % videos.length);
  const prevSlide = () =>
    handleSlideChange((current - 1 + videos.length) % videos.length);
  const handleVideoEnd = () => nextSlide();

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (!isFullscreen) {
        video.requestFullscreen?.() ||
          video.webkitRequestFullscreen?.() ||
          video.msRequestFullscreen?.();
      } else {
        document.exitFullscreen?.() ||
          document.webkitExitFullscreen?.() ||
          document.msExitFullscreen?.();
      }
      setIsFullscreen(!isFullscreen);
    } catch (error) {
      console.error("Ошибка полноэкранного режима:", error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-pink-100 via-rose-50 to-amber-50 overflow-hidden font-['Cormorant_Garamond']">
      {/* Декоративные шары */}
      <motion.div
        className="absolute top-[-100px] left-[10%] w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[15%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] font-semibold text-rose-600 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Вкусные моменты <span className="text-pink-500">в кадре</span> 
        </motion.h2>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-rose-100/60 bg-white/60 backdrop-blur-md aspect-video">
          <AnimatePresence mode="wait" initial={false}>
            <motion.video
              key={current}
              ref={videoRef}
              src={videos[current].src}
              className="w-full h-full object-cover rounded-3xl"
              controls
              playsInline
              autoPlay
              muted
              onEnded={handleVideoEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-rose-400 to-pink-400 text-white p-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-400 to-amber-400 text-white p-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Полноэкранный режим */}
          <button
            onClick={handleFullscreen}
            className="absolute top-3 right-3 bg-white/60 hover:bg-rose-100 text-rose-600 p-2 rounded-full shadow-md transition-all backdrop-blur-sm"
          >
            {isFullscreen ? (
              <X className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>

          {/* Декоративное “свечение” снизу */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-100/70 to-transparent" />
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center mt-6 gap-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-gradient-to-r from-rose-400 to-amber-400 scale-110 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
