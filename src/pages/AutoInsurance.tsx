import { useState } from 'react';
import { CheckCircle, Handshake, ArrowRight, ClipboardList, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { customStyles } from '../styles';
import { motion } from 'framer-motion';
import { ClipboardPen, DollarSign, X } from 'lucide-react';
import SERVICE1 from '../assets/img/service-1.jpg'
import SERVICE2 from '../assets/img/service-2.jpg'
import SERVICE3 from '../assets/img/service-3.jpg'

const slideInVariant = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
    };

const QuoteFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded shadow-2xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh] custom-scroll"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100">
          <X size={24} />
        </button>
                    <motion.h2 variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-bold text-gray-900 mb-8 font-quicksand flex items-center">
                        <ClipboardPen size={32} className="text-orange-600 mr-3" />
                        Quote Request Form
                    </motion.h2>

                    <form className="space-y-8">
                        
                        {/* 1. Driver & Contact Information */}
                        <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-inner space-y-4">
                            <h4 className="text-xl font-bold text-orange-700 font-quicksand">Driver & Contact Details (Primary Driver)</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">First Name</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Last Name</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Email</label>
                                    <input type="email" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
                                    <input type="tel" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Date of Birth (DOB)</label>
                                    <input type="date" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Gender</label>
                                    <select required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5">
                                        <option value="">Select...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 2. Location Details */}
                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-inner space-y-4">
                            <h4 className="text-xl font-bold text-blue-700 font-quicksand">Vehicle Garaging Address</h4>
                            <div>
                                <label className="block text-gray-700 font-medium text-sm">Street Address</label>
                                <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">City</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">State</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Zip Code</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                            </div>
                        </div>

                        {/* 3. Vehicle Information (Simplified for one vehicle) */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-inner space-y-4">
                            <h4 className="text-xl font-bold text-gray-700 font-quicksand">Vehicle 1 Details</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Vehicle Year</label>
                                    <input type="number" min="1980" max={new Date().getFullYear() + 1} required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Make</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Model</label>
                                    <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium text-sm">Annual Mileage (Estimated)</label>
                                <input type="number" placeholder="e.g., 12000" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                            </div>
                        </div>

                        {/* 4. Current Policy & Inquiry */}
                        <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 shadow-inner space-y-4">
                            <h4 className="text-xl font-bold text-orange-700 font-quicksand flex items-center">
                                <DollarSign size={20} className="mr-2"/> Current Coverage Details
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Current Insurance Carrier</label>
                                    <input type="text" placeholder="e.g., State Farm, Progressive" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium text-sm">Current Monthly Premium (Estimate)</label>
                                    <input type="text" placeholder="e.g., $150.00" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium text-sm">Desired Coverage Start Date</label>
                                <input type="date" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
                            </div>
                        </div>
                        
                        {/* TCPA Disclaimer with Checkbox (Exact Copy) */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <input 
                                type="checkbox" 
                                id="tcpa-consent-auto" 
                                required 
                                className="mt-1.5 h-5 w-5 text-blue-600 border-gray-400 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <label htmlFor="tcpa-consent-auto" className="ml-3 text-xs text-gray-700 leading-relaxed">
                                <span className="font-bold text-red-600">TCPA Consent:</span> By submitting this form, You agree to the **Terms and Conditions** and **Privacy Policy** that CitizenCare its Partners and /or a licensed agent employed with CitizenCare, May contact you regarding auto insurance. You expressly consent to recieve phone calls (including autodialed and /or pre-recorded/artificial voice calls) and email using automated technology at the phone number and email address you provided, even if it is a wireless number, regardless of whether you are on any Federal or state DNC ("Do Not Call") and /or DNE ("Do Not Email") list or registry.
                            </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full px-4 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-200 text-lg transform hover:scale-[1.01] active:scale-[0.99]">
                            <ArrowRight size={20} className="inline-block mr-2" />
                            Find My Best Auto Rate
                        </button>
                    </form>
                 </motion.div>
                    </div>
  );
};

const AutoInsurance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased leading-relaxed">
      <style>{customStyles}</style>
      <div className="auto-insurance-hero py-20 px-5 sm:py-32 lg:py-48 text-center flex flex-col items-center justify-center relative z-10 text-white">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md font-quicksand mb-4">
            Protect Your Drive
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Find the right auto insurance plan to protect you, your loved ones, and your vehicle.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="mt-8 inline-flex items-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 active:bg-gray-200">
            <ArrowLeft size={20} className="transform rotate-180 mr-2" />
            Get a Quote
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* START OF NEW SECTION: Insurance Service Categories (Matching the image provided) */}
                <section className="mt-16 text-center mb-16">
                    <motion.h2 variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-quicksand">
                        We ensure best insurance services
                    </motion.h2>
                    <motion.p variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                        We are a professional and creative company and we offer you a trusty insurance on your vehicle.
                    </motion.p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Bike Insurance */}
                        <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <img 
                                // Placeholder image matching the visual style of the request
                                src={SERVICE1} 
                                alt="Motorcycle Insurance" 
                                className="w-full h-100 object-cover" 
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/003366/ffffff?text=Bike+Insurance"; }}
                            />
                            <div className="p-4 bg-gray-50 text-left">
                                <h3 className="text-xl font-bold text-gray-800 font-quicksand">Bike Insurance</h3>
                            </div>
                        </motion.div>

                        {/* Card 2: Car Insurance */}
                        <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <img 
                                // Placeholder image matching the visual style of the request
                                // src="https://placehold.co/600x400/CC0000/ffffff?text=Car+Insurance" 
                                src={SERVICE2}
                                alt="Car Insurance" 
                                className="w-full h-100 object-cover" 
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CC0000/ffffff?text=Car+Insurance"; }}
                            />
                            <div className="p-4 bg-gray-50 text-left">
                                <h3 className="text-xl font-bold text-gray-800 font-quicksand">Car Insurance</h3>
                            </div>
                        </motion.div>

                        {/* Card 3: Bus/Truck Insurance */}
                        <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <img 
                                // Placeholder image matching the visual style of the request
                                src={SERVICE3}
                                alt="Bus and Truck Insurance" 
                                className="w-full h-100 object-cover" 
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/333333/ffffff?text=Truck+Insurance"; }}
                            />
                            <div className="p-4 bg-gray-50 text-left">
                                <h3 className="text-xl font-bold text-gray-800 font-quicksand">Bus/truck Insurance</h3>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* END OF NEW SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-quicksand">
            Why Choose Our Auto Insurance?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We make finding the right coverage easy with personalized options and excellent customer support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-start">
            <CheckCircle size={36} className="text-green-500 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold font-quicksand">Comprehensive Coverage</h3>
              <p className="text-gray-600 mt-2">
                Our plans protect you against a wide range of incidents, including collisions, theft, and natural disasters.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-start">
            <Handshake size={36} className="text-blue-500 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold font-quicksand">Affordable Rates</h3>
              <p className="text-gray-600 mt-2">
                We work to get you the best rates without compromising on the quality of your coverage.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-start">
            <ClipboardList size={36} className="text-orange-500 mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold font-quicksand">Simple Claims Process</h3>
              <p className="text-gray-600 mt-2">
                Our team is here to guide you through the claims process, making it as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  );
};

export default AutoInsurance;