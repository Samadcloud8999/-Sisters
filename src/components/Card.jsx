import { motion } from "framer-motion";

const Card = ({ imageSrc, alt, onClick }) => {
  return (
    <motion.div
      className="cursor-zoom-in rounded-lg overflow-hidden shadow-md"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
        draggable={false}
      />
    </motion.div>
  );
};

export default Card;
