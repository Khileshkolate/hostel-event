// // GaneshChaturthiPage.js
// import React, { useState } from 'react';

// const GaneshChaturthiPage = () => {
//   const [activeTab, setActiveTab] = useState('donation');
//   const [donationAmount, setDonationAmount] = useState('');
//   const [donationName, setDonationName] = useState('');
//   const [expenseAmount, setExpenseAmount] = useState('');
//   const [expenseDescription, setExpenseDescription] = useState('');
//   const [gameRegistration, setGameRegistration] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   const handleDonationSubmit = (e) => {
//     e.preventDefault();
//     // Handle donation submission
//     console.log('Donation submitted:', { donationName, donationAmount });
//     setDonationAmount('');
//     setDonationName('');
//   };

//   const handleExpenseSubmit = (e) => {
//     e.preventDefault();
//     // Handle expense submission
//     console.log('Expense submitted:', { expenseDescription, expenseAmount });
//     setExpenseAmount('');
//     setExpenseDescription('');
//   };

//   const handleGameRegistration = (e) => {
//     e.preventDefault();
//     // Handle game registration
//     console.log('Game registration:', gameRegistration);
//     setGameRegistration('');
//   };

//   const days = [
//     {
//       day: "Day 1",
//       title: "Ganesh Sthapana",
//       description: "The ceremonial installation of Lord Ganesha's idol with traditional rituals and prayers.",
//       image: "https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 2",
//       title: "Vedic Puja & Aarti",
//       description: "Traditional Vedic prayers and aarti performed by priests and devotees.",
//       image: "https://images.unsplash.com/photo-1566378246597-5f38ca4d6c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 3",
//       title: "Bhajan Sandhya",
//       description: "An evening of devotional songs and bhajans dedicated to Lord Ganesha.",
//       image: "https://images.unsplash.com/photo-1603302576835-3756df0a5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 4",
//       title: "Cultural Night",
//       description: "Performances including dance, drama, and music celebrating Indian culture.",
//       image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 5",
//       title: "Sports Competition",
//       description: "Various games and sports activities for all hostel residents.",
//       image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwdG91cm5hbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 6",
//       title: "Workshops & Seminars",
//       description: "Educational sessions on spirituality, culture, and personal development.",
//       image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 7",
//       title: "Community Feast",
//       description: "A grand vegetarian feast for all participants and devotees.",
//       image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmJxJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 8",
//       title: "Yagna & Havan",
//       description: "Sacred fire ceremony for peace, prosperity, and well-being of all.",
//       image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 9",
//       title: "Ganesh Visarjan Preparation",
//       description: "Final prayers and preparations for the immersion ceremony.",
//       image: "https://images.unsplash.com/photo-1602087927578-6bc56c434c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FuZXNoJTIwdmlzYXJqYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       day: "Day 10",
//       title: "Ganesh Visarjan",
//       description: "The ceremonial immersion of Lord Ganesha's idol with processions and celebrations.",
//       image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//     }
//   ];

//   const galleryImages = [
//     "https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1566378246597-5f38ca4d6c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1603302576835-3756df0a5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1602087927578-6bc56c434c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FuZXNoJTIwdmlzYXJqYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//     "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//   ];

//   return (
//     <div className="ganesh-chaturthi-page min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
//       {/* Hero Section with Image */}
//       <div className="hero-section relative h-96 w-full">
//         <img 
//           src="https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80" 
//           alt="Ganesh Chaturthi Celebration" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="text-center text-white p-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-2">Ganesh Chaturthi 2025</h1>
//             <p className="text-xl mb-2">MP Theater • August 27, 2025 • 11:00 AM</p>
//             <p className="text-lg">Join us for 10 days of celebration, devotion, and community</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Box */}
//       <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
//         <div className="bg-white rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">Shree Siddhivinayak Mandal</h2>
//               <p className="text-gray-600">MP Theater • August 27 - September 5, 2025</p>
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">Share</button>
//               <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm">Register</button>
//               <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm">Donate</button>
//             </div>
//           </div>

//           {/* Dropdown Options */}
//           <div className="mb-6">
//             <div className="flex flex-wrap gap-2 border-b pb-2">
//               <button 
//                 className={`px-4 py-2 rounded-t-lg ${activeTab === 'donation' ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
//                 onClick={() => setActiveTab('donation')}
//               >
//                 Student Donation
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-t-lg ${activeTab === 'expenditure' ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
//                 onClick={() => setActiveTab('expenditure')}
//               >
//                 Expenditure
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-t-lg ${activeTab === 'games' ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
//                 onClick={() => setActiveTab('games')}
//               >
//                 Games Registration
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-t-lg ${activeTab === 'expenseForm' ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
//                 onClick={() => setActiveTab('expenseForm')}
//               >
//                 Expenditure Add Form
//               </button>
//             </div>

//             <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//               {activeTab === 'donation' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">Make a Donation</h3>
//                   <form onSubmit={handleDonationSubmit}>
//                     <div className="grid gap-4 mb-4">
//                       <input
//                         type="text"
//                         placeholder="Your Name"
//                         value={donationName}
//                         onChange={(e) => setDonationName(e.target.value)}
//                         className="p-2 border rounded-lg"
//                         required
//                       />
//                       <input
//                         type="number"
//                         placeholder="Donation Amount (₹)"
//                         value={donationAmount}
//                         onChange={(e) => setDonationAmount(e.target.value)}
//                         className="p-2 border rounded-lg"
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
//                       Submit Donation
//                     </button>
//                   </form>
//                 </div>
//               )}

//               {activeTab === 'expenditure' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">Expenditure Details</h3>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white">
//                       <thead>
//                         <tr>
//                           <th className="py-2 px-4 border-b">Date</th>
//                           <th className="py-2 px-4 border-b">Description</th>
//                           <th className="py-2 px-4 border-b">Amount (₹)</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="py-2 px-4 border-b">Aug 20</td>
//                           <td className="py-2 px-4 border-b">Ganesh Idol</td>
//                           <td className="py-2 px-4 border-b">15,000</td>
//                         </tr>
//                         <tr>
//                           <td className="py-2 px-4 border-b">Aug 21</td>
//                           <td className="py-2 px-4 border-b">Decoration Materials</td>
//                           <td className="py-2 px-4 border-b">8,500</td>
//                         </tr>
//                         <tr>
//                           <td className="py-2 px-4 border-b">Aug 22</td>
//                           <td className="py-2 px-4 border-b">Sound System</td>
//                           <td className="py-2 px-4 border-b">7,000</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'games' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">Register for Games</h3>
//                   <form onSubmit={handleGameRegistration}>
//                     <div className="mb-4">
//                       <select
//                         value={gameRegistration}
//                         onChange={(e) => setGameRegistration(e.target.value)}
//                         className="p-2 border rounded-lg w-full"
//                         required
//                       >
//                         <option value="">Select a game to register</option>
//                         <option value="Cricket">Cricket Tournament</option>
//                         <option value="Volleyball">Volleyball Match</option>
//                         <option value="Chess">Chess Competition</option>
//                         <option value="Carrom">Carrom Board</option>
//                         <option value="Tug of War">Tug of War</option>
//                       </select>
//                     </div>
//                     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//                       Register Now
//                     </button>
//                   </form>
//                 </div>
//               )}

//               {activeTab === 'expenseForm' && (
//                 <div>
//                   <h3 className="text-lg font-semibold mb-4">Add New Expense</h3>
//                   <form onSubmit={handleExpenseSubmit}>
//                     <div className="grid gap-4 mb-4">
//                       <input
//                         type="text"
//                         placeholder="Expense Description"
//                         value={expenseDescription}
//                         onChange={(e) => setExpenseDescription(e.target.value)}
//                         className="p-2 border rounded-lg"
//                         required
//                       />
//                       <input
//                         type="number"
//                         placeholder="Amount (₹)"
//                         value={expenseAmount}
//                         onChange={(e) => setExpenseAmount(e.target.value)}
//                         className="p-2 border rounded-lg"
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-lg">
//                       Add Expense
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Gallery Slider */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
//         <div className="relative">
//           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
//             {galleryImages.map((img, index) => (
//               <div key={index} className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden shadow-lg">
//                 <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-xl">
//           <video 
//             className="w-full" 
//             controls 
//             autoPlay 
//             muted 
//             loop
//             poster="https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZXNoJTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80"
//           >
//             <source src="/videos/Ganpati-video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>

//       {/* Daily Schedule Cards */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center mb-2">10 Days Schedule</h2>
//         <p className="text-center text-gray-600 mb-8">Ganesh Chaturthi 2025 - Day by Day Program</p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {days.map((day, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="h-40 overflow-hidden">
//                 <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-lg mb-1">{day.day}</h3>
//                 <h4 className="font-semibold text-orange-500 mb-2">{day.title}</h4>
//                 <p className="text-sm text-gray-600">{day.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side Information Panel */}
//       <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-l-lg p-4 hidden xl:block w-80">
//         <h3 className="font-bold text-xl mb-4 text-orange-500">Ganesh Chaturthi 2025</h3>
//         <div className="space-y-3">
//           <div className="flex items-start">
//             <span className="font-semibold w-24">Dates:</span>
//             <span>Aug 27 - Sept 5, 2025</span>
//           </div>
//           <div className="flex items-start">
//             <span className="font-semibold w-24">Location:</span>
//             <span>MP Theater and Hostel Grounds</span>
//           </div>
//           <div className="flex items-start">
//             <span className="font-semibold w-24">Timings:</span>
//             <span>6:00 AM - 10:00 PM Daily</span>
//           </div>
//           <div className="mt-4">
//             <h4 className="font-semibold mb-2">Daily Schedule:</h4>
//             <ul className="text-sm space-y-1">
//               <li>6:00 AM - Morning Aarti</li>
//               <li>8:00 AM - Prasad Distribution</li>
//               <li>12:00 PM - Maha Prasad</li>
//               <li>7:00 PM - Evening Aarti</li>
//               <li>8:00 PM - Cultural Programs</li>
//             </ul>
//           </div>
//           <div className="mt-4">
//             <h4 className="font-semibold mb-2">Special Events:</h4>
//             <ul className="text-sm space-y-1">
//               <li>Day 1: Ganesh Sthapana</li>
//               <li>Day 3: Bhajan Sandhya</li>
//               <li>Day 5: Sports Competition</li>
//               <li>Day 7: Community Feast</li>
//               <li>Day 10: Visarjan Procession</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GaneshChaturthiPage;












// // GaneshChaturthiPage.js
import React, { useState, useEffect, useRef } from 'react';
import StudentDonationSystem from "./StudentDonationSystem";

const GaneshChaturthiPage = () => {
  const [activeTab, setActiveTab] = useState('donation');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationName, setDonationName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [gameRegistration, setGameRegistration] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const scheduleRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', { donationName, donationAmount });
    setDonationAmount('');
    setDonationName('');
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    console.log('Expense submitted:', { expenseDescription, expenseAmount });
    setExpenseAmount('');
    setExpenseDescription('');
  };

  const handleGameRegistration = (e) => {
    e.preventDefault();
    console.log('Game registration:', gameRegistration);
    setGameRegistration('');
  };

  useEffect(() => {
  let scrollIntervals = [];
  
  if (isPlaying) {
    const refs = [scheduleRef, galleryRef, videoRef];
    scrollIntervals = refs.map(ref => {
      let scrollAmount = 0;
      let direction = 1; // 1 for right, -1 for left
      let isPaused = false;
      
      return setInterval(() => {
        if (ref.current && !isPaused) {
          // Change direction when reaching the end
          if (scrollAmount >= ref.current.scrollWidth - ref.current.clientWidth) {
            direction = -1;
          } else if (scrollAmount <= 0) {
            direction = 1;
          }
          
          scrollAmount += direction;
          ref.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }, 50); // Adjust speed here
    });
  }

  return () => {
    scrollIntervals.forEach(clearInterval);
  };
}, [isPlaying]);


  const days = [
    {
      day: "Day 1",
      title: "Ganesh Sthapana",
      description: "Ceremonial installation of Lord Ganesha's idol with traditional rituals and prayers.",
      image: "https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
      color: "border-orange-500"
    },
    {
      day: "Day 2",
      title: "Vedic Puja & Aarti",
      description: "Traditional Vedic prayers and aarti performed by priests and devotees.",
      image: "https://images.unsplash.com/photo-1566378246597-5f38ca4d6c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
      color: "border-red-500"
    },
    {
      day: "Day 3",
      title: "Bhajan Sandhya",
      description: "An evening of devotional songs and bhajans dedicated to Lord Ganesha.",
      image: "https://images.unsplash.com/photo-1603302576835-3756df0a5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
      color: "border-yellow-500"
    },
    {
      day: "Day 4",
      title: "Cultural Night",
      description: "Performances including dance, drama, and music celebrating Indian culture.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-green-500"
    },
    {
      day: "Day 5",
      title: "Sports Competition",
      description: "Various games and sports activities for all hostel residents.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwdG91cm5hbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-blue-500"
    },
    {
      day: "Day 6",
      title: "Workshops & Seminars",
      description: "Educational sessions on spirituality, culture, and personal development.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-purple-500"
    },
    {
      day: "Day 7",
      title: "Community Feast",
      description: "A grand vegetarian feast for all participants and devotees.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmJxJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-pink-500"
    },
    {
      day: "Day 8",
      title: "Yagna & Havan",
      description: "Sacred fire ceremony for peace, prosperity, and well-being of all.",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-teal-500"
    },
    {
      day: "Day 9",
      title: "Ganesh Visarjan Preparation",
      description: "Final prayers and preparations for the immersion ceremony.",
      image: "https://images.unsplash.com/photo-1602087927578-6bc56c434c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FuZX什JTIwdmlzYXJqYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-indigo-500"
    },
    {
      day: "Day 10",
      title: "Ganesh Visarjan",
      description: "The ceremonial immersion of Lord Ganesha's idol with processions and celebrations.",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-orange-500"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1566378246597-5f38ca4d6c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1603302576835-3756df0a5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1602087927578-6bc56c434c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FuZX什JTIwdmlzYXJqYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFnbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80"
  ];
  
  const videoSources = [
    { src: "/videos/Ganpati-video.mp4", poster: "https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" },
    { src: "/videos/Ganpati-video.mp4", poster: "https://images.unsplash.com/photo-1603302576835-3756df0a5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" },
    { src: "/videos/Ganpati-video.mp4", poster: "https://images.unsplash.com/photo-1566378246597-5f38ca4d6c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="ganesh-chaturthi-page min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 font-sans text-gray-800">
      
      {/* Enhanced Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full animate-hero-slide">
            <img src="https://images.unsplash.com/photo-1596638787647-904b822cee5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80" alt="Ganesh Celebration 1" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" />
            <img src="https://images.unsplash.com/photo-1566378246597-5f38ca4d6c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80" alt="Ganesh Celebration 2" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '5s' }} />
            <img src="https://images.unsplash.com/photo-1603302576835-3756df0a5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZX什JTIwY2hhdHVydGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80" alt="Ganesh Celebration 3" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '10s' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-8 text-center text-white z-10">
          <div className="mb-2">
            <span className="text-amber-300 text-lg md:text-xl font-light tracking-widest animate-pulse">
              WELCOME TO
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl tracking-tight animate-fade-in-up bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
            Ganesh Chaturthi
          </h1>
          <div className="mb-4">
            <span className="text-3xl md:text-5xl font-extrabold text-white animate-fade-in-up delay-100">
              2025
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-xl font-medium mb-4 drop-shadow-md animate-fade-in-up delay-200">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>MP Theater</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>August 27, 2025</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 01118 0z" />
              </svg>
              <span>11:00 AM</span>
            </div>
          </div>
          <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed animate-fade-in-up delay-300 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            Join us for 10 days of devotion, cultural festivities, and community fellowship as we celebrate the arrival of Lord Ganesha.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto border border-amber-200 backdrop-blur-sm bg-white/80">
          
          {/* Header & Action Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600">Hostel Ganesh Chaturthi </h2>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold">Dates:</span> August 27 - September 5, 2025
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-5 py-2.5 bg-blue-500 text-white rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 shadow-md">Share</button>
              <button className="px-5 py-2.5 bg-green-500 text-white rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:bg-green-600 shadow-md">Register</button>
              <button className="px-5 py-2.5 bg-red-500 text-white rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:bg-red-600 shadow-md">Donate</button>
            </div>
          </div>

          {/* Tabbed Interface */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b-2 border-amber-200">
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'donation' ? 'bg-orange-500 text-white shadow-inner' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('donation')}
              >
                Student Donation
              </button>
        
              {/*<StudentDonationSystem/>*/}
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'expenditure' ? 'bg-orange-500 text-white shadow-inner' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('expenditure')}
              >
                Expenditure
              </button>
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'games' ? 'bg-orange-500 text-white shadow-inner' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('games')}
              >
                Games Registration
              </button>
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'expenseForm' ? 'bg-orange-500 text-white shadow-inner' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('expenseForm')}
              >
                Add Expense
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 p-6 bg-gray-50 rounded-b-xl rounded-tr-xl border border-gray-200">
              {activeTab === 'donation' && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Make a Donation</h3>
                  <form onSubmit={handleDonationSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={donationName}
                      onChange={(e) => setDonationName(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Donation Amount (₹)"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      required
                    />
                    <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-[1.01]">
                      Submit Donation
                    </button>
                  </form>
                </div>
              )}

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
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Aug 20</td>
                          <td className="py-3 px-4">Ganesh Idol</td>
                          <td className="py-3 px-4">15,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Aug 21</td>
                          <td className="py-3 px-4">Decoration Materials</td>
                          <td className="py-3 px-4">8,500</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Aug 22</td>
                          <td className="py-3 px-4">Sound System</td>
                          <td className="py-3 px-4">7,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'games' && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Register for Games</h3>
                  <form onSubmit={handleGameRegistration} className="space-y-4">
                    <select
                      value={gameRegistration}
                      onChange={(e) => setGameRegistration(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      required
                    >
                      <option value="">Select a game to register</option>
                      <option value="Cricket">Cricket Tournament</option>
                      <option value="Volleyball">Volleyball Match</option>
                      <option value="Chess">Chess Competition</option>
                      <option value="Carrom">Carrom Board</option>
                      <option value="Tug of War">Tug of War</option>
                    </select>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-[1.01]">
                      Register Now
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'expenseForm' && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Add New Expense</h3>
                  <form onSubmit={handleExpenseSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Expense Description"
                      value={expenseDescription}
                      onChange={(e) => setExpenseDescription(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Amount (₹)"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                      required
                    />
                    <button type="submit" className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-red-700 hover:scale-[1.01]">
                      Add Expense
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 border-t-2 border-orange-300" />

      {/* Daily Schedule Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-600 mb-2">10-Day Schedule</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Experience the journey of devotion with our day-by-day program, from the ceremonial sthapana to the final immersion.
        </p>
        
        <div ref={scheduleRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
          {days.map((day, index) => (
            <div key={index} className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden border-b-4 ${day.color} transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center`}>
              <div className="h-44 overflow-hidden">
                <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <span className="text-xs font-semibold uppercase text-amber-500 tracking-wide">{day.day}</span>
                <h3 className="font-bold text-lg md:text-xl mt-1 mb-1">{day.title}</h3>
                <p className="text-sm text-gray-500">{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-12 border-t-2 border-orange-300" />

      {/* Memories & Video Section with Auto-Slide Controls */}
      <div className="container mx-auto px-4 py-8">
        {/* Gallery Section with Controls */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">Memories from Past Celebrations</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-orange-600"
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
            {galleryImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-52 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center">
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Video Section with Controls */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600">Watch the Highlights</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-orange-600"
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
            {videoSources.map((video, index) => (
              <div key={index} className="flex-shrink-0 w-full max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-300 snap-center">
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
        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 px-4 py-2 bg-orange-500 text-white font-semibold rounded-t-lg shadow-lg cursor-pointer">
          Details
        </div>
        <h3 className="font-bold text-2xl mb-4 text-orange-600">Event Details</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Dates</p>
              <p className="text-sm text-gray-600">Aug 27 - Sept 5, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-gray-600">MP Theater and Hostel Grounds</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Timings</p>
              <p className="text-sm text-gray-600">6:00 AM - 10:00 PM Daily</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GaneshChaturthiPage;