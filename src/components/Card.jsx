import { motion } from 'framer-motion';

const Card = ({ imageSrc, alt, onClick }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  >
    <img
      src={imageSrc}
      alt={alt}
      className="w-full h-48 sm:h-56 md:h-48 object-cover"
    />
    <div className="p-3 sm:p-4">
      <h3 className="text-sm sm:text-base font-semibold text-gray-800">{alt}</h3>
    </div>
  </motion.div>
);

export default Card;
