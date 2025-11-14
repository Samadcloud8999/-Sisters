import React, { useState } from "react";
import ImageCard from "./ImageCard";
import FullscreenSlider from "./FullscreenSlider";
import { motion } from "framer-motion";



import b1 from "../../assets/images/Kendyboys/kendyboy1.webp";
import b2 from "../../assets/images/Kendyboys/kendyboy2.webp";
import g1 from "../../assets/images/Kendygerls/kendy1.webp";
import g2 from "../../assets/images/Kendygerls/kendy2.webp";
import m1 from "../../assets/images/Kendymix/IMG_0214.webp";
import m2 from "../../assets/images/Kendymix/IMG_0417.webp";

const Gallery = () => {
  const allImages = [
    { src: b1, alt: "Кенди мальчики 1" },
    { src: b2, alt: "Кенди мальчики 2" },
    { src: g1, alt: "Кенди девочки 1" },
    { src: g2, alt: "Кенди девочки 2" },
    { src: m1, alt: "Кенди mix 1" },
    { src: m2, alt: "Кенди mix 2" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openAt = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {allImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            viewport={{ once: true }}
          >
            <ImageCard
              src={img.src}
              alt={img.alt}
              onClick={() => openAt(idx)}
            />
          </motion.div>
        ))}
      </div>

      <FullscreenSlider
        images={allImages}
        startIndex={startIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIndex={(idx) => setStartIndex(idx)} 
      />
    </>
  );
};

export default Gallery;
