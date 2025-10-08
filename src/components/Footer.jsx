import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-14 px-6 overflow-hidden">
      {/* 💫 Фон с розовым свечением */}
      <motion.div
        className="absolute -top-20 left-1/2 w-[600px] h-[600px] bg-sweet-pink/10 blur-3xl -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative container mx-auto text-center z-10">
        {/* 🌸 Название */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-sweet-pink bg-clip-text text-transparent inline-block cursor-pointer transition-transform duration-500 hover:scale-105"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sisters’ Sweets
        </motion.h2>

        {/* 🧁 Описание */}
        <motion.p
          className="max-w-xl mx-auto text-gray-300 mb-8 text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Авторская кондитерская по изготовлению тортов и кенди-баров на заказ.
          Сладости, которые создают настроение и украшают ваш праздник!
        </motion.p>

        {/* 📞 Контакты */}
        <motion.div
          className="flex justify-center items-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/sisters_sweets_bishkek?igsh=MW81NmJiMXU0dDNuZg=="
            aria-label="Instagram"
            className="p-3 bg-white/10 rounded-full hover:bg-sweet-pink/30 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="text-pink-400 text-2xl" />
          </a>
          <a
            href="tel:+996509190706"
            aria-label="Телефон"
            className="p-3 bg-white/10 rounded-full hover:bg-sweet-pink/30 transition-all duration-300 hover:scale-110"
          >
            <FaPhoneAlt className="text-pink-400 text-xl" />
          </a>
          <a
            href="https://t.me/sisters_sweets_bishkek_direct"
            aria-label="Telegram"
            className="p-3 bg-white/10 rounded-full hover:bg-sweet-pink/30 transition-all duration-300 hover:scale-110"
          >
            <FaTelegramPlane className="text-pink-400 text-xl" />
          </a>
        </motion.div>

        {/* © Авторское право */}
        <motion.p
          className="text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          &copy; 2025 Sisters’ Sweets. Все права защищены.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
