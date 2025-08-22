import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
    const element = document.getElementById(menu);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-[rgba(44,62,80,0.98)] backdrop-blur-sm' : 'py-4 bg-[rgba(44,62,80,0.95)]'} shadow-lg`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-3xl">🏠</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Hostel Events</h2>
        </div>
        <nav className={`hidden md:block`}>
          <ul className="flex space-x-6">
            {menuItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`text-white font-medium transition-all duration-300 py-2 px-4 rounded-full hover:text-blue-400 hover:bg-white hover:bg-opacity-10 ${activeMenu === item.id ? 'text-blue-400 bg-white bg-opacity-10' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          className={`md:hidden flex flex-col bg-transparent border-none cursor-pointer p-1 ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
        </button>
      </div>
      <nav className={`md:hidden bg-[#2c3e50] w-full transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col">
          {menuItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`block text-white py-4 px-8 transition-all duration-300 hover:bg-white hover:bg-opacity-10 ${activeMenu === item.id ? 'bg-white bg-opacity-10 text-blue-400' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;