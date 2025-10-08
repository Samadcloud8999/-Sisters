import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../Card';
import Modal from '../Modal';

const WeddingCakes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Массив объектов для изображений — вставь свои 9 фото здесь!
  const images = [
    // { src: '/assets/images/wedding-cake-1.jpg', alt: 'Свадебный торт №1' },
    // { src: '/assets/images/wedding-cake-2.jpg', alt: 'Свадебный торт №2' },
    // { src: '/assets/images/wedding-cake-3.jpg', alt: 'Свадебный торт №3' },
    // { src: '/assets/images/wedding-cake-4.jpg', alt: 'Свадебный торт №4' },
    // { src: '/assets/images/wedding-cake-5.jpg', alt: 'Свадебный торт №5' },
    // { src: '/assets/images/wedding-cake-6.jpg', alt: 'Свадебный торт №6' },
    // { src: '/assets/images/wedding-cake-7.jpg', alt: 'Свадебный торт №7' },
    // { src: '/assets/images/wedding-cake-8.jpg', alt: 'Свадебный торт №8' },
    // { src: '/assets/images/wedding-cake-9.jpg', alt: 'Свадебный торт №9' },
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

export default WeddingCakes;