import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import FullscreenGallery from "../FullscreenGallery";

const imagesImport = import.meta.glob("/src/assets/images/Svadibcucis/*.webp", {
  eager: true,
});
const weddingImages = Object.values(imagesImport).map(
  (mod) => mod.default || mod
);

const WeddingCakes = () => {
  const images = weddingImages.map((src, index) => ({
    src,
    alt: `Свадебный торт №${index + 1}`,
  }));

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

export default WeddingCakes;
