import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../Card';
import Modal from '../Modal';

const AdultsCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив объектов для изображений — вставь свои 17 фото здесь!
  const images = [
    // { src: '/images/adults-cake-1.jpg', alt: 'Торт для взрослых №1' },
    // { src: '/images/adults-cake-2.jpg', alt: 'Торт для взрослых №2' },
    // ... (добавь до 17)
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

export default AdultsCakes;