import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-40 top-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white font-quicksand tracking-wide">
          
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <Menu size={28} />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-inter">Home</Link>
          <Link to="/home-services" className="text-gray-300 hover:text-white transition-colors duration-200 font-inter">Services</Link>
          <Link to="/auto-insurance" className="text-gray-300 hover:text-white transition-colors duration-200 font-inter">Auto Insurance</Link>
          <button onClick={() => window.location.href='#quote-section'} className="px-5 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-200 font-inter">
            Get Quote
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 bg-opacity-90 py-4 px-4 space-y-2 text-center"
        >
          <Link to="/" onClick={toggleMenu} className="block text-gray-300 hover:text-white py-2 transition-colors duration-200">Home</Link>
          <Link to="/services" onClick={toggleMenu} className="block text-gray-300 hover:text-white py-2 transition-colors duration-200">Services</Link>
          <Link to="/auto-insurance" onClick={toggleMenu} className="block text-gray-300 hover:text-white py-2 transition-colors duration-200">Auto Insurance</Link>
          <button onClick={() => { toggleMenu(); window.location.href='#quote-section'; }} className="w-full px-5 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-200">
            Get Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;