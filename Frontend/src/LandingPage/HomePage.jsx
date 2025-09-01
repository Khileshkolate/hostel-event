// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Slider from '../Components/Slider';
// import EventCard from '../Components/EventCard';

// const HomePage = () => {
//   const [events, setEvents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const sampleEvents = [
//       {
//   id: 1,
//   title: "Ganesh Chaturthi 2025",
//   date: "2025-08-27T19:00:00",
//   time: "11:00 AM",
//   location: "MP Theater",
//   description: "Join us for an evening of live music performances by talented residents!",
//   image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//   hasMoreInfo: true, // Added missing comma on previous line
//   moreInfoPath: "/ganesh-chaturthi"
// },
//       {
//         id: 2,
//         title: "Saraswati Puja 2025",
//         date: "2025-01-25T18:30:00",
//         time: "9:00 AM",
//         location: "MP Theater",
//         description: "Celebration of the goddess of knowledge, music, art, and wisdom.",
//         image: "https://images.unsplash.com/photo-1611141569435-bf415ee0adfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         hasMoreInfo: true,
//         moreInfoPath: "/saraswati-puja"
//       },
//       {
//         id: 3,
//         title: "Rawan Dahan 2025",
//         date: "2025-10-12T20:00:00",
//         time: "6:00 PM",
//         location: "Civil Ground",
//         description: "Ceremonial burning of Rawan's effigy symbolizing victory of good over evil.",
//         image: "https://images.unsplash.com/photo-1602087927578-6bc56c434c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmF3YW4lMjBkYWhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         hasMoreInfo: true,
//         moreInfoPath: "/rawan-dahan"
//       },
//       {
//         id: 4,
//         title: "Hostel Volleyball League [HVL]",
//         date: "2025-07-02T15:00:00",
//         time: "5:00 PM",
//         location: "Civil Ground Volleyball Court",
//         description: "Friendly competition with various games and prizes for winners!",
//         image: "/videos/img4.jpg",
//         hasMoreInfo: true,
//         moreInfoPath: "/sports/volleyball"
//       },
//       {
//         id: 5,
//         title: "Hostel Cricket League [HCL]",
//         date: "2025-07-10T19:00:00",
//         time: "7:00 PM",
//         location: "Main Hall",
//         description: "Experience diverse cultures through performances, food, and traditions.",
//         image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//        hasMoreInfo: true,
//         moreInfoPath: "/sports/cricket"
//       },
//       {
//         id: 6,
//         title: "Hostel Football League [HFL]",
//         date: "2025-07-15T14:00:00",
//         time: "2:00 PM",
//         location: "Activity Room",
//         description: "Learn new skills from photography to coding in our weekend workshops.",
//         image: "/videos/img1.jpg",
//          hasMoreInfo: true,
//         moreInfoPath: "/sports/football"
//       }
//     ];
//     setEvents(sampleEvents);
//   }, []);

//   const handleMenuClick = (menu) => {
//     const element = document.getElementById(menu);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleMoreInfoClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="App">
//       {/* Hero Section */}
//       <section id="home" className="hero h-screen relative flex items-center justify-center">
//         <Slider />
//         <div className="hero-content relative text-center text-white z-10 max-w-4xl px-5">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Welcome to Hostel Events</h1>
//           <p className="text-xl md:text-2xl mb-10 opacity-90">Discover amazing events and create unforgettable memories with our vibrant community</p>
//           <div className="hero-buttons flex gap-4 justify-center flex-wrap">
//             <button 
//               className="cta-button py-3 px-8 md:py-4 md:px-10 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 border-2 border-transparent bg-red-500 text-white hover:bg-transparent hover:border-white hover:-translate-y-1 hover:shadow-lg"
//               onClick={() => handleMenuClick('events')}
//             >
//               Explore Events
//             </button>
//             <button 
//               className="cta-button py-3 px-8 md:py-4 md:px-10 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-800 hover:-translate-y-1"
//               onClick={() => handleMenuClick('contact')}
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//         <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2 z-10 opacity-70 animate-bounce">
//           <span>Scroll Down</span>
//           <div className="scroll-arrow w-5 h-5 border-r-2 border-b-2 border-white rotate-45"></div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section id="events" className="events-section py-16 md:py-24 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="section-header text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
//               Upcoming Events
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mt-4"></span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't miss out on these exciting events happening at our hostel</p>
//           </div>
//           <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {events.map(event => (
//               <EventCard 
//                 key={event.id} 
//                 event={event} 
//                 onMoreInfo={event.hasMoreInfo ? () => handleMoreInfoClick(event.moreInfoPath) : null}
//               />
//             ))}
//           </div>
//           <div className="section-cta text-center mt-12">
//             <button className="view-all-btn py-3 px-8 md:py-4 md:px-10 bg-gradient-to-r from-blue-500 to-red-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl">
//               View All Events
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="gallery-section py-16 md:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="section-header text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
//               Photo Gallery
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mt-4"></span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Take a look at moments from our previous events</p>
//           </div>
//           <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9stGVsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmJxJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//               "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
//             ].map((img, index) => (
//               <div key={index} className="gallery-item rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-64 hover:-translate-y-1 hover:shadow-xl">
//                 <img src={img} alt={`Hostel event ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
//                 <div className="gallery-overlay absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300">
//                   <button className="gallery-view py-2 px-6 bg-white text-gray-800 border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white">
//                     View
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//      {/* About Section */}
// <section id="about" className="about-section py-16 md:py-24 bg-gradient-to-br from-purple-800 to-purple-600 text-white">
//   <div className="container mx-auto px-4">
//     <div className="section-header text-center mb-12 md:mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
//         About Us
//         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mt-4"></span>
//       </h2>
//       <p className="text-lg text-white/80 max-w-2xl mx-auto">Get to know our community and what we stand for</p>
//     </div>
//     <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//       <div className="about-text">
//         <h3 className="text-2xl md:text-3xl font-bold mb-6">Creating Memorable Experiences</h3>
//         <p className="mb-6 text-lg leading-relaxed opacity-90">We are dedicated to creating memorable experiences for our hostel residents. Our events are designed to bring people together, foster community spirit, and create lasting memories.</p>
//         <p className="mb-6 text-lg leading-relaxed opacity-90">From social gatherings to educational workshops, we offer a diverse range of activities to suit all interests. Our team works tirelessly to ensure every event is unique, engaging, and enjoyable for all participants.</p>
//         <div className="about-stats flex flex-col sm:flex-row gap-8 mt-8">
//           <div className="stat text-center">
//             <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">150+</span>
//             <span className="stat-label text-sm opacity-80">Events Organized</span>
//           </div>
//           <div className="stat text-center">
//             <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">500+</span>
//             <span className="stat-label text-sm opacity-80">Happy Participants</span>
//           </div>
//           <div className="stat text-center">
//             <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">98%</span>
//             <span className="stat-label text-sm opacity-80">Satisfaction Rate</span>
//           </div>
//         </div>
//       </div>
//       <div className="about-image rounded-xl overflow-hidden shadow-xl">
//         {/* Video element for the about section */}
//         <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             src="/videos/hostel-video.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             title="About Hostel Events"
//           />
//         </div>
//       </div>
//     </div>
    
//     {/* Testimonial Cards Slider - Images Only */}
//     <div className="testimonials-section mt-20">
//       <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Community</h3>
//       <div className="testimonials-slider relative overflow-hidden">
//         <div className="testimonials-track flex gap-6 animate-marquee whitespace-nowrap">
//           {[
//             {
//               name: "Alex Johnson",
//               image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "Sarah Williams",
//               image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "Mike Chen",
//               image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "Emma Rodriguez",
//               image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "David Kim",
//               image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "Priya Sharma",
//               image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "James Wilson",
//               image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
//             },
//             {
//               name: "Lisa Taylor",
//               image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
//             }
//           ].map((testimonial, index) => (
//             <div key={index} className="testimonial-card flex-shrink-0 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full p-2 border-4 border-white/20 overflow-hidden">
//               <img 
//                 src={testimonial.image} 
//                 alt={testimonial.name} 
//                 className="w-full h-full rounded-full object-cover" 
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>

//   <style jsx>{`
//     @keyframes marquee {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-50%); }
//     }
//     .animate-marquee {
//       animation: marquee 30s linear infinite;
//     }
//     .testimonials-track:hover {
//       animation-play-state: paused;
//     }
//   `}</style>
// </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact-section py-16 md:py-24 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="section-header text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
//               Contact Us
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mt-4"></span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get in touch with us for any questions or suggestions</p>
//           </div>
//           <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div className="contact-info">
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">We'd Love to Hear From You</h3>
//               <p className="mb-8 text-gray-600 text-lg">Have questions about upcoming events or want to suggest an event idea? Reach out to us!</p>
//               <div className="contact-details flex flex-col gap-6">
//                 <div className="contact-item flex items-start gap-4">
//                   <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📍</div>
//                   <div>
//                     <h4 className="text-gray-800 mb-2 font-semibold">Address</h4>
//                     <p className="text-gray-600">123 Hostel Street, City, Country</p>
//                   </div>
//                 </div>
//                 <div className="contact-item flex items-start gap-4">
//                   <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📧</div>
//                   <div>
//                     <h4 className="text-gray-800 mb-2 font-semibold">Email</h4>
//                     <p className="text-gray-600">info@hostelevents.com</p>
//                   </div>
//                 </div>
//                 <div className="contact-item flex items-start gap-4">
//                   <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📞</div>
//                   <div>
//                     <h4 className="text-gray-800 mb-2 font-semibold">Phone</h4>
//                     <p className="text-gray-600">+123 456 7890</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="contact-form bg-white p-6 md:p-8 rounded-xl shadow-lg">
//               <form>
//                 <div className="form-group mb-6">
//                   <input type="text" placeholder="Your Name" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
//                 </div>
//                 <div className="form-group mb-6">
//                   <input type="email" placeholder="Your Email" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
//                 </div>
//                 <div className="form-group mb-6">
//                   <input type="text" placeholder="Subject" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
//                 </div>
//                 <div className="form-group mb-6">
//                   <textarea placeholder="Your Message" rows="5" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required></textarea>
//                 </div>
//                 <button type="submit" className="w-full py-3 px-5 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;




















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../Components/Slider';
import EventCard from '../Components/EventCard';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const videos = [
    "/videos/hostel-video.mp4",
    "/videos/Hostel-video1.mp4",
    "/videos/Hostel-video2.mp4",
    "/videos/Hostel-video3.mp4"
  ];

  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: "Ganesh Chaturthi 2025",
        date: "2025-08-27T19:00:00",
        time: "11:00 AM",
        location: "MP Theater",
        description: "Join us for an evening of live music performances by talented residents!",
        image: "/videos/Ganesh puja photo 5.jpg",
        hasMoreInfo: true,
        moreInfoPath: "/ganesh-chaturthi"
      },
      {
        id: 2,
        title: "Saraswati Puja 2025",
        date: "2025-01-25T18:30:00",
        time: "9:00 AM",
        location: "MP Theater",
        description: "Celebration of the goddess of knowledge, music, art, and wisdom.",
        image: "https://images.unsplash.com/photo-1611141569435-bf415ee0adfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
        hasMoreInfo: true,
        moreInfoPath: "/saraswati-puja"
      },
      {
        id: 3,
        title: "Rawan Dahan 2025",
        date: "2025-10-12T20:00:00",
        time: "6:00 PM",
        location: "Civil Ground",
        description: "Ceremonial burning of Rawan's effigy symbolizing victory of good over evil.",
        image: "https://images.unsplash.com/photo-1602087927578-6bc56c434c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmF3YW4lMjBkYWhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
        hasMoreInfo: true,
        moreInfoPath: "/rawan-dahan"
      },
      {
        id: 4,
        title: "Hostel Volleyball League [HVL]",
        date: "2025-07-02T15:00:00",
        time: "5:00 PM",
        location: "Civil Ground Volleyball Court",
        description: "Friendly competition with various games and prizes for winners!",
        image: "/videos/img4.jpg",
        hasMoreInfo: true,
        moreInfoPath: "/sports/volleyball"
      },
      {
        id: 5,
        title: "Hostel Cricket League [HCL]",
        date: "2025-07-10T19:00:00",
        time: "7:00 PM",
        location: "Main Hall",
        description: "Experience diverse cultures through performances, food, and traditions.",
        image: "/videos/HCL photo 3.jpg",
        hasMoreInfo: true,
        moreInfoPath: "/sports/cricket"
      },
      {
        id: 6,
        title: "Hostel Football League [HFL]",
        date: "2025-07-15T14:00:00",
        time: "2:00 PM",
        location: "Activity Room",
        description: "Learn new skills from photography to coding in our weekend workshops.",
        image: "/videos/img1.jpg",
        hasMoreInfo: true,
        moreInfoPath: "/sports/football"
      }
    ];
    setEvents(sampleEvents);
  }, []);

  useEffect(() => {
    // Auto-rotate videos every 10 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [videos.length]);

  const handleMenuClick = (menu) => {
    const element = document.getElementById(menu);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMoreInfoClick = (path) => {
    navigate(path);
  };

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="home" className="hero h-screen relative flex items-center justify-center">
        <Slider />
        <div className="hero-content relative text-center text-white z-10 max-w-4xl px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Welcome to Hostel Events</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">Discover amazing events and create unforgettable memories with our vibrant community</p>
          <div className="hero-buttons flex gap-4 justify-center flex-wrap">
            <button 
              className="cta-button py-3 px-8 md:py-4 md:px-10 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 border-2 border-transparent bg-red-500 text-white hover:bg-transparent hover:border-white hover:-translate-y-1 hover:shadow-lg"
              onClick={() => handleMenuClick('events')}
            >
              Explore Events
            </button>
            <button 
              className="cta-button py-3 px-8 md:py-4 md:px-10 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-800 hover:-translate-y-1"
              onClick={() => handleMenuClick('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2 z-10 opacity-70 animate-bounce">
          <span>Scroll Down</span>
          <div className="scroll-arrow w-5 h-5 border-r-2 border-b-2 border-white rotate-45"></div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="events-section py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Upcoming Events
              
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't miss out on these exciting events happening at our hostel</p>
          </div>
          <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard 
                key={event.id} 
                event={event} 
                onMoreInfo={event.hasMoreInfo ? () => handleMoreInfoClick(event.moreInfoPath) : null}
              />
            ))}
          </div>
          <div className="section-cta text-center mt-12">
            <button className="view-all-btn py-3 px-8 md:py-4 md:px-10 bg-gradient-to-r from-blue-500 to-red-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Photo Gallery
              
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Take a look at moments from our previous events</p>
          </div>
          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/videos/img1.jpg",
              "/videos/img2.jpg",
              "/videos/img3.jpg",
              "/videos/img4.jpg",
              "/videos/HVL photo 1.jpg",
              "/videos/HVL photo 5.jpg",
              "/videos/Ganesh puja 6.jpg",
              "/videos/HCL photo 2.jpg",
              "/videos/HCL photo 3.jpg"
            ].map((img, index) => (
              <div key={index} className="gallery-item rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-64 hover:-translate-y-1 hover:shadow-xl">
                <img src={img} alt={`Hostel event ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
                <div className="gallery-overlay absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <button className="gallery-view py-2 px-6 bg-white text-gray-800 border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-16 md:py-24 bg-gradient-to-br from-purple-800 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
              About Us
              
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Get to know our community and what we stand for</p>
          </div>
          <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-text">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Creating Memorable Experiences</h3>
              <p className="mb-6 text-lg leading-relaxed opacity-90">We are dedicated to creating memorable experiences for our hostel residents. Our events are designed to bring people together, foster community spirit, and create lasting memories.</p>
              <p className="mb-6 text-lg leading-relaxed opacity-90">From social gatherings to educational workshops, we offer a diverse range of activities to suit all interests. Our team works tirelessly to ensure every event is unique, engaging, and enjoyable for all participants.</p>
              <div className="about-stats flex flex-col sm:flex-row gap-8 mt-8">
                <div className="stat text-center">
                  <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">150+</span>
                  <span className="stat-label text-sm opacity-80">Events Organized</span>
                </div>
                <div className="stat text-center">
                  <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">500+</span>
                  <span className="stat-label text-sm opacity-80">Happy Participants</span>
                </div>
                <div className="stat text-center">
                  <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">98%</span>
                  <span className="stat-label text-sm opacity-80">Satisfaction Rate</span>
                </div>
              </div>
            </div>
            
            <div className="about-videos">
              <div className="video-container rounded-xl overflow-hidden shadow-xl relative">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={videos[currentVideoIndex]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    title="About Hostel Events"
                  />
                </div>
                
                <div className="video-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-full">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentVideoIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => handleVideoChange(index)}
                      aria-label={`Show video ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="video-thumbnails flex gap-4 mt-4">
                {videos.map((video, index) => (
                  <div 
                    key={index}
                    className={`thumbnail-container w-1/3 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      index === currentVideoIndex ? 'ring-2 ring-yellow-400' : 'opacity-70'
                    }`}
                    onClick={() => handleVideoChange(index)}
                  >
                    <div className="relative pb-[56.25%] h-0">
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={video}
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Testimonial Cards Slider - Images Only */}
          <div className="testimonials-section mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Community</h3>
            <div className="testimonials-slider relative overflow-hidden">
              <div className="testimonials-track flex gap-6 animate-marquee whitespace-nowrap">
                {[
                  {
                    name: "Alex Johnson",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "Sarah Williams",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "Mike Chen",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "Emma Rodriguez",
                    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "David Kim",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "Priya Sharma",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "James Wilson",
                    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80"
                  },
                  {
                    name: "Lisa Taylor",
                    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZmlsZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="testimonial-card flex-shrink-0 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full p-2 border-4 border-white/20 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full rounded-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .testimonials-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get in touch with us for any questions or suggestions</p>
          </div>
          <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="contact-info">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">We'd Love to Hear From You</h3>
              <p className="mb-8 text-gray-600 text-lg">Have questions about upcoming events or want to suggest an event idea? Reach out to us!</p>
              <div className="contact-details flex flex-col gap-6">
                <div className="contact-item flex items-start gap-4">
                  <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📍</div>
                  <div>
                    <h4 className="text-gray-800 mb-2 font-semibold">Address</h4>
                    <p className="text-gray-600">123 Hostel Street, City, Country</p>
                  </div>
                </div>
                <div className="contact-item flex items-start gap-4">
                  <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📧</div>
                  <div>
                    <h4 className="text-gray-800 mb-2 font-semibold">Email</h4>
                    <p className="text-gray-600">info@hostelevents.com</p>
                  </div>
                </div>
                <div className="contact-item flex items-start gap-4">
                  <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📞</div>
                  <div>
                    <h4 className="text-gray-800 mb-2 font-semibold">Phone</h4>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <form>
                <div className="form-group mb-6">
                  <input type="text" placeholder="Your Name" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
                </div>
                <div className="form-group mb-6">
                  <input type="email" placeholder="Your Email" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
                </div>
                <div className="form-group mb-6">
                  <input type="text" placeholder="Subject" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
                </div>
                <div className="form-group mb-6">
                  <textarea placeholder="Your Message" rows="5" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-5 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;