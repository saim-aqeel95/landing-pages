import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Wrench, Zap, Pipette, CheckCircle, Clock, Users, Phone, X, Handshake, HeartHandshake, Smile } from 'lucide-react';
import Banner from "../assets/img/home_service_banner.jpg";

// Custom CSS for fonts and animations
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .pulse-animation {
    animation: pulse 2s infinite ease-in-out;
  }

  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }

  .hero-section {
    background-image: url('${Banner}');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

// Modal for the Quote Form
const QuoteFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2 font-quicksand">Get Your Free Quote</h3>
        <p className="text-center text-gray-600 mb-6">Tell us about your project, and we'll get back to you with a free estimate.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input type="tel" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Project Details</label>
            <textarea className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rows-4"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const HomeService = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  // Animation variants
  const slideInVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased leading-relaxed">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <div className="hero-section py-20 px-5 sm:py-32 lg:py-48 text-center flex flex-col items-center justify-center relative z-10">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md font-quicksand">
              Your Trusted Partner for Home Services
            </h1>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              From minor repairs to major renovations, our skilled professionals provide reliable, high-quality service for your home.
            </p>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <button
              onClick={() => setIsModalOn(true)}
              className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800 pulse-animation"
            >
              <Phone size={20} className="inline-block mr-2" />
              Get a Free Quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12 font-quicksand">
            Our Professional Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300 text-center">
              <Hammer size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-quicksand">Handyman Services</h3>
              <p className="text-gray-600">
                Fix it, install it, or build it. We handle all your small and large home repair tasks with precision.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300 text-center">
              <Wrench size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-quicksand">Plumbing Solutions</h3>
              <p className="text-gray-600">
                From leaky faucets to drain cleaning, our licensed plumbers ensure your systems run smoothly.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300 text-center">
              <Zap size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-quicksand">Electrical Work</h3>
              <p className="text-gray-600">
                Safe and reliable electrical services, from new lighting installations to panel upgrades.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }}>
            <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300 text-center">
              <Pipette size={48} className="mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-quicksand">Painting & Decorating</h3>
              <p className="text-gray-600">
                Refresh your home's look with our professional painting services, inside and out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 font-quicksand">
              How It Works
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-md border border-gray-100">
                <div className="relative w-24 h-24 mb-4">
                  <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Book" alt="Book a service" className="rounded-full shadow-lg" />
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">1</span>
                </div>
                <h3 className="text-xl font-semibold font-quicksand">Book Online</h3>
                <p className="text-sm text-gray-600 mt-2">Choose your service and schedule a time that works for you.</p>
              </div>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-md border border-gray-100">
                <div className="relative w-24 h-24 mb-4">
                  <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Service" alt="Receive service" className="rounded-full shadow-lg" />
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">2</span>
                </div>
                <h3 className="text-xl font-semibold font-quicksand">Get the Service</h3>
                <p className="text-sm text-gray-600 mt-2">A professional arrives on time and completes the job with expertise.</p>
              </div>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-md border border-gray-100">
                <div className="relative w-24 h-24 mb-4">
                  <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Relax" alt="Relax" className="rounded-full shadow-lg" />
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">3</span>
                </div>
                <h3 className="text-xl font-semibold font-quicksand">Enjoy Your Home</h3>
                <p className="text-sm text-gray-600 mt-2">Relax and enjoy the peace of mind that comes with a job well done.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12 font-quicksand">
            Why Choose Our Service?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle size={36} className="text-green-500 mr-4" />
                <h3 className="text-xl font-bold font-quicksand">Vetted Professionals</h3>
              </div>
              <p className="text-gray-600">
                All our experts are background-checked, certified, and insured for your peace of mind.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Clock size={36} className="text-blue-500 mr-4" />
                <h3 className="text-xl font-bold font-quicksand">On-Time Service</h3>
              </div>
              <p className="text-gray-600">
                We respect your time and guarantee our professionals will arrive punctually, ready to work.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
            <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Users size={36} className="text-orange-500 mr-4" />
                <h3 className="text-xl font-bold font-quicksand">Transparent Pricing</h3>
              </div>
              <p className="text-gray-600">
                Receive upfront, clear quotes with no hidden fees. You know the cost before we start.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-600 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 font-quicksand">
              What Our Customers Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="bg-blue-700 p-6 rounded-2xl shadow-lg border border-blue-800">
                <Smile size={32} className="mx-auto text-white mb-4" />
                <p className="italic">"They fixed a tricky plumbing issue that others couldn't. Professional, fast, and friendly. Highly recommend!"</p>
                <p className="mt-4 font-bold">- John D.</p>
              </div>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <div className="bg-blue-700 p-6 rounded-2xl shadow-lg border border-blue-800">
                <Smile size={32} className="mx-auto text-white mb-4" />
                <p className="italic">"Booking was a breeze, and the handyman was excellent. My to-do list is finally complete!"</p>
                <p className="mt-4 font-bold">- Sarah K.</p>
              </div>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
              <div className="bg-blue-700 p-6 rounded-2xl shadow-lg border border-blue-800">
                <Smile size={32} className="mx-auto text-white mb-4" />
                <p className="italic">"Fantastic service and great communication. The electrician was on time and got the job done perfectly."</p>
                <p className="mt-4 font-bold">- David L.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gray-800 py-16 px-4 text-center">
        <div className="container mx-auto">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-quicksand">
              Ready to Get Started?
            </h2>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation estimate on your next home project. We're here to help!
            </p>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <button
              onClick={() => setIsModalOn(true)}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 active:bg-gray-200"
            >
              <Handshake size={20} className="inline-block mr-2" />
              Request Your Free Quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Your Home Services Co. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </p>
        </div>
      </footer>
      <QuoteFormModal isOpen={isModalOn} onClose={() => setIsModalOn(false)} />
    </div>
  );
};

export default HomeService;