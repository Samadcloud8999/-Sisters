import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

const FullscreenGallery = ({ images, selectedIndex, onClose }) => {
  const [current, setCurrent] = useState(selectedIndex || 0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  // управление клавиатурой
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);

  // свайпы
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  if (selectedIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
        >
          <X size={26} />
        </button>

        {/* Контейнер изображения со стрелками */}
        <div className="relative flex items-center justify-center">
          {/* Левая стрелка */}
          <button
            onClick={prev}
            className="absolute left-2 sm:-left-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition flex items-center justify-center"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Изображение */}
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}
            className="max-h-[85vh] w-auto max-w-[90vw] object-contain rounded-xl shadow-lg select-none"
            draggable={false}
          />

          {/* Правая стрелка */}
          <button
            onClick={next}
            className="absolute right-2 sm:-right-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition flex items-center justify-center"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Индикатор */}
        <div className="absolute bottom-16 text-white text-sm bg-black/40 px-3 py-1 rounded">
          {current + 1} / {images.length}
        </div>

        {/* Подсказка для мобильных */}
        <div className="absolute bottom-4 text-white text-xs opacity-80 sm:hidden flex items-center justify-center gap-2">
          <ChevronLeft size={16} className="opacity-60" />
          <span>Листайте или жмите стрелки</span>
          <ChevronRight size={16} className="opacity-60" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FullscreenGallery;
