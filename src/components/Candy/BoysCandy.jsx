import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import FullscreenGallery from "../FullscreenGallery";

// Импорт изображений
import image1 from "../../assets/images/Kendyboys/kendyboy1.webp";
import image2 from "../../assets/images/Kendyboys/kendyboy2.webp";
import image3 from "../../assets/images/Kendyboys/kendyboy3.webp";
import image4 from "../../assets/images/Kendyboys/kendyboy4.webp";
import image5 from "../../assets/images/Kendyboys/kendyboy5.webp";
import image6 from "../../assets/images/Kendyboys/kendyboy6.webp";
import image7 from "../../assets/images/Kendyboys/kendyboy7.webp";

const BoysCandy = () => {
  const images = [
    { src: image1, alt: "Кенди-бар для мальчиков №1" },
    { src: image2, alt: "Кенди-бар для мальчиков №2" },
    { src: image3, alt: "Кенди-бар для мальчиков №3" },
    { src: image4, alt: "Кенди-бар для мальчиков №4" },
    { src: image5, alt: "Кенди-бар для мальчиков №5" },
    { src: image6, alt: "Кенди-бар для мальчиков №6" },
    { src: image7, alt: "Кенди-бар для мальчиков №7" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              imageSrc={img.src}
              alt={img.alt}
              onClick={() => setSelectedIndex(i)}
            />
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
