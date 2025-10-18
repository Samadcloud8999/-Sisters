import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import FullscreenGallery from "../FullscreenGallery";

import image1 from "../../assets/images/Kendymix/IMG_0214.webp";
import image2 from "../../assets/images/Kendymix/IMG_0417.webp";
import image3 from "../../assets/images/Kendymix/IMG_1368.webp";
import image4 from "../../assets/images/Kendymix/IMG_3174.webp";
import image5 from "../../assets/images/Kendymix/IMG_3492.webp";
import image6 from "../../assets/images/Kendymix/IMG_9116.webp";
import image7 from "../../assets/images/Kendymix/IMG_9703.webp";

const MixedCandy = () => {
  const images = [
    { src: image1, alt: "Кенди-бар разное №1" },
    { src: image2, alt: "Кенди-бар разное №2" },
    { src: image3, alt: "Кенди-бар разное №3" },
    { src: image4, alt: "Кенди-бар разное №4" },
    { src: image5, alt: "Кенди-бар разное №5" },
    { src: image6, alt: "Кенди-бар разное №6" },
    { src: image7, alt: "Кенди-бар разное №7" },
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

export default MixedCandy;
