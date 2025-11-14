import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import FullscreenGallery from "../FullscreenGallery";

const imagesImport = import.meta.glob(
  "/src/assets/images/Kendymix/*.webp",
  { eager: true }
);

const mixedImages = Object.values(imagesImport).map(
  (mod) => mod.default || mod
);

const MixedCandy = () => {
  const images = mixedImages.map((src, index) => ({
    src,
    alt: `Кенди-бар разное №${index + 1}`,
  }));

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {images.map((image, i) => (
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
            <Card imageSrc={image.src} alt={image.alt} />
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

export default MixedCandy;