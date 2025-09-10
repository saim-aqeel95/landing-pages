import React, { useState } from 'react';
import { Sun, Leaf, DollarSign, BatteryCharging, ChevronRight, CheckCircle, Lightbulb, Phone, X, Calculator, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import BannerImg from "./assets/img/banner.jpg";

// Custom CSS for fonts. Framer Motion handles the animations.
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  @keyframes pulseLight {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .pulse-light {
    animation: pulseLight 2s infinite ease-in-out;
  }

  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }

  .hero-section {
    background-image: url(${BannerImg});
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
    background-color: rgba(0, 0, 0, 0.4); /* Dark overlay */
    z-index: 0;
  }
`;

// Modal for the Quote Form
const QuoteFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
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
        <p className="text-center text-gray-600 mb-6">Fill out the form below and one of our experts will contact you shortly.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input type="tel" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
          </div>
          <button type="submit" className="w-full px-4 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// Solar Savings Calculator Component
const SolarSavingsCalculator = () => {
  const [bill, setBill] = useState('');
  const [savings, setSavings] = useState(0);

  const calculateSavings = (e) => {
    const value = e.target.value;
    setBill(value);
    const monthlyBill = parseFloat(value);
    if (monthlyBill > 0) {
      // Simple savings calculation for demonstration purposes
      // Estimated 50% savings
      setSavings((monthlyBill * 0.5 * 12).toFixed(2));
    } else {
      setSavings(0);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-12 transform hover:scale-105 transition-transform duration-300">
      <>
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-4 font-quicksand">Calculate Your Savings</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex-1 w-full sm:w-auto">
            <label htmlFor="bill" className="sr-only">Monthly Electricity Bill</label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={20} className="text-gray-400" />
              </div>
              <input
                id="bill"
                type="number"
                value={bill}
                onChange={calculateSavings}
                placeholder="Your monthly bill ($)"
                className="block w-full rounded-lg pl-10 pr-4 py-3 border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
            {savings > 0 ? (
              <p className="text-lg font-semibold text-gray-700">
                Estimated Annual Savings: <span className="text-green-600 font-extrabold text-2xl">${savings}</span>
              </p>
            ) : (
              <p className="text-lg text-gray-500">
                Enter your bill to see your savings!
              </p>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const slideInVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased leading-relaxed">
      <style>{customStyles}</style>
      <div className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300 via-green-200 to-blue-400 opacity-20"></div>

        {/* Hero Section */}
        <div className="hero-section py-20 px-5 sm:py-32 lg:py-48 text-center flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left relative z-10">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md font-quicksand">
                Power Your Home with Solar
              </h1>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
                Cut your energy bills, save the planet, and gain energy independence with a personalized solar solution.
              </p>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300 active:bg-yellow-600 pulse-light"
              >
                <Phone size={20} className="inline-block mr-2" />
                Get a Free Quote
              </button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative z-10">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
              <div className="bg-yellow-200 p-8 sm:p-12 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 duration-300 w-full max-w-sm text-center">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 font-quicksand mb-4">Ready to Shine?</h3>
                <p className="text-gray-600 mb-6">Start your solar journey with a simple click. Get your personalized quote now and see how much you can save!</p>
                <button onClick={() => setIsModalOpen(true)} className="w-full px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200">
                  <Calculator size={20} className="inline-block mr-2" />
                  Free Solar Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }}>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                <DollarSign size={48} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-quicksand">Lower Energy Bills</h3>
                <p className="text-gray-600">
                  Generate your own power and significantly reduce or even eliminate your monthly electricity costs.
                </p>
              </div>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                <Leaf size={48} className="mx-auto text-lime-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-quicksand">Environmental Impact</h3>
                <p className="text-gray-600">
                  Reduce your carbon footprint and contribute to a cleaner, more sustainable future for everyone.
                </p>
              </div>
            </motion.div>
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                <BatteryCharging size={48} className="mx-auto text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-quicksand">Energy Independence</h3>
                <p className="text-gray-600">
                  Protect yourself from rising utility rates and grid outages with your own reliable power source.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <SolarSavingsCalculator />
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 font-quicksand">
                Our Simple Process
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }}>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Consult" alt="Consultation icon" className="rounded-full shadow-lg" />
                    <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">1</span>
                  </div>
                  <h3 className="text-lg font-semibold font-quicksand">Consultation</h3>
                  <p className="text-sm text-gray-600 mt-2">We assess your home and energy needs.</p>
                </div>
              </motion.div>
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Design" alt="Custom design icon" className="rounded-full shadow-lg" />
                    <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">2</span>
                  </div>
                  <h3 className="text-lg font-semibold font-quicksand">Custom Design</h3>
                  <p className="text-sm text-gray-600 mt-2">We design a system tailored to your home.</p>
                </div>
              </motion.div>
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Install" alt="Installation icon" className="rounded-full shadow-lg" />
                    <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">3</span>
                  </div>
                  <h3 className="text-lg font-semibold font-quicksand">Seamless Installation</h3>
                  <p className="text-sm text-gray-600 mt-2">Our certified team installs your panels.</p>
                </div>
              </motion.div>
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <img src="https://placehold.co/96x96/E0E0E0/0D0D0D?text=Power+On" alt="Power on icon" className="rounded-full shadow-lg" />
                    <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">4</span>
                  </div>
                  <h3 className="text-lg font-semibold font-quicksand">Power On!</h3>
                  <p className="text-sm text-gray-600 mt-2">Start generating clean energy right away.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 font-quicksand">
                What Our Customers Say
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }}>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                    <Smile size={32} className="text-gray-500" />
                  </div>
                  <p className="italic text-gray-600">"The installation was quick and professional. My energy bills have dropped significantly, and I'm proud to be doing my part for the environment."</p>
                  <p className="mt-4 font-bold text-gray-800">- Jane D.</p>
                </div>
              </motion.div>
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                    <Smile size={32} className="text-gray-500" />
                  </div>
                  <p className="italic text-gray-600">"I love having complete control over my energy use. The team was fantastic, and the entire process was seamless from start to finish."</p>
                  <p className="mt-4 font-bold text-gray-800">- Mark S.</p>
                </div>
              </motion.div>
              <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                    <Smile size={32} className="text-gray-500" />
                  </div>
                  <p className="italic text-gray-600">"Going solar with this company was the best decision I've made for my home. The savings are real and the peace of mind is invaluable."</p>
                  <p className="mt-4 font-bold text-gray-800">- Emily R.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-yellow-500 py-16 px-4 text-center">
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-quicksand">
              Ready to Make the Switch?
            </h2>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <p className="text-lg text-gray-800 mb-8">
              Call us today or fill out the form for a free, no-obligation quote and a personalized energy assessment.
            </p>
          </motion.div>
          <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-yellow-500 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 active:bg-gray-200"
            >
              <Phone size={20} className="inline-block mr-2" />
              Stay Connected
            </button>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Solar Solutions. All Rights Reserved.</p>
            <p className="mt-2 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </p>
          </div>
        </footer>
      </div>
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
