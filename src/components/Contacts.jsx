import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contacts = () => (
  <section className="py-20 bg-gradient-to-b from-pink-50 to-rose-100 px-6">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-rose-600 mb-12 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Контакты
      </motion.h2>

      <motion.div
        className="space-y-6 max-w-md mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center space-x-3 p-3 rounded-xl hover:bg-rose-50 transition"
        >
          <FaPhone className="text-rose-500 text-2xl" />
          <span className="text-lg text-gray-700">+996 (555) 222-258</span>
        </motion.div> 

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition"
        >
          <FaWhatsapp className="text-green-500 text-2xl" />
          <span className="text-lg text-gray-700">
            <a
              href="https://wa.me/996555222258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition-all duration-300 py-3 px-6 rounded-full text-base font-semibold shadow-lg"
            >
              Связаться в WhatsApp
            </a>
          </span>
        </motion.div>
        <motion.a
          href="https://www.instagram.com/sisters_sweets_bishkek?igsh=MW81NmJiMXU0dDNuZg=="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center space-x-3 p-3 rounded-xl hover:bg-pink-50 transition"
        >
          <FaInstagram className="text-pink-500 text-2xl" />
          <span className="text-lg text-gray-700">Instagram</span>
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Contacts;
