import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

// Импортируем видео
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
    if (isTransitioning) return; // Предотвращаем множественные нажатия
    setIsTransitioning(true);
    setCurrent(newIndex);
    setTimeout(() => setIsTransitioning(false), 300); // Уменьшили время анимации
  };

  const nextSlide = () => {
    const newIndex = (current + 1) % videos.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + videos.length) % videos.length;
    handleSlideChange(newIndex);
  };

  const handleVideoEnd = () => nextSlide();

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!isFullscreen) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    } catch (error) {
      console.error("Ошибка переключения полноэкранного режима:", error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <section className="relative py-8 sm:py-16 bg-gradient-to-b from-rose-50 via-white to-pink-50 overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
          <AnimatePresence mode="wait" initial={false}>
            <motion.video
              key={current}
              ref={videoRef}
              src={videos[current].src}
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              muted
              onEnded={handleVideoEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Уменьшили время анимации
            />
          </AnimatePresence>

          {/* Оптимизированные кнопки навигации */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all active:scale-95 touch-manipulation"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all active:scale-95 touch-manipulation"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={handleFullscreen}
            className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          >
            {isFullscreen ? (
              <X className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center mt-4 gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-sweet-pink w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
