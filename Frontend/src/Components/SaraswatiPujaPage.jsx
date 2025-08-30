import React, { useState, useEffect, useRef } from 'react';
import StudentDonationSystem from "./StudentDonationSystem";
import "./SaraswatiPujaPage.css";

const SaraswatiPujaPage = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [eventRegistration, setEventRegistration] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Use refs for the scrollable sections
  const scheduleRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  // Handles event registration form submission
  const handleEventRegistration = (e) => {
    e.preventDefault();
    console.log('Event registration:', eventRegistration);
    setEventRegistration('');
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

  const days = [
    {
      day: "Day 1",
      title: "Saraswati Puja Sthapana",
      description: "Ceremonial installation of Goddess Saraswati's idol with traditional rituals and prayers for knowledge and wisdom.",
      image: "https://images.unsplash.com/photo-1611141569435-bf415ee0adfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-blue-500"
    },
    {
      day: "Day 2",
      title: "Vidya Arambham",
      description: "Initiation of education ceremony where children are introduced to writing and learning.",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW4lMjB3cml0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
      color: "border-yellow-500"
    },
    {
      day: "Day 3",
      title: "Cultural Programs",
      description: "Music, dance, and drama performances by students showcasing their talents.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-purple-500"
    },
    {
      day: "Day 4",
      title: "Art & Craft Exhibition",
      description: "Display of students' artistic creations and craftwork dedicated to Goddess Saraswati.",
      image: "https://images.unsplash.com/photo-1560396339-4dd6c91c07d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydCUyMGV4aGliaXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-green-500"
    },
    {
      day: "Day 5",
      title: "Knowledge Seminar",
      description: "Educational talks and discussions on various academic topics and wisdom traditions.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
      color: "border-indigo-500"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1611141569435-bf415ee0adfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW4lMjB3cml0aW5nfGVufDB8fDB8fHww&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1571974599784-933f1fbf979e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhcmFzd2F0aSUyMHB1amF8ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1518843025960-dc31c8b8c6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1560396339-4dd6c91c07d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydCUyMGV4aGliaXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=fit&w=600&q=80"
  ];

  const videoSources = [
    { src: "/videos/Saraswati-video.mp4", poster: "https://images.unsplash.com/photo-1611141569435-bf415ee0adfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80" },
    { src: "/videos/Saraswati-video.mp4", poster: "https://images.unsplash.com/photo-1571974599784-933f1fbf979e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhcmFzd2F0aSUyMHB1amF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80" },
    { src: "/videos/Saraswati-video.mp4", poster: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW4lMjB3cml0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="saraswati-puja-page min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full animate-hero-slide">
            <img src="https://images.unsplash.com/photo-1611141569435-bf415ee0adfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyYXN3YXRpJTIwcHVqYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="Saraswati Puja 1" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" />
            <img src="https://images.unsplash.com/photo-1571974599784-933f1fbf979e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhcmFzd2F0aSUyMHB1amF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=80" alt="Saraswati Puja 2" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '5s' }} />
            <img src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW4lMjB3cml0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=80" alt="Saraswati Puja 3" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 animate-image-fade" style={{ animationDelay: '10s' }} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center p-8 text-center text-white z-10">
          <div className="mb-4 animate-fade-in-up">
            <span className="text-xl md:text-2xl font-light tracking-widest animate-pulse text-blue-300">
              HOSTEL'S
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 drop-shadow-2xl tracking-tighter animate-fade-in-up bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Saraswati Puja
          </h1>
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white">
              2025
            </span>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
            Join us in celebrating the goddess of knowledge, music, art, and wisdom with cultural festivities and educational events.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-medium mt-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>MP Theater, January 25</span>
            </div>
            <span className="hidden md:inline text-white">•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>9:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto border border-blue-200 backdrop-blur-sm bg-white/80">
          
          {/* Header & Action Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-600">Event Management & Registration</h2>
              <p className="text-gray-600 mt-1">
                Explore event details, donate, and register for cultural events.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <StudentDonationSystem />
              <button className="px-5 py-2.5 bg-indigo-500 text-white rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 hover:bg-indigo-600 shadow-md">Share</button>
            </div>
          </div>

          {/* Tabbed Interface */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b-2 border-blue-200">
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'events' ? 'bg-indigo-500 text-white shadow-inner' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('events')}
              >
                Events Registration
              </button>
              <button 
                className={`px-5 py-2 transition-all duration-300 text-sm font-semibold rounded-t-xl ${activeTab === 'expenditure' ? 'bg-indigo-500 text-white shadow-inner' : 'bg-gray-100 hover:bg-gray-200'}`}
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
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Jan 20</td>
                          <td className="py-3 px-4">Saraswati Idol</td>
                          <td className="py-3 px-4">12,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Jan 21</td>
                          <td className="py-3 px-4">Books & Educational Materials</td>
                          <td className="py-3 px-4">7,500</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Jan 22</td>
                          <td className="py-3 px-4">Musical Instruments</td>
                          <td className="py-3 px-4">9,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Jan 23</td>
                          <td className="py-3 px-4">Art Supplies</td>
                          <td className="py-3 px-4">6,500</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">Jan 24</td>
                          <td className="py-3 px-4">Cultural Program Arrangements</td>
                          <td className="py-3 px-4">11,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-700">Register for Events</h3>
                  <form onSubmit={handleEventRegistration} className="space-y-4">
                    <select
                      value={eventRegistration}
                      onChange={(e) => setEventRegistration(e.target.value)}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                      required
                    >
                      <option value="">Select an event to register</option>
                      <option value="Music">Music Performance</option>
                      <option value="Dance">Dance Performance</option>
                      <option value="Drama">Drama/Play</option>
                      <option value="Art">Art Exhibition</option>
                      <option value="Poetry">Poetry Recitation</option>
                    </select>
                    <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-700 hover:scale-[1.01]">
                      Register Now
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 border-t-2 border-indigo-300" />

      {/* Daily Schedule Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-600 mb-2">5-Day Schedule</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Experience the celebration of knowledge and arts with our day-by-day program dedicated to Goddess Saraswati.
        </p>
        
        <div ref={scheduleRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
          {days.map((day, index) => (
            <div key={index} className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden border-b-4 ${day.color} transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl snap-center`}>
              <div className="h-44 overflow-hidden">
                <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-center">
                <span className="text-xs font-semibold uppercase text-blue-500 tracking-wide">{day.day}</span>
                <h3 className="font-bold text-lg md:text-xl mt-1 mb-1">{day.title}</h3>
                <p className="text-sm text-gray-500">{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-12 border-t-2 border-indigo-300" />

      {/* Memories & Video Section with Auto-Slide Controls */}
      <div className="container mx-auto px-4 py-8">
        {/* Gallery Section with Controls */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600">Memories from Past Celebrations</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-indigo-600"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600">Watch the Highlights</h2>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-indigo-600"
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
              <div key={index} className="flex-shrink-0 w-full max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-300 snap-center">
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
        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-t-lg shadow-lg cursor-pointer">
          Details
        </div>
        <h3 className="font-bold text-2xl mb-4 text-indigo-600">Event Details</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Dates</p>
              <p className="text-sm text-gray-600">Jan 25 - Jan 29, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-indigo-500">
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
            <span className="text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Timings</p>
              <p className="text-sm text-gray-600">8:00 AM - 9:00 PM Daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaraswatiPujaPage;