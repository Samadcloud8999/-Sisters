import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Card from "../Card";

const imagesImport = import.meta.glob("/src/assets/images/Gerlscuces/*.webp", {
  eager: true,
});

const girlsImages = Object.values(imagesImport).map(
  (mod) => mod.default || mod
);

const GirlsCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [clickPosition, setClickPosition] = useState(null);

  const handleImageClick = useCallback((e, image) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
    setSelectedImage(image.src);
  }, []);

  const images = girlsImages.map((src, index) => ({
    src,
    alt: `Торт №${index + 1}`,
  }));

  return (
    <div className="py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onClick={(e) => handleImageClick(e, image)}
          >
            <Card
              imageSrc={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GirlsCakes;
