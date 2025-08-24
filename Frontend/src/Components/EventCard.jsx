import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('default', { month: 'short' });

  const handleClick = () => {
    if (event.id === 1) { // Ganesh Chaturthi event
      navigate('/ganesh-chaturthi');
    } else {
      // For other events, you can implement different navigation or modals
      alert(`More information about ${event.title} would be shown here.`);
    }
  };

  return (
    <div className="event-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="event-image relative h-56 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
        <div className="event-date absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-red-500 text-white p-3 rounded-xl flex flex-col items-center justify-center w-14 h-14 z-10">
          <span className="day text-xl font-bold leading-none">{day}</span>
          <span className="month text-xs font-semibold uppercase">{month}</span>
        </div>
        <div className="event-overlay absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300">
          <button className="event-quick-view py-2 px-5 bg-white text-gray-800 border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white">
            Quick View
          </button>
        </div>
      </div>
      <div className="event-details p-6">
        <div className="event-meta flex gap-4 mb-4 text-sm">
          <span className="event-time flex items-center gap-1 text-gray-500">⏰ {event.time}</span>
          <span className="event-location flex items-center gap-1 text-gray-500">📍 {event.location}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
        <p className="event-description text-gray-600 mb-5 leading-relaxed">{event.description}</p>
        <div className="event-actions flex gap-3">
          <button 
            className="event-button primary py-2 px-5 bg-gradient-to-r from-blue-500 to-red-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex-1"
            onClick={handleClick}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;