// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu);
//     setIsMenuOpen(false);
//     const element = document.getElementById(menu);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const menuItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'events', label: 'Events' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-[rgba(44,62,80,0.98)] backdrop-blur-sm' : 'py-4 bg-[rgba(44,62,80,0.95)]'} shadow-lg`}>
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <div className="text-3xl">🏠</div>
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Hostel Events</h2>
//         </div>
//         <nav className={`hidden md:block`}>
//           <ul className="flex space-x-6">
//             {menuItems.map(item => (
//               <li key={item.id}>
//                 <a 
//                   href={`#${item.id}`} 
//                   className={`text-white font-medium transition-all duration-300 py-2 px-4 rounded-full hover:text-blue-400 hover:bg-white hover:bg-opacity-10 ${activeMenu === item.id ? 'text-blue-400 bg-white bg-opacity-10' : ''}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleMenuClick(item.id);
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <button 
//           className={`md:hidden flex flex-col bg-transparent border-none cursor-pointer p-1 ${isMenuOpen ? 'open' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
//           <span className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
//           <span className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
//         </button>
//       </div>
//       <nav className={`md:hidden bg-[#2c3e50] w-full transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
//         <ul className="flex flex-col">
//           {menuItems.map(item => (
//             <li key={item.id}>
//               <a 
//                 href={`#${item.id}`} 
//                 className={`block text-white py-4 px-8 transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${activeMenu === item.id ? 'bg-white bg-opacity-10 text-blue-400' : ''}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleMenuClick(item.id);
//                 }}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slideImages = [
//     "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=80",
//     "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=80",
//     "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zdGVsJTIwZXZlbnV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=80"
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slideImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slideImages.length]);

//   return (
//     <div className="slideshow absolute top-0 left-0 w-full h-full overflow-hidden">
//       {slideImages.map((img, index) => (
//         <div 
//           key={index} 
//           className={`slide absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//           style={{backgroundImage: `url(${img})`}}
//         >
//           <div className="slide-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/80 to-red-500/80"></div>
//         </div>
//       ))}
//       <div className="slideshow-dots absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
//         {slideImages.map((_, index) => (
//           <button
//             key={index}
//             className={`dot w-3 h-3 rounded-full border-none transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// const EventCard = ({ event }) => {
//   const eventDate = new Date(event.date);
//   const day = eventDate.getDate();
//   const month = eventDate.toLocaleString('default', { month: 'short' });

//   return (
//     <div className="event-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
//       <div className="event-image relative h-56 overflow-hidden">
//         <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
//         <div className="event-date absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-red-500 text-white p-3 rounded-xl flex flex-col items-center justify-center w-14 h-14 z-10">
//           <span className="day text-xl font-bold leading-none">{day}</span>
//           <span className="month text-xs font-semibold uppercase">{month}</span>
//         </div>
//         <div className="event-overlay absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300">
//           <button className="event-quick-view py-2 px-5 bg-white text-gray-800 border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white">
//             Quick View
//           </button>
//         </div>
//       </div>
//       <div className="event-details p-6">
//         <div className="event-meta flex gap-4 mb-4 text-sm">
//           <span className="event-time flex items-center gap-1 text-gray-500">⏰ {event.time}</span>
//           <span className="event-location flex items-center gap-1 text-gray-500">📍 {event.location}</span>
//         </div>
//         <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
//         <p className="event-description text-gray-600 mb-5 leading-relaxed">{event.description}</p>
//         <div className="event-actions flex gap-3">
//           <button className="event-button primary py-2 px-5 bg-gradient-to-r from-blue-500 to-red-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex-1">
//             Register
//           </button>
//           <button className="event-button secondary py-2 px-5 bg-transparent text-blue-500 border-2 border-blue-500 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white flex-1">
//             More Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="footer bg-gray-800 text-white pt-16 pb-6">
//       <div className="container mx-auto px-4">
//         <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div className="footer-section">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="text-2xl">🏠</div>
//               <h3 className="text-xl font-bold">Hostel Events</h3>
//             </div>
//             <p className="mb-6 text-gray-300">Creating memorable experiences for our residents</p>
//             <div className="social-icons flex gap-4 mt-6">
//               <a href="#facebook" aria-label="Facebook" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1">📘</a>
//               <a href="#instagram" aria-label="Instagram" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-pink-500 hover:-translate-y-1">📸</a>
//               <a href="#twitter" aria-label="Twitter" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-blue-400 hover:-translate-y-1">🐦</a>
//               <a href="#youtube" aria-label="YouTube" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-red-500 hover:-translate-y-1">📺</a>
//             </div>
//           </div>
//           <div className="footer-section">
//             <h4 className="text-lg font-bold mb-6">Quick Links</h4>
//             <ul>
//               <li className="mb-3"><a href="#home" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Home</a></li>
//               <li className="mb-3"><a href="#events" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Events</a></li>
//               <li className="mb-3"><a href="#gallery" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Gallery</a></li>
//               <li className="mb-3"><a href="#about" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">About</a></li>
//               <li className="mb-3"><a href="#contact" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Contact</a></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h4 className="text-lg font-bold mb-6">Contact Info</h4>
//             <div className="contact-item flex items-start gap-4 mb-4">
//               <span className="text-xl mt-1">📍</span>
//               <p className="text-gray-300">123 Hostel Street, City, Country</p>
//             </div>
//             <div className="contact-item flex items-start gap-4 mb-4">
//               <span className="text-xl mt-1">📧</span>
//               <p className="text-gray-300">info@hostelevents.com</p>
//             </div>
//             <div className="contact-item flex items-start gap-4 mb-4">
//               <span className="text-xl mt-1">📞</span>
//               <p className="text-gray-300">+123 456 7890</p>
//             </div>
//           </div>
//           <div className="footer-section">
//             <h4 className="text-lg font-bold mb-6">Newsletter</h4>
//             <p className="mb-6 text-gray-300">Subscribe to get updates on upcoming events</p>
//             <form className="newsletter-form flex flex-col gap-4 mt-6">
//               <input type="email" placeholder="Your email address" className="py-3 px-4 border-none rounded-lg" />
//               <button type="submit" className="py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="footer-bottom text-center pt-8 border-t border-gray-700 text-gray-400">
//           <p>&copy; 2025 Designed and Developed by Khilesh, Sonu and Shubham.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// function App() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const sampleEvents = [
//       {
//         id: 1,
//         title: "Music Night",
//         date: "2023-06-15T19:00:00",
//         time: "7:00 PM",
//         location: "Hostel Courtyard",
//         description: "Join us for an evening of live music performances by talented residents!",
//         image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//       },
//       {
//         id: 2,
//         title: "BBQ Party",
//         date: "2023-06-20T18:30:00",
//         time: "6:30 PM",
//         location: "Rooftop Garden",
//         description: "Delicious grilled food and refreshing drinks. Don't miss out!",
//         image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmJxJTIwcGFydHl8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=600&q=80"
//       },
//       {
//         id: 3,
//         title: "Movie Night",
//         date: "2023-06-25T20:00:00",
//         time: "8:00 PM",
//         location: "Common Room",
//         description: "Screening of the latest blockbuster. Free popcorn for all!",
//         image: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//       },
//       {
//         id: 4,
//         title: "Game Tournament",
//         date: "2023-07-02T15:00:00",
//         time: "3:00 PM",
//         location: "Recreation Room",
//         description: "Friendly competition with various games and prizes for winners!",
//         image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwdG91cm5hbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//       },
//       {
//         id: 5,
//         title: "Cultural Night",
//         date: "2023-07-10T19:00:00",
//         time: "7:00 PM",
//         location: "Main Hall",
//         description: "Experience diverse cultures through performances, food, and traditions.",
//         image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
//       },
//       {
//         id: 6,
//         title: "Workshop Series",
//         date: "2023-07-15T14:00:00",
//         time: "2:00 PM",
//         location: "Activity Room",
//         description: "Learn new skills from photography to coding in our weekend workshops.",
//         image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80"
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

//   return (
//     <div className="App">
//       <Header />
      
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
//               <EventCard key={event.id} event={event} />
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
//               "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
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

//       {/* About Section */}
//       <section id="about" className="about-section py-16 md:py-24 bg-gradient-to-br from-purple-800 to-purple-600 text-white">
//         <div className="container mx-auto px-4">
//           <div className="section-header text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
//               About Us
//               <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mt-4"></span>
//             </h2>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto">Get to know our community and what we stand for</p>
//           </div>
//           <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="about-text">
//               <h3 className="text-2xl md:text-3xl font-bold mb-6">Creating Memorable Experiences</h3>
//               <p className="mb-6 text-lg leading-relaxed opacity-90">We are dedicated to creating memorable experiences for our hostel residents. Our events are designed to bring people together, foster community spirit, and create lasting memories.</p>
//               <p className="mb-6 text-lg leading-relaxed opacity-90">From social gatherings to educational workshops, we offer a diverse range of activities to suit all interests. Our team works tirelessly to ensure every event is unique, engaging, and enjoyable for all participants.</p>
//               <div className="about-stats flex flex-col sm:flex-row gap-8 mt-8">
//                 <div className="stat text-center">
//                   <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">150+</span>
//                   <span className="stat-label text-sm opacity-80">Events Organized</span>
//                 </div>
//                 <div className="stat text-center">
//                   <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">500+</span>
//                   <span className="stat-label text-sm opacity-80">Happy Participants</span>
//                 </div>
//                 <div className="stat text-center">
//                   <span className="stat-number block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">98%</span>
//                   <span className="stat-label text-sm opacity-80">Satisfaction Rate</span>
//                 </div>
//               </div>
//             </div>
//             <div className="about-image rounded-xl overflow-hidden shadow-xl">
//               {/* Video element for the about section */}
//               <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
//                 <video
//   className="absolute top-0 left-0 w-full h-full object-cover"
//   src="/videos/hostel-video.mp4"
//   autoPlay
//   loop
//   muted
//   playsInline
//   title="About Hostel Events"
// />

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//   {/* Contact Section */}
// <section id="contact" className="contact-section py-16 md:py-24 bg-gray-100">
//   <div className="container mx-auto px-4">
//     <div className="section-header text-center mb-12 md:mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
//         Contact Us
//         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mt-4"></span>
//       </h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get in touch with us for any questions or suggestions</p>
//     </div>
//     <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12">
//       <div className="contact-info">
//         <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">We'd Love to Hear From You</h3>
//         <p className="mb-8 text-gray-600 text-lg">Have questions about upcoming events or want to suggest an event idea? Reach out to us!</p>
//         <div className="contact-details flex flex-col gap-6">
//           <div className="contact-item flex items-start gap-4">
//             <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📍</div>
//             <div>
//               <h4 className="text-gray-800 mb-2 font-semibold">Address</h4>
//               <p className="text-gray-600">123 Hostel Street, City, Country</p>
//             </div>
//           </div>
//           <div className="contact-item flex items-start gap-4">
//             <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📧</div>
//             <div>
//               <h4 className="text-gray-800 mb-2 font-semibold">Email</h4>
//               <p className="text-gray-600">info@hostelevents.com</p>
//             </div>
//           </div>
//           <div className="contact-item flex items-start gap-4">
//             <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl">📞</div>
//             <div>
//               <h4 className="text-gray-800 mb-2 font-semibold">Phone</h4>
//               <p className="text-gray-600">+123 456 7890</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="contact-form bg-white p-6 md:p-8 rounded-xl shadow-lg">
//         <form>
//           <div className="form-group mb-6">
//             <input type="text" placeholder="Your Name" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
//           </div>
//           <div className="form-group mb-6">
//             <input type="email" placeholder="Your Email" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
//           </div>
//           <div className="form-group mb-6">
//             <input type="text" placeholder="Subject" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required />
//           </div>
//           <div className="form-group mb-6">
//             <textarea placeholder="Your Message" rows="5" className="w-full py-3 px-5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" required></textarea>
//           </div>
//           <button type="submit" className="w-full py-3 px-5 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>

//       <Footer />
//     </div>
//   );
// }

// export default App;












import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './LandingPage/HomePage';
import GaneshChaturthiPage from './Components/GaneshChaturthiPage';
import AdminDashboard from './Components/AdminDashboard';
import AdminLogin from './AdminLogin/AdminLogin';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/ganesh-chaturthi" element={<GaneshChaturthiPage />} />
             <Route path='/admin-login' element={<AdminLogin/>}></Route>
           <Route path="/admin-dashboard" element={<AdminDashboard />} />
         
           
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;