import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import Modal from "../Modal";
import image1 from "../../assets/images/1.jpg";

const BoysCandy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: "Торт для девочек №1" },
    // { src: '/images/candy-boys-2.jpg', alt: 'Кенди-бар для мальчиков №2' },
   
  ];

  return (
    <>
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage}
        alt="Увеличенное фото"
      />
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
              onClick={() => setSelectedImage(image.src)}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BoysCandy;
