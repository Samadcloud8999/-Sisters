import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Главная", to: "/" },
    { name: "Торты", to: "/cakes" },
    { name: "Кенди-Бар", to: "/candy" },
    { name: "Информация", to: "/info" },
    { name: "Контакты", to: "/contacts" },
  ];

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fff7f9] shadow-lg z-50 px-5 py-4 font-['Cormorant_Garamond'] text-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-['Playfair_Display'] text-rose-500 tracking-wide hover:text-rose-400 transition-all select-none"
        >
          Sisters’ Sweets
        </Link>

        <nav className="hidden md:flex space-x-8 ml-auto items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative text-gray-700 hover:text-rose-500 text-lg tracking-wide transition-all duration-300 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://www.instagram.com/sisters_sweets_bishkek?igsh=MW81NmJiMXU0dDNuZg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 hover:text-rose-400 text-2xl ml-3"
          >
            <FaInstagram />
          </a>
        </nav>

        <motion.button
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <span
            className={`block w-full h-0.5 bg-gray-700 rounded transition-transform duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-gray-700 rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-gray-700 rounded transition-transform duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#fff7f9] z-40 rounded-l-3xl p-8 pt-28 flex flex-col space-y-6 shadow-2xl"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-700 hover:text-rose-500 font-medium border-b border-rose-100 pb-2 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-rose-500 text-2xl pt-6 hover:text-rose-400 transition-colors"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </motion.nav>

          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
