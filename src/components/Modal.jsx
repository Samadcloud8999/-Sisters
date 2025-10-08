import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, imageSrc, alt }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-4xl max-h-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={imageSrc} alt={alt} className="w-full h-auto max-h-screen object-contain rounded" />
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <FaTimes />
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Modal;