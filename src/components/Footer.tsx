
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-gradient">KV AI Academy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering the next generation of AI professionals through world-class education, 
              hands-on projects, and industry mentorship. Join thousands of successful graduates 
              working at top tech companies worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <span className="text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Career Services
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  AI Fundamentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Deep Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Natural Language Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Computer Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  MLOps & Deployment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  AI for Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-4 lg:mb-0">
                Get the latest AI trends, course updates, and career tips delivered to your inbox.
              </p>
            </div>
            <div className="lg:flex-shrink-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-hero text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 KV AI Academy. All rights reserved.</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
