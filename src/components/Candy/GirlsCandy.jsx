import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import FullscreenGallery from "../FullscreenGallery";

import image1 from "../../assets/images/Kendygerls/kendy1.webp";
import image2 from "../../assets/images/Kendygerls/kendy2.webp";
import image3 from "../../assets/images/Kendygerls/kendy3.webp";
import image4 from "../../assets/images/Kendygerls/kendy4.webp";
import image5 from "../../assets/images/Kendygerls/kendy5.webp";
import image6 from "../../assets/images/Kendygerls/kendy6.webp";
import image7 from "../../assets/images/Kendygerls/kendy7.webp";
import image8 from "../../assets/images/Kendygerls/kendy8.webp";
import image9 from "../../assets/images/Kendygerls/kendy9.webp";
import image10 from "../../assets/images/Kendygerls/kendy10.webp";
import image11 from "../../assets/images/Kendygerls/kendy11.webp";
import image12 from "../../assets/images/Kendygerls/kendy12.webp";

const GirlsCandy = () => {
  const images = [
    { src: image1, alt: "Кенди-бар для девочек №1" },
    { src: image2, alt: "Кенди-бар для девочек №2" },
    { src: image3, alt: "Кенди-бар для девочек №3" },
    { src: image4, alt: "Кенди-бар для девочек №4" },
    { src: image5, alt: "Кенди-бар для девочек №5" },
    { src: image6, alt: "Кенди-бар для девочек №6" },
    { src: image7, alt: "Кенди-бар для девочек №7" },
    { src: image8, alt: "Кенди-бар для девочек №8" },
    { src: image9, alt: "Кенди-бар для девочек №9" },
    { src: image10, alt: "Кенди-бар для девочек №10" },
    { src: image11, alt: "Кенди-бар для девочек №11" },
    { src: image12, alt: "Кенди-бар для девочек №12" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

export default GirlsCandy;
