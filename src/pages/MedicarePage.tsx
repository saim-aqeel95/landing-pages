import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, ArrowRight, HeartHandshake, FileText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
        
        {/* Attractive Header */}
        <div className="text-center mb-6 border-b pb-4 border-blue-100">
          <h3 className="text-3xl font-extrabold text-blue-600 mb-1 font-quicksand">
            Secure Your Savings Today
          </h3>
          <p className="text-gray-500 text-base">Complete the form for a personalized, free, and non-binding quote.</p>
        </div>
        
        <form className="space-y-6">
          
          {/* Section 1: Contact Information */}
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-inner space-y-4">
            <h4 className="text-xl font-bold text-blue-700 font-quicksand flex items-center">
              Personal & Contact Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm">First Name</label>
                <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm">Last Name</label>
                <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Email</label>
              <input type="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm">Phone Number</label>
                <input type="tel" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm">Date of Birth (DOB)</label>
                <input type="date" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
            </div>
          </div>

          {/* Section 2: Address Information */}
          <div className="p-6 bg-green-50 rounded-xl border border-green-100 shadow-inner space-y-4">
             <h4 className="text-xl font-bold text-green-700 font-quicksand">
              Location Details
            </h4>
            <div>
              <label className="block text-gray-700 font-medium text-sm">Street Address</label>
              <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm">City</label>
                <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm">State</label>
                <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm">Zip Code</label>
                <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
              </div>
            </div>
          </div>


          {/* Section 3: Medication Inquiry Fields */}
          <div className="p-6 bg-pink-50 rounded-xl border border-pink-100 shadow-inner space-y-4">
            <h4 className="text-xl font-bold text-pink-700 font-quicksand flex items-center">
              <HeartHandshake size={20} className="mr-2"/> Medication Savings Inquiry
            </h4>
            {/* Q1: Are you currently buying your own weight loss medications? */}
            <div>
              <label className="block text-gray-700 font-medium text-sm">Are you currently buying your own weight loss medications?</label>
              <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-150 p-2.5">
                <option>Select an Option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            {/* Q2: How much do you pay for your weight loss medications? */}
            <div>
              <label className="block text-gray-700 font-medium text-sm">How much do you currently pay for your weight loss medications (monthly)?</label>
              <input type="text" placeholder="e.g., $100, $500, etc." className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
            </div>
            {/* Q3: Which type of medication are you currently purchasing? */}
            <div>
              <label className="block text-gray-700 font-medium text-sm">Which type of weight loss medication are you currently purchasing?</label>
              <input type="text" placeholder="e.g., Semaglutide, Tirezepatide, etc." className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-150 p-2.5" />
            </div>
            {/* Q4: Would you be interested in saving 50% of the cost of your medication? */}
            <div>
              <label className="block text-gray-700 font-medium text-sm">Would you be interested in saving 50% or more on the cost of your medication?</label>
              <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-150 p-2.5">
                <option>Select an Option</option>
                <option>Yes, absolutely</option>
                <option>Maybe</option>
                <option>No</option>
              </select>
            </div>
          </div>
          
          {/* Section 4: Service and Message */}
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-gray-700 font-medium text-sm">Service of Interest</label>
              <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5">
                <option>Medication Savings / Weight Loss</option>
                <option>Final Expense</option>
                <option>Medicare</option>
                <option>Auto Insurance</option>
                <option>Home Services</option>
                <option>Solar</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-sm">General Inquiry / Message</label>
              <textarea className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 p-2.5 h-24"></textarea>
            </div>
          </div>

          {/* New Section 5: TCPA Disclaimer with Checkbox */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
              <input 
                type="checkbox" 
                id="tcpa-consent" 
                required 
                className="mt-1.5 h-5 w-5 text-blue-600 border-gray-400 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="tcpa-consent" className="ml-3 text-xs text-gray-700 leading-relaxed">
                <span className="font-bold text-red-600">TCPA Consent:</span> By submitting this form, You agree to the **Terms and Conditions** and **Privacy Policy** that CitizenCare its Partners and /or a licensed agent employed with CitizenCare, May contact you regarding auto insurance. You expressly consent to recieve phone calls (including autodialed and /or pre-recorded/artificial voice calls) and email using automated technology at the phone number and email address you provided, even if it is a wireless number, regardless of whether you are on any Federal or state DNC ("Do Not Call") and /or DNE ("Do Not Email") list or registry.
              </label>
            </div>
          </div>
          
          {/* Submit Button */}
          <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg transform hover:scale-[1.01] active:scale-[0.99]">
            <ArrowRight size={20} className="inline-block mr-2" />
            Submit Request & Start Saving
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const MedicarePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const slideInVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  const medicareParts = [
    { title: "Medicare Part A (Hospital)", description: "Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health care." },
    { title: "Medicare Part B (Medical)", description: "Covers certain doctors' services, outpatient care, medical supplies, and preventive services." },
    { title: "Medicare Part C (Advantage)", description: "An all-in-one alternative to Original Medicare offered by private companies approved by Medicare. Includes A, B, and usually D." },
    { title: "Medicare Part D (Prescription Drug)", description: "Adds prescription drug coverage to Original Medicare, certain Medicare Cost Plans, and Medicare Private-Fee-for-Service Plans." },
    { title: "Medicare Supplement (Medigap)", description: "Helps fill 'gaps' in Original Medicare and is sold by private companies." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-16 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <button
          onClick={() => navigate('/')}
          className="mt-8 mb-8 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </button>

        <motion.header variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-green-500">
          <ShieldCheck size={64} className="text-green-500 mb-4 mx-auto" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-3 font-quicksand">
            Simplified Medicare Solutions
          </h1>
          <p className="text-xl text-center text-gray-600">
            Navigating Medicare doesn't have to be complicated. We help you understand your options and secure the coverage that fits your life and budget.
          </p>
        </motion.header>

        {/* Medicare Parts Section */}
        <section className="mt-16">
          <motion.h2 variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-bold text-center text-gray-900 mb-10 font-quicksand">
            Understanding the Parts of Medicare
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicareParts.map((part, index) => (
              <motion.div 
                key={index} 
                variants={slideInVariant} 
                initial="initial" 
                whileInView="whileInView" 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-400 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
              >
                <h3 className="text-xl font-bold text-green-700 mb-3 font-quicksand">{part.title}</h3>
                <p className="text-gray-600 text-sm">{part.description}</p>
                {/* <button className="mt-4 text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors self-start">
                    View Details
                </button> */}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enrollment Information Section */}
        {/* <section className="mt-16 bg-white p-8 rounded-3xl shadow-xl">
            <motion.h2 variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-bold text-gray-900 mb-6 font-quicksand flex items-center justify-center sm:justify-start">
                <Calendar size={32} className="text-blue-600 mr-3" />
                Key Enrollment Periods
            </motion.h2>
            <div className="space-y-4 text-gray-700">
                <p>
                    <strong className="text-gray-900">Initial Enrollment Period (IEP):</strong> Starts 3 months before you turn 65, includes your birth month, and ends 3 months after. It's vital to sign up during this time to avoid potential penalties.
                </p>
                <p>
                    <strong className="text-gray-900">Annual Enrollment Period (AEP):</strong> Runs from <strong className="text-green-600">October 15 – December 7</strong> each year. This is when you can join, drop, or switch Medicare plans.
                </p>
                <p>
                    <strong className="text-gray-900">Special Enrollment Periods (SEP):</strong> Available for those with qualifying life events (e.g., moving, losing other coverage).
                </p>
            </div>
        </section> */}

        {/* Call to Action */}
        <motion.div variants={slideInVariant} initial="initial" whileInView="whileInView" transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="mt-16 p-8 bg-blue-600 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-3 font-quicksand">
                Ready to Find Your Perfect Plan?
            </h3>
            <p className="text-blue-100 mb-6">
                Don't wait! Connect with a certified specialist who can clarify your options and enroll you in the right plan.
            </p>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-white active:bg-gray-200"
            >
                <FileText size={20} className="inline-block mr-2" />
                Get Your Free Quote
            </button>
        </motion.div>
      </div>
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </motion.div>
  );
};

export default MedicarePage;