
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About KV AI Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to democratizing AI education and empowering the next generation of AI professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students learning AI"
              className="rounded-2xl shadow-lg hover-lift"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At KV AI Academy, we believe that artificial intelligence is the future, and everyone deserves 
              access to world-class AI education. Our mission is to bridge the gap between academic theory 
              and industry practice through comprehensive, hands-on learning experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by industry veterans with over 15 years of combined experience in AI and machine learning, 
              we've trained thousands of students who are now working at top tech companies worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2005</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Industry-Focused Curriculum</h4>
              <p className="text-gray-600">
                Our courses are designed with input from leading AI companies to ensure you learn the most relevant skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👥</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Personalized Mentorship</h4>
              <p className="text-gray-600">
                Get one-on-one guidance from experienced AI professionals throughout your learning journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Career Support</h4>
              <p className="text-gray-600">
                From resume building to interview preparation, we support you until you land your dream AI job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
