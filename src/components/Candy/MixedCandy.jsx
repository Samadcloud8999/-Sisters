import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../Card';
import Modal from '../Modal';

const MixedCandy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив объектов для изображений — вставь свои 7 фото здесь!
  const images = [
    // { src: '/images/candy-mixed-1.jpg', alt: 'Кенди-бар разное №1' },
    // { src: '/images/candy-mixed-2.jpg', alt: 'Кенди-бар разное №2' },
    // ... (добавь до 7)
  ];

  return (
    <>
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageSrc={selectedImage} alt="Увеличенное фото" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

export default MixedCandy;