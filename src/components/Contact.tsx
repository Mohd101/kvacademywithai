
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp integration
    const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
    const message = `Hi! I'm interested in KV AI Academy courses.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested Course: ${formData.course}
Message: ${formData.message}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const handleWhatsAppDirect = () => {
    const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
    const message = "Hi! I'd like to know more about your AI courses and get a free consultation.";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your career with AI? Contact us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    <option value="AI Fundamentals & Machine Learning">AI Fundamentals & Machine Learning</option>
                    <option value="Deep Learning & Neural Networks">Deep Learning & Neural Networks</option>
                    <option value="Natural Language Processing">Natural Language Processing</option>
                    <option value="Computer Vision & Image AI">Computer Vision & Image AI</option>
                    <option value="AI for Business & Strategy">AI for Business & Strategy</option>
                    <option value="MLOps & AI Deployment">MLOps & AI Deployment</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your background and goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-hero text-white py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gradient-hero text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Get Instant Support</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Have questions? Chat with our education consultants on WhatsApp for immediate assistance.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-3"
              >
                <span>💬</span>
                Chat on WhatsApp
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    123 AI Innovation Hub<br />
                    Tech District, Silicon Valley<br />
                    CA 94301, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">
                    info@kvai.academy<br />
                    admissions@kvai.academy
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    +1 (555) 123-4567<br />
                    Mon-Fri 9AM-6PM PST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
