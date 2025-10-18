// FullscreenSlider.jsx
import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
  }),
};

const FullscreenSlider = ({
  images,
  startIndex,
  isOpen,
  onClose,
  setIndex,
}) => {
  // images: [{src, alt}, ...]
  // startIndex: number initial
  // setIndex: function to change current index from parent (optional)
  const [current, setCurrent] = React.useState(startIndex || 0);
  const [direction, setDirection] = React.useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrent(startIndex || 0);
    }
  }, [isOpen, startIndex]);

  // Prev / Next helpers
  const prev = useCallback(() => {
    const nxt = (current - 1 + images.length) % images.length;
    setDirection(-1);
    setCurrent(nxt);
    if (setIndex) setIndex(nxt);
  }, [current, images.length, setIndex]);

  const next = useCallback(() => {
    const nxt = (current + 1) % images.length;
    setDirection(1);
    setCurrent(nxt);
    if (setIndex) setIndex(nxt);
  }, [current, images.length, setIndex]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen) return null;

  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* dark backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 rounded-full bg-black/40 p-2 hover:bg-black/60 transition"
              aria-label="Close"
            >
              <X size={24} color="white" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 z-20 hidden md:flex items-center justify-center rounded-full bg-black/40 p-2 hover:bg-black/60 transition"
              aria-label="Previous"
            >
              <ChevronLeft size={30} color="white" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 z-20 hidden md:flex items-center justify-center rounded-full bg-black/40 p-2 hover:bg-black/60 transition"
              aria-label="Next"
            >
              <ChevronRight size={30} color="white" />
            </button>

            {/* slide area */}
            <div className="max-w-5xl w-full h-full flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={current}
                  src={images[current].src}
                  alt={images[current].alt || `image-${current}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -100) {
                      setDirection(1);
                      setCurrent((c) => (c + 1) % images.length);
                      if (setIndex) setIndex((c) => (c + 1) % images.length);
                    } else if (swipe > 100) {
                      setDirection(-1);
                      setCurrent(
                        (c) => (c - 1 + images.length) % images.length
                      );
                      if (setIndex)
                        setIndex(
                          (c) => (c - 1 + images.length) % images.length
                        );
                    }
                  }}
                  className="max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {/* small footer controls: index and arrows for mobile */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="md:hidden rounded-full bg-black/40 p-2 hover:bg-black/60 transition"
                aria-label="Prev mobile"
              >
                <ChevronLeft size={20} color="white" />
              </button>

              <div className="text-white text-sm bg-black/30 px-3 py-1 rounded">
                {current + 1} / {images.length}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="md:hidden rounded-full bg-black/40 p-2 hover:bg-black/60 transition"
                aria-label="Next mobile"
              >
                <ChevronRight size={20} color="white" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenSlider;
