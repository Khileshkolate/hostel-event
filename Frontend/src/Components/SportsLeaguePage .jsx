// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const SportsLeaguePage = () => {
//   const { sport } = useParams();
//   const [activeTab, setActiveTab] = useState('registration');
//   const [gameRegistration, setGameRegistration] = useState('');
//   const [isHovering, setIsHovering] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [selectedYear, setSelectedYear] = useState('2025');
//   const [donationAmount, setDonationAmount] = useState(0);
//   const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);
//   const [donationYear, setDonationYear] = useState(null);
//   const [paymentData, setPaymentData] = useState({
//     name: '',
//     branch: '',
//     enrollment: '',
//     amount: '',
//     paymentMethod: 'upi'
//   });

//   // Use refs for the scrollable sections
//   const scheduleRef = useRef(null);
//   const galleryRef = useRef(null);
//   const videoRef = useRef(null);

//   // Sport-specific data
//   const sportData = {
//     volleyball: {
//       title: 'Hostel Volleyball League',
//       color: 'bg-blue-500',
//       borderColor: 'border-blue-500',
//       textColor: 'text-blue-600',
//       gradient: 'from-blue-50 to-blue-100',
//       heroImages: [
//         "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80",
//         "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80",
//         "https://images.unsplash.com/photo-1592656094267-764a60323e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80"
//       ],
//       games: [
//         "Team Registration",
//         "Spike Competition",
//         "Serve Accuracy Challenge",
//         "Block Contest"
//       ]
//     },
//     cricket: {
//       title: 'Hostel Cricket League',
//       color: 'bg-green-500',
//       borderColor: 'border-green-500',
//       textColor: 'text-green-600',
//       gradient: 'from-green-50 to-green-100',
//       heroImages: [
//         "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80",
//         "https://images.unsplash.com/photo-1626005569286-118226642330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80",
//         "https://images.unsplash.com/photo-1626005568966-066f2e8a0e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80"
//       ],
//       games: [
//         "Team Registration",
//         "Batting Challenge",
//         "Bowling Competition",
//         "Fielding Contest"
//       ]
//     },
//     football: {
//       title: 'Hostel Football League',
//       color: 'bg-purple-500',
//       borderColor: 'border-purple-500',
//       textColor: 'text-purple-600',
//       gradient: 'from-purple-50 to-purple-100',
//       heroImages: [
//         "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80",
//         "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=80",
//         "https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=80"
//       ],
//       games: [
//         "Team Registration",
//         "Penalty Shootout",
//         "Dribbling Challenge",
//         "Long Pass Competition"
//       ]
//     }
//   };

//   const currentSport = sportData[sport] || sportData.volleyball;

//   // Handles game registration form submission
//   const handleGameRegistration = (e) => {
//     e.preventDefault();
//     console.log('Game registration:', gameRegistration);
//     setGameRegistration('');
//     alert(`Successfully registered for ${gameRegistration}`);
//   };

//   // Handles donation form submission
//   const handleDonation = (e) => {
//     e.preventDefault();
//     console.log('Donation amount:', donationAmount, 'for year', selectedYear);
//     alert(`Thank you for your donation of ₹${donationAmount} for ${selectedYear}`);
//     setDonationAmount(0);
//   };

//   // Student Donation System Functions
//   const yearPrices = {
//     firstYear: 100,
//     secondYear: 150,
//     thirdYear: 200,
//     fourthYear: 250
//   };

//   const yearDetails = {
//     firstYear: {
//       title: "First Year",
//       amount: yearPrices.firstYear,
//       image: "https://images.unsplash.com/photo-1549417227-0c7f46c641f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     secondYear: {
//       title: "Second Year",
//       amount: yearPrices.secondYear,
//       image: "https://images.unsplash.com/photo-1552581249-f9c94c929e71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     thirdYear: {
//       title: "Third Year",
//       amount: yearPrices.thirdYear,
//       image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     fourthYear: {
//       title: "Fourth Year",
//       amount: yearPrices.fourthYear,
//       image: "https://images.unsplash.com/photo-1517486803277-2f7823e59074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
//   };

//   const handleYearSelect = (year) => {
//     setDonationYear(year);
//     setPaymentData(prev => ({
//       ...prev,
//       amount: yearPrices[year]
//     }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleDonationSubmit = (e) => {
//     e.preventDefault();
//     console.log('Payment submitted:', { ...paymentData, year: donationYear });
//     handleCloseDonationPopup();
//     alert(`Thank you for your donation of ₹${paymentData.amount}`);
//   };

//   const handleCloseDonationPopup = () => {
//     setIsDonationPopupOpen(false);
//     setDonationYear(null);
//     setPaymentData({
//       name: '',
//       branch: '',
//       enrollment: '',
//       amount: '',
//       paymentMethod: 'upi'
//     });
//   };

//   // The useEffect hook for automatic scrolling
//   useEffect(() => {
//     let scrollIntervals = [];

//     if (isPlaying) {
//       const refs = [scheduleRef, galleryRef, videoRef];
//       scrollIntervals = refs.map(ref => {
//         let scrollAmount = 0;
//         let direction = 1; // 1 for right, -1 for left

//         return setInterval(() => {
//           if (ref.current) {
//             // Check if we've reached the end of the scrollable area
//             if (scrollAmount >= ref.current.scrollWidth - ref.current.clientWidth) {
//               direction = -1; // Change direction to scroll left
//             } else if (scrollAmount <= 0) {
//               direction = 1; // Change direction to scroll right
//             }

//             // Update the scroll amount and apply it
//             scrollAmount += direction * 2; // Adjust speed here
//             ref.current.scrollTo({
//               left: scrollAmount,
//               behavior: 'smooth'
//             });
//           }
//         }, 50); // The time between each scroll step (speed)
//       });
//     }

//     // Cleanup function to clear all intervals when the component unmounts or isPlaying changes
//     return () => {
//       scrollIntervals.forEach(clearInterval);
//     };
//   }, [isPlaying]);

//   const events = [
//     {
//       day: "Week 1",
//       title: "Qualifying Rounds",
//       description: "Initial matches to determine the top teams for the league.",
//       image: currentSport.heroImages[0],
//       color: `${currentSport.borderColor}`
//     },
//     {
//       day: "Week 2",
//       title: "Group Stage",
//       description: "Teams compete in groups to advance to the knockout stage.",
//       image: currentSport.heroImages[1],
//       color: `${currentSport.borderColor}`
//     },
//     {
//       day: "Week 3",
//       title: "Quarter Finals",
//       description: "Top eight teams battle for a spot in the semi-finals.",
//       image: currentSport.heroImages[2],
//       color: `${currentSport.borderColor}`
//     },
//     {
//       day: "Week 4",
//       title: "Semi Finals",
//       description: "The final four teams compete for a place in the championship.",
//       image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//       color: `${currentSport.borderColor}`
//     },
//     {
//       day: "Final Week",
//       title: "Championship Match",
//       description: "The two best teams face off for the championship title.",
//       image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZmluYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//       color: `${currentSport.borderColor}`
//     },
//     {
//       day: "Awards",
//       title: "Prize Distribution",
//       description: "Celebration and award ceremony for all participants.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpemUlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//       color: `${currentSport.borderColor}`
//     }
//   ];

//   const galleryImages = [
//     currentSport.heroImages[0],
//     currentSport.heroImages[1],
//     currentSport.heroImages[2],
//     "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZmluYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpemUlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//   ];

//   const videoSources = [
//     { src: "/videos/sports-highlight1.mp4", poster: currentSport.heroImages[0] },
//     { src: "/videos/sports-highlight2.mp4", poster: currentSport.heroImages[1] },
//     { src: "/videos/sports-highlight3.mp4", poster: currentSport.heroImages[2] },
//   ];

//   const expenditureData = [
//     { date: "Oct 5", description: "Equipment & Gear", amount: "15,000" },
//     { date: "Oct 6", description: "Ground Preparation", amount: "10,000" },
//     { date: "Oct 7", description: "Referees & Officials", amount: "8,000" },
//     { date: "Oct 8", description: "Trophies & Medals", amount: "12,000" },
//     { date: "Oct 9", description: "Refreshments", amount: "7,000" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
//   };

//   const yearCardVariants = {
//     initial: { y: 20, opacity: 0 },
//     animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
//   };

//   return (
//     <div className={`min-h-screen bg-gradient-to-br ${currentSport.gradient} font-sans text-gray-800`}>
//       {/* Hero Section */}
//       <div className="relative h-[80vh] w-full overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="w-full h-full animate-hero-slide">
//             <img src={currentSport.heroImages[0]} alt={`${currentSport.title} 1`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" />
//             <img src={currentSport.heroImages[1]} alt={`${currentSport.title} 2`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '5s' }} />
//             <img src={currentSport.heroImages[2]} alt={`${currentSport.title} 3`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '10s' }} />
//           </div>
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center p-8 text-center text-white z-10">
//           <div className="mb-4 animate-fade-in-up">
//             <span className="text-xl md:text-2xl font-light tracking-widest animate-pulse text-white/80">
//               HOSTEL'S ANNUAL
//             </span>
//           </div>
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 drop-shadow-2xl tracking-tighter animate-fade-in-up bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             {currentSport.title}
//           </h1>
//           <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
//             <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">
//               2025
//             </span>
//           </div>
//           <p className="text-lg md:text-xl lg:text-2xl max-w-4xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
//             Join us for the most exciting {sport} tournament of the year. Show your skills, compete for glory, and win amazing prizes.
//           </p>
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-medium mt-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
//             <div className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <span>Hostel Grounds, October 12-30</span>
//             </div>
//             <span className="hidden md:inline text-white">•</span>
//             <div className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>4:00 PM Daily</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
//         <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-200 backdrop-blur-sm bg-white/80">
          
//           {/* Header & Action Buttons */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Event Management & Registration</h2>
//               <p className="text-gray-600 mt-1">
//                 Explore event details, donate, and register for games.
//               </p>
//             </div>
//             <div className="flex gap-3 flex-wrap">
//               <button 
//                 onClick={() => setIsDonationPopupOpen(true)}
//                 className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
//               >
//                 Student Donation
//               </button>
//               <button className="px-5 py-2.5 bg-blue-500 text-white rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 shadow-md">Share</button>
//             </div>
//           </div>

//           {/* Tabbed Interface */}
//           <div className="mb-8">
//             <div className="flex flex-wrap gap-2 border-b-2 border-gray-200">
//               <button 
//                 className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'registration' ? `${currentSport.color} text-white shadow-inner` : 'bg-gray-100 hover:bg-gray-200'}`}
//                 onClick={() => setActiveTab('registration')}
//               >
//                 Games Registration
//               </button>
//               <button 
//                 className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'expenditure' ? `${currentSport.color} text-white shadow-inner` : 'bg-gray-100 hover:bg-gray-200'}`}
//                 onClick={() => setActiveTab('expenditure')}
//               >
//                 Expenditure Report
//               </button>
              
//             </div>

//             {/* Tab Content */}
//             <div className="mt-6 p-6 bg-gray-50 rounded-b-xl rounded-tr-xl border border-gray-200">
//               {activeTab === 'expenditure' && (
//                 <div>
//                   <h3 className="text-xl font-bold mb-4 text-gray-700">Expenditure Details</h3>
//                   <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
//                     <table className="min-w-full bg-white">
//                       <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
//                         <tr>
//                           <th className="py-3 px-4 text-left">Date</th>
//                           <th className="py-3 px-4 text-left">Description</th>
//                           <th className="py-3 px-4 text-left">Amount (₹)</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-200">
//                         {expenditureData.map((item, index) => (
//                           <tr key={index} className="hover:bg-gray-50 transition-colors">
//                             <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
//                             <td className="py-3 px-4">{item.description}</td>
//                             <td className="py-3 px-4">{item.amount}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'registration' && (
//                 <div>
//                   <h3 className="text-xl font-bold mb-4 text-gray-700">Register for Games</h3>
//                   <form onSubmit={handleGameRegistration} className="space-y-4">
//                     <select
//                       value={gameRegistration}
//                       onChange={(e) => setGameRegistration(e.target.value)}
//                       className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//                       required
//                     >
//                       <option value="">Select a game to register</option>
//                       {currentSport.games.map((game, index) => (
//                         <option key={index} value={game}>{game}</option>
//                       ))}
//                     </select>
//                     <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-[1.01]">
//                       Register Now
//                     </button>
//                   </form>
//                 </div>
//               )}

              
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr className="my-12 border-t-2 border-gray-300" />

//       {/* Event Schedule Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-2">Event Schedule</h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
//           Follow the tournament progression from qualifying rounds to the championship match.
//         </p>
        
//         <div ref={scheduleRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
//           {events.map((event, index) => (
//             <div key={index} className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden border-b-4 ${event.color} transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center`}>
//               <div className="h-44 overflow-hidden">
//                 <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
//               </div>
//               <div className="p-5 text-center">
//                 <span className="text-xs font-semibold uppercase text-gray-500 tracking-wide">{event.day}</span>
//                 <h3 className="font-bold text-lg md:text-xl mt-1 mb-1">{event.title}</h3>
//                 <p className="text-sm text-gray-500">{event.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <hr className="my-12 border-t-2 border-gray-300" />

//       {/* Memories & Video Section with Auto-Slide Controls */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Gallery Section with Controls */}
//         <div className="mb-16">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Memories from Past Events</h2>
//             <button 
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-600"
//             >
//               {isPlaying ? (
//                 <>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                   Pause
//                 </>
//               ) : (
//                 <>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Play
//                 </>
//               )}
//             </button>
//           </div>
          
//           <div ref={galleryRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
//             {galleryImages.map((img, index) => (
//               <div key={index} className="flex-shrink-0 w-80 h-52 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center">
//                 <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Video Section with Controls */}
//         <div>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Watch the Highlights</h2>
//             <button 
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-600"
//             >
//               {isPlaying ? (
//                 <>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                   Pause
//                 </>
//               ) : (
//                 <>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Play
//                 </>
//               )}
//             </button>
//           </div>
          
//           <div ref={videoRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
//             {videoSources.map((video, index) => (
//               <div key={index} className="flex-shrink-0 w-full max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300 snap-center">
//                 <video 
//                   className="w-full" 
//                   controls 
//                   autoPlay={isPlaying && index === 0}
//                   muted 
//                   loop
//                   poster={video.poster}
//                 >
//                   <source src={video.src} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Side Information Panel (Fixed) */}
//       <div 
//         className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-l-3xl p-6 hidden xl:block w-80 z-20 transition-all duration-300 ease-in-out ${isHovering ? 'translate-x-0' : 'translate-x-[280px]'}`}
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         <div className={`absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 px-4 py-2 ${currentSport.color} text-white font-semibold rounded-t-lg shadow-lg cursor-pointer`}>
//           Details
//         </div>
//         <h3 className="font-bold text-2xl mb-4 text-gray-800">Event Details</h3>
//         <div className="space-y-4">
//           <div className="flex items-center gap-4">
//             <span className="text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </span>
//             <div>
//               <p className="font-semibold">Date</p>
//               <p className="text-sm text-gray-600">October 12-30, 2025</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </span>
//             <div>
//               <p className="font-semibold">Location</p>
//               <p className="text-sm text-gray-600">Hostel Sports Ground</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </span>
//             <div>
//               <p className="font-semibold">Timings</p>
//               <p className="text-sm text-gray-600">4:00 PM - 7:00 PM Daily</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-blue-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </span>
//             <div>
//               <p className="font-semibold">Participants</p>
//               <p className="text-sm text-gray-600">All Hostel Students</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Student Donation Popup */}
//       <AnimatePresence>
//         {isDonationPopupOpen && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Beautiful background overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-400/30 to-red-500/20 backdrop-blur-sm"></div>
            
//             {/* Decorative elements */}
//             <div className="absolute inset-0 overflow-hidden">
//               <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//             </div>

//             <motion.div
//               className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform border-2 border-amber-200 relative z-10"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {/* Header with decorative elements */}
//               <div className="relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
//                 <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-amber-400 rounded-full opacity-20"></div>
//                 <div className="absolute bottom-0 left-0 w-16 h-16 -ml-8 -mb-8 bg-orange-400 rounded-full opacity-20"></div>
                
//                 {/* Close button with better styling */}
//                 <button 
//                   onClick={handleCloseDonationPopup}
//                   className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="p-8 relative">
//                 <AnimatePresence mode="wait">
//                   {!donationYear ? (
//                     <motion.div
//                       key="year-selection"
//                       initial={{ opacity: 0, x: -50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 50 }}
//                       transition={{ duration: 0.3 }}
//                       className="space-y-4"
//                     >
//                       <h3 className="text-3xl font-extrabold text-center text-orange-600 mb-2">
//                         Select Your Year
//                       </h3>
//                       <p className="text-center text-gray-600 mb-6">
//                         Choose your academic year
//                       </p>
//                       {Object.keys(yearDetails).map((key, index) => (
//                         <motion.div
//                           key={key}
//                           className="relative p-6 border-2 border-amber-200 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group bg-white"
//                           onClick={() => handleYearSelect(key)}
//                           variants={yearCardVariants}
//                           initial="initial"
//                           animate="animate"
//                           custom={index}
//                           whileHover={{ y: -5 }}
//                         >
//                           <div
//                             className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
//                             style={{ backgroundImage: `url(${yearDetails[key].image})` }}
//                           ></div>
//                           <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 group-hover:from-amber-400/10 group-hover:to-orange-400/10 transition-all"></div>
                          
//                           <div className="relative z-10 flex items-center justify-between">
//                             <div>
//                               <h4 className="font-bold text-xl text-orange-800">{yearDetails[key].title}</h4>
//                               <p className="text-gray-700 mt-1 text-sm">
//                                 Suggested donation
//                               </p>
//                             </div>
//                             <div className="text-right">
//                               <span className="font-bold text-green-600 text-xl">₹{yearDetails[key].amount}</span>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                       <div className="pt-4 flex justify-center">
//                         <button
//                           type="button"
//                           onClick={handleCloseDonationPopup}
//                           className="py-2 px-6 bg-gray-400 text-white font-semibold rounded-xl transition-all hover:bg-gray-500 hover:scale-[1.02] shadow-md"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.form
//                       key="payment-form"
//                       onSubmit={handleDonationSubmit}
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       transition={{ duration: 0.3 }}
//                       className="space-y-5"
//                     >
//                       <h3 className="text-3xl font-extrabold text-center text-orange-600 mb-2">
//                         Payment Details
//                       </h3>
//                       <p className="text-center text-gray-600 mb-6">
//                         Complete your donation
//                       </p>
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={paymentData.name}
//                           onChange={handleInputChange}
//                           className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-colors bg-white"
//                           required
//                           placeholder="Enter your full name"
//                         />
//                       </div>
                      
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Branch</label>
//                         <input
//                           type="text"
//                           name="branch"
//                           value={paymentData.branch}
//                           onChange={handleInputChange}
//                           className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-colors bg-white"
//                           required
//                           placeholder="e.g., Computer Engineering"
//                         />
//                       </div>
                      
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
//                         <input
//                           type="text"
//                           name="enrollment"
//                           value={paymentData.enrollment}
//                           onChange={handleInputChange}
//                           className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-colors bg-white"
//                           required
//                           placeholder="Enter your enrollment number"
//                         />
//                       </div>
                      
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
//                         <div className="relative">
//                           <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
//                           <input
//                             type="number"
//                             value={paymentData.amount}
//                             className="w-full p-3 pl-8 border-2 border-amber-200 rounded-xl bg-amber-50 text-gray-700 font-medium"
//                             readOnly
//                           />
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Payment Method</label>
//                         <select
//                           name="paymentMethod"
//                           value={paymentData.paymentMethod}
//                           onChange={handleInputChange}
//                           className="w-full p-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 bg-white"
//                         >
//                           <option value="upi">UPI</option>
//                           <option value="card">Credit/Debit Card</option>
//                           <option value="netbanking">Net Banking</option>
//                           <option value="cash">Cash</option>
//                         </select>
//                       </div>
                      
//                       <div className="flex gap-4 pt-4">
//                         <motion.button
//                           type="button"
//                           onClick={() => setDonationYear(null)}
//                           className="flex-1 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold rounded-xl transition-all hover:from-gray-500 hover:to-gray-600 hover:scale-[1.02] shadow-md"
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           Back
//                         </motion.button>
//                         <button
//                           type="submit"
//                           className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl transition-all hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02] shadow-md"
//                         >
//                           Pay Now
//                         </button>
//                       </div>
//                     </motion.form>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SportsLeaguePage;






















import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SportsLeaguePage = () => {
  const { sport } = useParams();
  const [activeTab, setActiveTab] = useState('registration');
  const [gameRegistration, setGameRegistration] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [donationAmount, setDonationAmount] = useState(0);
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);
  const [donationYear, setDonationYear] = useState(null);
  const [paymentData, setPaymentData] = useState({
    name: '',
    branch: '',
    enrollment: '',
    amount: '',
    paymentMethod: 'upi'
  });

  // Use refs for the scrollable sections
  const scheduleRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  // Sport-specific data
  const sportData = {
    volleyball: {
      title: 'Hostel Volleyball League',
      color: 'bg-blue-500',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600',
      gradient: 'from-blue-50 to-blue-100',
      heroImages: [
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1592656094267-764a60323e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80"
      ],
      games: [
        { id: 'team-reg', name: "Team Registration", fee: 500 },
        { id: 'spike-comp', name: "Spike Competition", fee: 100 },
        { id: 'serve-acc', name: "Serve Accuracy Challenge", fee: 50 },
        { id: 'block-contest', name: "Block Contest", fee: 75 }
      ],
      // Volleyball-specific gallery images
      galleryImages: [
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1592656094267-764a60323e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
      ],
      // Volleyball-specific videos
      videoSources: [
        { 
          id: 'vb-highlight-1',
          src: "https://assets.mixkit.co/videos/preview/mixkit-volleyball-player-hitting-the-ball-1172-large.mp4", 
          poster: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
          title: "Volleyball Spike Highlights"
        },
        { 
          id: 'vb-highlight-2',
          src: "https://assets.mixkit.co/videos/preview/mixkit-group-of-volleyball-players-jumping-at-the-net-1175-large.mp4", 
          poster: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sbGV5YmFsbCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
          title: "Team Volleyball Action"
        },
        { 
          id: 'vb-highlight-3',
          src: "https://assets.mixkit.co/videos/preview/mixkit-volleyball-player-making-a-dive-1174-large.mp4", 
          poster: "https://images.unsplash.com/photo-1592656094267-764a60323e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
          title: "Defensive Dives"
        },
      ]
    },
    cricket: {
      title: 'Hostel Cricket League',
      color: 'bg-green-500',
      borderColor: 'border-green-500',
      textColor: 'text-green-600',
      gradient: 'from-green-50 to-green-100',
      heroImages: [
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1626005569286-118226642330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1626005568966-066f2e8a0e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80"
      ],
      games: [
        { id: 'team-reg', name: "Team Registration", fee: 600 },
        { id: 'batting-chal', name: "Batting Challenge", fee: 120 },
        { id: 'bowling-comp', name: "Bowling Competition", fee: 80 },
        { id: 'fielding-contest', name: "Fielding Contest", fee: 70 }
      ],
      // Cricket-specific gallery images
      galleryImages: [
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1626005569286-118226642330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1626005568966-066f2e8a0e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1626005569307-b7c117836033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1626005568965-2b2d0eaff8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNyaWNretz8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1626005569313-4b9b9b9b9b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
      ],
      // Cricket-specific videos
      videoSources: [
        { 
          id: 'cricket-highlight-1',
          src: "https://assets.mixkit.co/videos/preview/mixkit-cricket-batsman-hitting-the-ball-3145-large.mp4", 
          poster: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
          title: "Batting Highlights"
        },
        { 
          id: 'cricket-highlight-2',
          src: "https://assets.mixkit.co/videos/preview/mixkit-bowler-bowling-a-ball-in-cricket-3147-large.mp4", 
          poster: "https://images.unsplash.com/photo-1626005569286-118226642330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
          title: "Bowling Action"
        },
        { 
          id: 'cricket-highlight-3',
          src: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-cricket-wicket-3148-large.mp4", 
          poster: "https://images.unsplash.com/photo-1626005568966-066f2e8a0e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
          title: "Wicket Moments"
        },
      ]
    },
    football: {
      title: 'Hostel Football League',
      color: 'bg-purple-500',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600',
      gradient: 'from-purple-50 to-purple-100',
      heroImages: [
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=80"
      ],
      games: [
        { id: 'team-reg', name: "Team Registration", fee: 550 },
        { id: 'penalty-shoot', name: "Penalty Shootout", fee: 90 },
        { id: 'dribble-chal', name: "Dribbling Challenge", fee: 60 },
        { id: 'long-pass', name: "Long Pass Competition", fee: 65 }
      ],
      // Football-specific gallery images
      galleryImages: [
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80"
      ],
      // Football-specific videos
      videoSources: [
        { 
          id: 'football-highlight-1',
          src: "https://assets.mixkit.co/videos/preview/mixkit-football-player-kicking-ball-into-goal-1261-large.mp4", 
          poster: "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
          title: "Goal Scoring"
        },
        { 
          id: 'football-highlight-2',
          src: "https://assets.mixkit.co/videos/preview/mixkit-soccer-player-dribbling-and-kicking-1262-large.mp4", 
          poster: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
          title: "Dribbling Skills"
        },
        { 
          id: 'football-highlight-3',
          src: "https://assets.mixkit.co/videos/preview/mixkit-soccer-goalkeeper-making-a-save-1263-large.mp4", 
          poster: "https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
          title: "Goalkeeper Saves"
        },
      ]
    }
  };

  const currentSport = sportData[sport] || sportData.volleyball;

  // Handles game registration form submission
  const handleGameRegistration = (e) => {
    e.preventDefault();
    const selectedGame = currentSport.games.find(game => game.id === gameRegistration);
    console.log('Game registration:', selectedGame);
    setGameRegistration('');
    alert(`Successfully registered for ${selectedGame.name}. Registration fee: ₹${selectedGame.fee}`);
  };

  // Handles donation form submission
  const handleDonation = (e) => {
    e.preventDefault();
    console.log('Donation amount:', donationAmount, 'for year', selectedYear);
    alert(`Thank you for your donation of ₹${donationAmount} for ${selectedYear}`);
    setDonationAmount(0);
  };

  // Student Donation System Functions
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
    setDonationYear(year);
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

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', { ...paymentData, year: donationYear });
    handleCloseDonationPopup();
    alert(`Thank you for your donation of ₹${paymentData.amount}`);
  };

  const handleCloseDonationPopup = () => {
    setIsDonationPopupOpen(false);
    setDonationYear(null);
    setPaymentData({
      name: '',
      branch: '',
      enrollment: '',
      amount: '',
      paymentMethod: 'upi'
    });
  };

  // The useEffect hook for automatic scrolling
  useEffect(() => {
    let scrollIntervals = [];

    if (isPlaying) {
      const refs = [scheduleRef, galleryRef, videoRef];
      scrollIntervals = refs.map(ref => {
        let scrollAmount = 0;
        let direction = 1; // 1 for right, -1 for left

        return setInterval(() => {
          if (ref.current) {
            // Check if we've reached the end of the scrollable area
            if (scrollAmount >= ref.current.scrollWidth - ref.current.clientWidth) {
              direction = -1; // Change direction to scroll left
            } else if (scrollAmount <= 0) {
              direction = 1; // Change direction to scroll right
            }

            // Update the scroll amount and apply it
            scrollAmount += direction * 2; // Adjust speed here
            ref.current.scrollTo({
              left: scrollAmount,
              behavior: 'smooth'
            });
          }
        }, 50); // The time between each scroll step (speed)
      });
    }

    // Cleanup function to clear all intervals when the component unmounts or isPlaying changes
    return () => {
      scrollIntervals.forEach(clearInterval);
    };
  }, [isPlaying]);

  // Event schedule with registration functionality
  const [eventRegistrations, setEventRegistrations] = useState({});
  
  const handleEventRegistration = (eventId) => {
    setEventRegistrations(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
    
    const event = events.find(e => e.id === eventId);
    alert(eventRegistrations[eventId] 
      ? `Cancelled registration for ${event.title}` 
      : `Successfully registered for ${event.title}`
    );
  };

  const events = [
    {
      id: "qualifying",
      day: "Week 1",
      title: "Qualifying Rounds",
      description: "Initial matches to determine the top teams for the league.",
      image: currentSport.heroImages[0],
      color: `${currentSport.borderColor}`,
      registrationFee: 200,
      maxParticipants: 16
    },
    {
      id: "group-stage",
      day: "Week 2",
      title: "Group Stage",
      description: "Teams compete in groups to advance to the knockout stage.",
      image: currentSport.heroImages[1],
      color: `${currentSport.borderColor}`,
      registrationFee: 300,
      maxParticipants: 8
    },
    {
      id: "quarter-finals",
      day: "Week 3",
      title: "Quarter Finals",
      description: "Top eight teams battle for a spot in the semi-finals.",
      image: currentSport.heroImages[2],
      color: `${currentSport.borderColor}`,
      registrationFee: 400,
      maxParticipants: 8
    },
    {
      id: "semi-finals",
      day: "Week 4",
      title: "Semi Finals",
      description: "The final four teams compete for a place in the championship.",
      image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: `${currentSport.borderColor}`,
      registrationFee: 500,
      maxParticipants: 4
    },
    {
      id: "championship",
      day: "Final Week",
      title: "Championship Match",
      description: "The two best teams face off for the championship title.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZmluYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: `${currentSport.borderColor}`,
      registrationFee: 0,
      maxParticipants: 2
    },
    {
      id: "awards",
      day: "Awards",
      title: "Prize Distribution",
      description: "Celebration and award ceremony for all participants.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpemUlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: `${currentSport.borderColor}`,
      registrationFee: 0,
      maxParticipants: 'All'
    }
  ];

  const expenditureData = [
    { date: "Oct 5", description: "Equipment & Gear", amount: "15,000" },
    { date: "Oct 6", description: "Ground Preparation", amount: "10,000" },
    { date: "Oct 7", description: "Referees & Officials", amount: "8,000" },
    { date: "Oct 8", description: "Trophies & Medals", amount: "12,000" },
    { date: "Oct 9", description: "Refreshments", amount: "7,000" },
  ];

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
    <div className={`min-h-screen bg-gradient-to-br ${currentSport.gradient} font-sans text-gray-800`}>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full animate-hero-slide">
            <img src={currentSport.heroImages[0]} alt={`${currentSport.title} 1`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" />
            <img src={currentSport.heroImages[1]} alt={`${currentSport.title} 2`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '5s' }} />
            <img src={currentSport.heroImages[2]} alt={`${currentSport.title} 3`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '10s' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center p-8 text-center text-white z-10">
          <div className="mb-4 animate-fade-in-up">
            <span className="text-xl md:text-2xl font-light tracking-widest animate-pulse text-white/80">
              HOSTEL'S ANNUAL
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 drop-shadow-2xl tracking-tighter animate-fade-in-up bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {currentSport.title}
          </h1>
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">
              2025
            </span>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
            Join us for the most exciting {sport} tournament of the year. Show your skills, compete for glory, and win amazing prizes.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-medium mt-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hostel Grounds, October 12-30</span>
            </div>
            <span className="hidden md:inline text-white">•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>4:00 PM Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-200 backdrop-blur-sm bg-white/80">
          
          {/* Header & Action Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Event Management & Registration</h2>
              <p className="text-gray-600 mt-1">
                Explore event details, donate, and register for games.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button 
                onClick={() => setIsDonationPopupOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
              >
                Student Donation
              </button>
              <button className="px-5 py-2.5 bg-blue-500 text-white rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 shadow-md">Share</button>
            </div>
          </div>

          {/* Tabbed Interface */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b-2 border-gray-200">
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'registration' ? `${currentSport.color} text-white shadow-inner` : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('registration')}
              >
                Games Registration
              </button>
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'expenditure' ? `${currentSport.color} text-white shadow-inner` : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('expenditure')}
              >
                Expenditure Report
              </button>
              
            </div>

            {/* Tab Content */}
            <div className="mt-6 p-6 bg-gray-50 rounded-b-xl rounded-tr-xl border border-gray-200">
              {activeTab === 'expenditure' && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Expenditure Details</h3>
                  <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
                    <table className="min-w-full bg-white">
                      <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left">Date</th>
                          <th className="py-3 px-4 text-left">Description</th>
                          <th className="py-3 px-4 text-left">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {expenditureData.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
                            <td className="py-3 px-4">{item.description}</td>
                            <td className="py-3 px-4">{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'registration' && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Register for Games</h3>
                  <form onSubmit={handleGameRegistration} className="space-y-4">
                    <select
                      value={gameRegistration}
                      onChange={(e) => setGameRegistration(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      required
                    >
                      <option value="">Select a game to register</option>
                      {currentSport.games.map((game, index) => (
                        <option key={index} value={game.id}>{game.name} (₹{game.fee})</option>
                      ))}
                    </select>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-[1.01]">
                      Register Now
                    </button>
                  </form>
                </div>
              )}

              
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 border-t-2 border-gray-300" />

      {/* Event Schedule Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-2">Event Schedule</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Follow the tournament progression from qualifying rounds to the championship match.
        </p>
        
        <div ref={scheduleRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
          {events.map((event, index) => (
            <div key={index} className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden border-b-4 ${event.color} transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center`}>
              <div className="h-44 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase text-gray-500 tracking-wide">{event.day}</span>
                <h3 className="font-bold text-lg md:text-xl mt-1 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{event.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>Fee: ₹{event.registrationFee}</span>
                  <span>Max: {event.maxParticipants} {typeof event.maxParticipants === 'number' ? 'teams' : ''}</span>
                </div>
                
                <button 
                  onClick={() => handleEventRegistration(event.id)}
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    eventRegistrations[event.id] 
                      ? 'bg-gray-500 text-white hover:bg-gray-600' 
                      : `${currentSport.color} text-white hover:${currentSport.color.replace('500', '600')}`
                  }`}
                >
                  {eventRegistrations[event.id] ? 'Cancel Registration' : 'Register for Event'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-12 border-t-2 border-gray-300" />

      {/* Memories & Video Section with Auto-Slide Controls */}
      <div className="container mx-auto px-4 py-8">
        {/* Gallery Section with Controls */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Memories from Past Events</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-600"
            >
              {isPlaying ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
          
          <div ref={galleryRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
            {currentSport.galleryImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-52 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center">
                <img src={img} alt={`${currentSport.title} Memory ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Video Section with Controls */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Watch the Highlights</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-600"
            >
              {isPlaying ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
          
          <div ref={videoRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
            {currentSport.videoSources.map((video, index) => (
              <div key={index} className="flex-shrink-0 w-full max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300 snap-center">
                <div className="p-4 bg-gray-800 text-white">
                  <h4 className="font-bold text-lg">{video.title}</h4>
                </div>
                <video 
                  className="w-full" 
                  controls 
                  autoPlay={isPlaying && index === 0}
                  muted 
                  loop
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Information Panel (Fixed) */}
      <div 
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-l-3xl p-6 hidden xl:block w-80 z-20 transition-all duration-300 ease-in-out ${isHovering ? 'translate-x-0' : 'translate-x-[280px]'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 px-4 py-2 ${currentSport.color} text-white font-semibold rounded-t-lg shadow-lg cursor-pointer`}>
          Details
        </div>
        <h3 className="font-bold text-2xl mb-4 text-gray-800">Event Details</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Date</p>
              <p className="text-sm text-gray-600">October 12-30, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-gray-600">Hostel Sports Ground</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Timings</p>
              <p className="text-sm text gray-600">4:00 PM - 7:00 PM Daily</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Participants</p>
              <p className="text-sm text-gray-600">All Hostel Students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Donation Popup */}
      <AnimatePresence>
        {isDonationPopupOpen && (
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
                  onClick={handleCloseDonationPopup}
                  className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8 relative">
                <AnimatePresence mode="wait">
                  {!donationYear ? (
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
                          onClick={handleCloseDonationPopup}
                          className="py-2 px-6 bg-gray-400 text-white font-semibold rounded-xl transition-all hover:bg-gray-500 hover:scale-[1.02] shadow-md"
                        >
                          Cancel
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="payment-form"
                      onSubmit={handleDonationSubmit}
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
                          onClick={() => setDonationYear(null)}
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
    </div>
  );
};

export default SportsLeaguePage;