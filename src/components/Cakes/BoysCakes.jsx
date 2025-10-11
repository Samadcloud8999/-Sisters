import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";

const BoysCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/src/assets/images/Boyscuces/Boys1.webp", alt: "Торт для мальчиков №1" },
    { src: "/src/assets/images/Boyscuces/Boys2.webp", alt: "Торт для мальчиков №2" },
    { src: "/src/assets/images/Boyscuces/Boys3.webp", alt: "Торт для мальчиков №3" },
    { src: "/src/assets/images/Boyscuces/Boys4.webp", alt: "Торт для мальчиков №4" },
    { src: "/src/assets/images/Boyscuces/Boys5.webp", alt: "Торт для мальчиков №5" },
    { src: "/src/assets/images/Boyscuces/Boys6.webp", alt: "Торт для мальчиков №6" },
    { src: "/src/assets/images/Boyscuces/Boys7.webp", alt: "Торт для мальчиков №7" },
    { src: "/src/assets/images/Boyscuces/Boys8.webp", alt: "Торт для мальчиков №8" },
    { src: "/src/assets/images/Boyscuces/Boys9.webp", alt: "Торт для мальчиков №9" },
    { src: "/src/assets/images/Boyscuces/Boys10.webp", alt: "Торт для мальчиков №10" },
  ];

  return (
    <>
   
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card
              imageSrc={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BoysCakes;
