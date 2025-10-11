import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Card from "../Card";

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

  const images = [
    { src: "/src/assets/images/Gerlscuces/girlcuci1.webp", alt: "Торт №1" },
    { src: "/src/assets/images/Gerlscuces/girlcuci2.webp", alt: "Торт №2" },
    { src: "/src/assets/images/Gerlscuces/girlcuci3.webp", alt: "Торт №3" },
    { src: "/src/assets/images/Gerlscuces/girlcuci4.webp", alt: "Торт №4" },
    { src: "/src/assets/images/Gerlscuces/girlcuci5.webp", alt: "Торт №5" },
    { src: "/src/assets/images/Gerlscuces/girlcuci6.webp", alt: "Торт №6" },
    { src: "/src/assets/images/Gerlscuces/girlcuci7.webp", alt: "Торт №7" },
    { src: "/src/assets/images/Gerlscuces/girlcuci8.webp", alt: "Торт №8" },
    { src: "/src/assets/images/Gerlscuces/girlcuci9.webp", alt: "Торт №9" },
    { src: "/src/assets/images/Gerlscuces/girlcuci10.webp", alt: "Торт №10" },
    { src: "/src/assets/images/Gerlscuces/girlcuci11.webp", alt: "Торт №11" },
  ];

  return (
    <div className="py-8 px-4">
     
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "50px" }}
          >
            <Card
              imageSrc={image.src}
              alt={image.alt}
              onClick={(e) => handleImageClick(e, image)}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GirlsCakes;
