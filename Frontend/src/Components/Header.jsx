// import React, { useState, useEffect, useRef } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
    
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsLoginOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
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

//   const loginOptions = [
//     { id: 'admin', label: 'Admin' ,path: '/admin-dashboard' },
//     { id: 'volunteer', label: 'Volunteer' }
//   ];

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl' : 'py-4 bg-gradient-to-r from-blue-800 to-purple-800'} shadow-lg`}>
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="text-3xl bg-white p-2 rounded-full shadow-md">🏠</div>
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-md">Hostel Events</h2>
//         </div>
        
//         <nav className="hidden md:block">
//           <ul className="flex items-center space-x-1">
//             {menuItems.map(item => (
//               <li key={item.id}>
//                 <a 
//                   href={`#${item.id}`} 
//                   className={`relative text-white font-medium transition-all duration-300 py-2 px-4 rounded-lg group ${activeMenu === item.id ? 'bg-white/20 text-blue-200' : ''}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleMenuClick(item.id);
//                   }}
//                 >
//                   {item.label}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
            
//             {/* Login Dropdown */}
//             <li className="relative" ref={dropdownRef}>
//               <button 
//                 className={`text-white font-medium transition-all duration-300 py-2 px-4 rounded-lg flex items-center gap-1 group ${isLoginOpen ? 'bg-white/20 text-blue-200' : ''}`}
//                 onClick={() => setIsLoginOpen(!isLoginOpen)}
//                 onMouseEnter={() => setIsLoginOpen(true)}
//               >
//                 <span>Login</span>
//                 <svg 
//                   className={`w-4 h-4 transition-transform duration-300 ${isLoginOpen ? 'rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24" 
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
//               </button>
              
//               {isLoginOpen && (
//                 <div 
//                   className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200"
//                   onMouseLeave={() => setIsLoginOpen(false)}
//                 >
//                   {loginOptions.map(option => (
//                     <a
//                       key={option.id}
//                       href="#"
//                       className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         console.log(`${option.label} login clicked`);
//                         setIsLoginOpen(false);
//                       }}
//                     >
//                       <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                       {option.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </li>
//           </ul>
//         </nav>
        
//         <button 
//           className={`md:hidden flex flex-col items-center justify-center w-10 h-10 bg-white/10 rounded-lg transition-all duration-300 ${isMenuOpen ? 'bg-white/20' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//           <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//           <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       <nav className={`md:hidden bg-gradient-to-b from-blue-800 to-purple-900 w-full transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 shadow-inner' : 'max-h-0'}`}>
//         <ul className="flex flex-col py-2">
//           {menuItems.map(item => (
//             <li key={item.id}>
//               <a 
//                 href={`#${item.id}`} 
//                 className={`block text-white py-4 px-8 transition-all duration-300 hover:bg-white/10 flex items-center ${activeMenu === item.id ? 'bg-white/10 text-blue-200 border-r-4 border-blue-300' : ''}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleMenuClick(item.id);
//                 }}
//               >
//                 <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
//                 {item.label}
//               </a>
//             </li>
//           ))}
          
//           {/* Mobile Login Options */}
//           <li className="border-t border-white/20 mt-2">
//             <div className="px-8 py-4 text-white font-medium flex items-center">
//               <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
//               Login Options
//             </div>
//             <ul>
//               {loginOptions.map(option => (
//                 <li key={option.id}>
//                   <a
//                     href="#"
//                     className="block py-3 px-12 text-white transition-colors duration-300 hover:bg-white/10 flex items-center"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       console.log(`${option.label} login clicked`);
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
//                     {option.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
















import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';   // ✅ import navigate

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // ✅ create navigate instance

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLoginOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

  const loginOptions = [
    { id: 'admin', label: 'Admin', path: '/admin-login' },  // ✅ added path
    { id: 'volunteer', label: 'Volunteer', path: '/volunteer' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl' : 'py-4 bg-gradient-to-r from-blue-800 to-purple-800'} shadow-lg`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-3xl bg-white p-2 rounded-full shadow-md">🏠</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-md">Hostel Events</h2>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-1">
            {menuItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`relative text-white font-medium transition-all duration-300 py-2 px-4 rounded-lg group ${activeMenu === item.id ? 'bg-white/20 text-blue-200' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.id);
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            
            {/* Login Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button 
                className={`text-white font-medium transition-all duration-300 py-2 px-4 rounded-lg flex items-center gap-1 group ${isLoginOpen ? 'bg-white/20 text-blue-200' : ''}`}
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                onMouseEnter={() => setIsLoginOpen(true)}
              >
                <span>Login</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isLoginOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isLoginOpen && (
                <div 
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200"
                  onMouseLeave={() => setIsLoginOpen(false)}
                >
                  {loginOptions.map(option => (
                    <a
                      key={option.id}
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLoginOpen(false);
                        navigate(option.path);   // ✅ redirect instead of console.log
                      }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden flex flex-col items-center justify-center w-10 h-10 bg-white/10 rounded-lg transition-all duration-300 ${isMenuOpen ? 'bg-white/20' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <nav className={`md:hidden bg-gradient-to-b from-blue-800 to-purple-900 w-full transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 shadow-inner' : 'max-h-0'}`}>
        <ul className="flex flex-col py-2">
          {menuItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`block text-white py-4 px-8 transition-all duration-300 hover:bg-white/10 flex items-center ${activeMenu === item.id ? 'bg-white/10 text-blue-200 border-r-4 border-blue-300' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.id);
                }}
              >
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                {item.label}
              </a>
            </li>
          ))}
          
          {/* Mobile Login Options */}
          <li className="border-t border-white/20 mt-2">
            <div className="px-8 py-4 text-white font-medium flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Login Options
            </div>
            <ul>
              {loginOptions.map(option => (
                <li key={option.id}>
                  <a
                    href="#"
                    className="block py-3 px-12 text-white transition-colors duration-300 hover:bg-white/10 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      navigate(option.path);  // ✅ redirect here also
                    }}
                  >
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
