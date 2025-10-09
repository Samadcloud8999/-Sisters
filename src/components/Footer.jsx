import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-pink-50/50 py-8 mt-12">
      <div className="container mx-auto text-center max-w-3xl px-4">
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GiCupcake className="text-sweet-pink text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-800 font-['Playfair_Display']">
            Sisters' Sweets
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center items-center space-x-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://www.instagram.com/sisters_sweets_bishkek?igsh=MW81NmJiMXU0dDNuZg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 text-sweet-pink hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="tel:+996509190706"
            aria-label="Телефон"
            className="p-2 text-sweet-pink hover:text-pink-500 transition-colors duration-300"
          >
            <FaPhoneAlt className="text-xl" />
          </a>
          <a
            href="https://t.me/sisters_sweets_bishkek_direct"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-2 text-sweet-pink hover:text-pink-500 transition-colors duration-300"
          >
            <FaTelegramPlane className="text-xl" />
          </a>
        </motion.div>

        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Sisters' Sweets
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
