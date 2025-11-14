import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import FullscreenGallery from "../FullscreenGallery";

const imagesImport = import.meta.glob(
  "/src/assets/images/Kendyboys/*.webp",
  { eager: true }
);

const boysImages = Object.values(imagesImport).map(
  (mod) => mod.default || mod
);

const BoysCandy = () => {
  const images = boysImages.map((src, index) => ({
    src,
    alt: `Кенди-бар для мальчиков №${index + 1}`,
  }));

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => setSelectedIndex(i)}
          >
            <Card imageSrc={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
        <FullscreenGallery
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
};

export default BoysCandy;