import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gradient">KV AI Academy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Start Learning
              </button>
              <button
                onClick={() => navigate('/kv-academy')}
                className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity ml-2"
              >
                KV Academy
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mt-2 w-full"
              >
                Start Learning
              </button>
              <button
                onClick={() => navigate('/kv-academy')}
                className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mt-2 w-full"
              >
                KV Academy
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
