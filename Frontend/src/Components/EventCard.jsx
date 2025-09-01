import React from 'react';

const EventCard = ({ event, onMoreInfo }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="event-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="event-image h-48 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="event-content p-6">
        <div className="event-date text-sm text-gray-500 mb-2">{formatDate(event.date)} • {event.time}</div>
        <h3 className="event-title text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
        <div className="event-location flex items-center text-gray-600 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{event.location}</span>
        </div>
        <p className="event-description text-gray-600 mb-4">{event.description}</p>
        <div className="event-actions flex justify-between items-center">
          <button className="event-register py-2 px-5 bg-blue-500 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-600">
            Register
          </button>
          {onMoreInfo && (
            <button 
              className="event-more-info py-2 px-5 bg-transparent text-blue-500 border border-blue-500 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white"
              onClick={onMoreInfo}
            >
              More Info
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;