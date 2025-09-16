import { CheckCircle, Handshake, ArrowRight, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { customStyles } from '../styles';

const AutoInsurance = () => {
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
          <Link to="/" className="mt-8 inline-flex items-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 active:bg-gray-200">
            <ArrowRight size={20} className="transform rotate-180 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
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
    </div>
  );
};

export default AutoInsurance;