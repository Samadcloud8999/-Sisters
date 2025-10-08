import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../Card';
import Modal from '../Modal';

const BoysCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // { src: '/images/boys-cake-1.jpg', alt: 'Торт для мальчиков №1' },
    // { src: '/images/boys-cake-2.jpg', alt: 'Торт для мальчиков №2' },
    // { src: '/images/boys-cake-3.jpg', alt: 'Торт для мальчиков №3' },
    // { src: '/images/boys-cake-4.jpg', alt: 'Торт для мальчиков №4' },
    // { src: '/images/boys-cake-5.jpg', alt: 'Торт для мальчиков №5' },
    // { src: '/images/boys-cake-6.jpg', alt: 'Торт для мальчиков №6' },
    // { src: '/images/boys-cake-7.jpg', alt: 'Торт для мальчиков №7' },
    // { src: '/images/boys-cake-8.jpg', alt: 'Торт для мальчиков №8' },
    // { src: '/images/boys-cake-9.jpg', alt: 'Торт для мальчиков №9' },
    // { src: '/images/boys-cake-10.jpg', alt: 'Торт для мальчиков №10' },
  ];

  return (
    <>
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageSrc={selectedImage} alt="Увеличенное фото" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card imageSrc={image.src} alt={image.alt} onClick={() => setSelectedImage(image.src)} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BoysCakes;