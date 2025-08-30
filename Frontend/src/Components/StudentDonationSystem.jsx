import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentDonationSystem = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [paymentData, setPaymentData] = useState({
    name: '',
    branch: '',
    enrollment: '',
    amount: '',
    paymentMethod: 'upi'
  });

  const yearPrices = {
    firstYear: 100,
    secondYear: 150,
    thirdYear: 200,
    fourthYear: 250
  };

  const yearDetails = {
    firstYear: {
      title: "First Year",
      amount: yearPrices.firstYear,
      image: "https://images.unsplash.com/photo-1549417227-0c7f46c641f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    secondYear: {
      title: "Second Year",
      amount: yearPrices.secondYear,
      image: "https://images.unsplash.com/photo-1552581249-f9c94c929e71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    thirdYear: {
      title: "Third Year",
      amount: yearPrices.thirdYear,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    fourthYear: {
      title: "Fourth Year",
      amount: yearPrices.fourthYear,
      image: "https://images.unsplash.com/photo-1517486803277-2f7823e59074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setPaymentData(prev => ({
      ...prev,
      amount: yearPrices[year]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', { ...paymentData, year: selectedYear });
    // In a real application, you would process the payment here.
    // We'll use a modal instead of alert() for a better user experience.
    // For this example, we'll just log the payment and close the popup.
    handleClosePopup();
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedYear(null);
    setPaymentData({
      name: '',
      branch: '',
      enrollment: '',
      amount: '',
      paymentMethod: 'upi'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const yearCardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <>
      <button 
        onClick={() => setIsPopupOpen(true)}
        className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
      >
        Student Donation
      </button>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Beautiful background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-400/30 to-red-500/20 backdrop-blur-sm"></div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform border-2 border-amber-200 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header with decorative elements */}
              <div className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-amber-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 -ml-8 -mb-8 bg-orange-400 rounded-full opacity-20"></div>
                
                {/* Close button with better styling */}
                <button 
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8 relative">
                <AnimatePresence mode="wait">
                  {!selectedYear ? (
                    <motion.div
                      key="year-selection"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-3xl font-extrabold text-center text-orange-600 mb-2">
                        Select Your Year
                      </h3>
                      <p className="text-center text-gray-600 mb-6">
                        Choose your academic year
                      </p>
                      {Object.keys(yearDetails).map((key, index) => (
                        <motion.div
                          key={key}
                          className="relative p-6 border-2 border-amber-200 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group bg-white"
                          onClick={() => handleYearSelect(key)}
                          variants={yearCardVariants}
                          initial="initial"
                          animate="animate"
                          custom={index}
                          whileHover={{ y: -5 }}
                        >
                          <div
                            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                            style={{ backgroundImage: `url(${yearDetails[key].image})` }}
                          ></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 group-hover:from-amber-400/10 group-hover:to-orange-400/10 transition-all"></div>
                          
                          <div className="relative z-10 flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-xl text-orange-800">{yearDetails[key].title}</h4>
                              <p className="text-gray-700 mt-1 text-sm">
                                Suggested donation
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-green-600 text-xl">₹{yearDetails[key].amount}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <div className="pt-4 flex justify-center">
                        <button
                          type="button"
                          onClick={handleClosePopup}
                          className="py-2 px-6 bg-gray-400 text-white font-semibold rounded-xl transition-all hover:bg-gray-500 hover:scale-[1.02] shadow-md"
                        >
                          Cancel
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="payment-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <h3 className="text-3xl font-extrabold text-center text-orange-600 mb-2">
                        Payment Details
                      </h3>
                      <p className="text-center text-gray-600 mb-6">
                        Complete your donation
                      </p>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={paymentData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-colors bg-white"
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Branch</label>
                        <input
                          type="text"
                          name="branch"
                          value={paymentData.branch}
                          onChange={handleInputChange}
                          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-colors bg-white"
                          required
                          placeholder="e.g., Computer Engineering"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
                        <input
                          type="text"
                          name="enrollment"
                          value={paymentData.enrollment}
                          onChange={handleInputChange}
                          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-colors bg-white"
                          required
                          placeholder="Enter your enrollment number"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                          <input
                            type="number"
                            value={paymentData.amount}
                            className="w-full p-3 pl-8 border-2 border-amber-200 rounded-xl bg-amber-50 text-gray-700 font-medium"
                            readOnly
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                        <select
                          name="paymentMethod"
                          value={paymentData.paymentMethod}
                          onChange={handleInputChange}
                          className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 bg-white"
                        >
                          <option value="upi">UPI</option>
                          <option value="card">Credit/Debit Card</option>
                          <option value="netbanking">Net Banking</option>
                          <option value="cash">Cash</option>
                        </select>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <motion.button
                          type="button"
                          onClick={() => setSelectedYear(null)}
                          className="flex-1 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold rounded-xl transition-all hover:from-gray-500 hover:to-gray-600 hover:scale-[1.02] shadow-md"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        <button
                          type="submit"
                          className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl transition-all hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02] shadow-md"
                        >
                          Pay Now
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default StudentDonationSystem;
