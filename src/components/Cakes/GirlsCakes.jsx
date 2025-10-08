import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../Card";
import Modal from "../Modal";
import image1 from '../../assets/images/1.jpg';

const GirlsCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив объектов для изображений — вставь свои 12 фото здесь!
  const images = [
  { src: image1, alt: "Торт для девочек №1" },
    // { src: '/images/girls-cake-2.jpg', alt: 'Торт для девочек №2' },
    // { src: '/images/girls-cake-3.jpg', alt: 'Торт для девочек №3' },
    // { src: '/images/girls-cake-4.jpg', alt: 'Торт для девочек №4' },
    // { src: '/images/girls-cake-5.jpg', alt: 'Торт для девочек №5' },
    // { src: '/images/girls-cake-6.jpg', alt: 'Торт для девочек №6' },
    // { src: '/images/girls-cake-7.jpg', alt: 'Торт для девочек №7' },
    // { src: '/images/girls-cake-8.jpg', alt: 'Торт для девочек №8' },
    // { src: '/images/girls-cake-9.jpg', alt: 'Торт для девочек №9' },
    // { src: '/images/girls-cake-10.jpg', alt: 'Торт для девочек №10' },
    // { src: '/images/girls-cake-11.jpg', alt: 'Торт для девочек №11' },
    // { src: '/images/girls-cake-12.jpg', alt: 'Торт для девочек №12' },
  ];

  return (
    <>
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage}
        alt="Увеличенное фото"
      />
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

export default GirlsCakes;
