import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="footer-section">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🏠</div>
              <h3 className="text-xl font-bold">Hostel Events</h3>
            </div>
            <p className="mb-6 text-gray-300">Creating memorable experiences for our residents</p>
            <div className="social-icons flex gap-4 mt-6">
              <a href="#facebook" aria-label="Facebook" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1">📘</a>
              <a href="#instagram" aria-label="Instagram" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-pink-500 hover:-translate-y-1">📸</a>
              <a href="#twitter" aria-label="Twitter" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-blue-400 hover:-translate-y-1">🐦</a>
              <a href="#youtube" aria-label="YouTube" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-red-500 hover:-translate-y-1">📺</a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul>
              <li className="mb-3"><a href="#home" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Home</a></li>
              <li className="mb-3"><a href="#events" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Events</a></li>
              <li className="mb-3"><a href="#gallery" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Gallery</a></li>
              <li className="mb-3"><a href="#about" className="text-gray-300 no-underline transitionall duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">About</a></li>
              <li className="mb-3"><a href="#contact" className="text-gray-300 no-underline transition-all duration-300 hover:text-blue-400 hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="contact-item flex items-start gap-4 mb-4">
              <span className="text-xl mt-1">📍</span>
              <p className="text-gray-300">123 Hostel Street, City, Country</p>
            </div>
            <div className="contact-item flex items-start gap-4 mb-4">
              <span className="text-xl mt-1">📧</span>
              <p className="text-gray-300">info@hostelevents.com</p>
            </div>
            <div className="contact-item flex items-start gap-4 mb-4">
              <span className="text-xl mt-1">📞</span>
              <p className="text-gray-300">+123 456 7890</p>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="mb-6 text-gray-300">Subscribe to get updates on upcoming events</p>
            <form className="newsletter-form flex flex-col gap-4 mt-6">
              <input type="email" placeholder="Your email address" className="py-3 px-4 border-none rounded-lg" />
              <button type="submit" className="py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom text-center pt-8 border-t border-gray-700 text-gray-400">
          <p>&copy; 2025 Designed and Developed by Khilesh, Sonu and Shubham.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;