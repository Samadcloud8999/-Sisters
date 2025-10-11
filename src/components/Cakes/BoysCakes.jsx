import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";

const imagesImport = import.meta.glob("/src/assets/images/Boyscuces/*.webp", {
  eager: true,
});

const boysImages = Object.values(imagesImport).map((mod) => mod.default || mod);

const BoysCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = boysImages.map((src, index) => ({
    src,
    alt: `Торт для мальчиков №${index + 1}`,
  }));

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(image.src)}
          >
            <Card
              imageSrc={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoysCakes;
