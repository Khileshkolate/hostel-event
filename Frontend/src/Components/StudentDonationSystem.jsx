import { useState } from 'react';

const StudentDonationSystem = () => {
  const [activeTab, setActiveTab] = useState('donation');
  const [selectedYear, setSelectedYear] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Donation amounts by year
  const donationAmounts = {
    firstYear: 500,
    secondYear: 750,
    thirdYear: 1000,
    fourthYear: 1250
  };

  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setPaymentMethod('');
  };

  const handlePayment = () => {
    if (selectedYear && paymentMethod) {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        alert(`Payment successful! ₹${donationAmounts[selectedYear]} paid for ${selectedYear.replace('Year', ' Year')} via ${paymentMethod}`);
        setIsProcessing(false);
        setSelectedYear(null);
        setPaymentMethod('');
      }, 2000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl mt-10 font-sans">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold text-indigo-800">Campus Donation Portal</h1>
        <p className="text-indigo-600">Support your institution's development</p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 border-b-2 border-indigo-100">
          <button 
            className={`px-6 py-3 transition-all duration-300 text-sm font-semibold rounded-t-xl relative overflow-hidden group ${activeTab === 'donation' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'bg-white text-indigo-700 hover:bg-indigo-50'}`}
            onClick={() => setActiveTab('donation')}
          >
            <span className="relative z-10">Student Donation</span>
            {activeTab === 'donation' && (
              <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-5 transition-opacity"></div>
            )}
          </button>
          <button 
            className={`px-6 py-3 transition-all duration-300 text-sm font-semibold rounded-t-xl relative overflow-hidden group ${activeTab === 'history' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'bg-white text-indigo-700 hover:bg-indigo-50'}`}
            onClick={() => setActiveTab('history')}
          >
            <span className="relative z-10">Donation History</span>
            {activeTab === 'history' && (
              <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-5 transition-opacity"></div>
            )}
          </button>
        </div>
      </div>

      {activeTab === 'donation' && (
        <div className="p-6 bg-white rounded-xl shadow-md border border-indigo-100">
          <h2 className="text-xl font-bold text-indigo-800 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Select Your Academic Year
          </h2>
          <p className="text-indigo-600 text-sm mb-6">Choose your current year of study</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {['firstYear', 'secondYear', 'thirdYear', 'fourthYear'].map((year) => (
              <button
                key={year}
                onClick={() => handleYearSelection(year)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${
                  selectedYear === year 
                    ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                    : 'border-indigo-100 hover:border-indigo-300 bg-white'
                }`}
              >
                <div className={`rounded-full h-12 w-12 flex items-center justify-center mb-2 ${
                  selectedYear === year ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-50 text-indigo-400'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-indigo-800 text-center">
                  {year.replace('Year', ' Year').replace('first', '1st').replace('second', '2nd').replace('third', '3rd').replace('fourth', '4th')}
                </h3>
                <p className="text-sm font-medium text-indigo-600 mt-1">₹{donationAmounts[year]}</p>
              </button>
            ))}
          </div>

          {selectedYear && (
            <>
              <div className="mb-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 shadow-sm">
                <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Selected: {selectedYear.replace('Year', ' Year').replace('first', '1st').replace('second', '2nd').replace('third', '3rd').replace('fourth', '4th')}
                </h3>
                <p className="text-lg font-bold text-indigo-600">Amount: ₹{donationAmounts[selectedYear]}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-indigo-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                  Select Payment Method
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Credit Card', 'Debit Card', 'UPI', 'Net Banking'].map((method) => (
                    <button
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-center ${
                        paymentMethod === method 
                          ? 'border-green-500 bg-green-50 shadow-sm' 
                          : 'border-indigo-100 hover:border-indigo-300 bg-white'
                      }`}
                    >
                      <span className="text-indigo-800 font-medium">{method}</span>
                    </button>
                  ))}
                </div>
              </div>

              {paymentMethod && (
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg flex items-center justify-center ${
                    isProcessing 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transform hover:scale-105'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 5.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 10l1.293-1.293zm4 0a1 1 0 010 1.414L11.586 10l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Pay ₹{donationAmounts[selectedYear]} with {paymentMethod}
                    </>
                  )}
                </button>
              )}
            </>
          )}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="p-6 bg-white rounded-xl shadow-md border border-indigo-100">
          <h2 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Your Donation History
          </h2>
          <div className="text-center py-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-indigo-600">You haven't made any donations yet.</p>
            <p className="text-indigo-400 text-sm mt-2">Your donation history will appear here after your first contribution</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDonationSystem;