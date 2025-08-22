import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideImages = [
      "/videos/img1.jpg",
      "/videos/img2.jpg",
      "/videos/img3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <div className="slideshow absolute top-0 left-0 w-full h-full overflow-hidden">
      {slideImages.map((img, index) => (
        <div 
          key={index} 
          className={`slide absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{backgroundImage: `url(${img})`}}
        >
          <div className="slide-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/80 to-red-500/80"></div>
        </div>
      ))}
      <div className="slideshow-dots absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`dot w-3 h-3 rounded-full border-none transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;