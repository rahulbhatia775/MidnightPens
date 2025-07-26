import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-50 text-gray-700 border-t border-orange-200" id="footer">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          

          <div>
            <h2 className="text-xl font-bold text-orange-600">MidnightPens</h2>
            <p className="mt-3 text-gray-600">
              A space for storytellers and thinkers. Pen down your thoughts, share your voice, and inspire the world.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-orange-700">Home</a></li>
              <li><a href="#about" className="hover:text-orange-700">About</a></li>
              <li><a href="#blogs" className="hover:text-orange-700">Blogs</a></li>
              <li><a href="#contact" className="hover:text-orange-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="mailto:rahulbhatia775@gmail.com" className="hover:text-orange-700">Email Us</a></li>
              <li><a href="tel:+918860888768" className="hover:text-orange-700">+91 88608 88768</a></li>
              <li><a href="#" className="hover:text-orange-700">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-700">Terms & Privacy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-500 font-semibold mb-3">Connect</h3>
            <div className="flex space-x-6 mt-2 text-orange-500">
              <a href="https://github.com/rahulbhatia775" target="_blank" rel="noopener noreferrer" className="hover:text-orange-700">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/rahul-bhatia-9782802b2/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-700">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://x.com/rahulbhatia775" target="_blank" rel="noopener noreferrer" className="hover:text-orange-700">
                <i className="fab fa-x-twitter text-xl"></i>
              </a>
              <a href="mailto:rahulbhatia775@gmail.com" className="hover:text-orange-700">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MidnightPens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
