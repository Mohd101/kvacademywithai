import React from 'react';

const Hero = () => {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-hero text-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Master AI & Transform Your
              <span className="block text-cyan-300">Career Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join KV AI Academy and learn cutting-edge AI technologies from industry experts. 
              Get job-ready with hands-on projects and personalized mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToCourses}
                className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors hover-lift"
              >
                Explore Courses
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Get Free Consultation
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-300">500+</div>
                <div className="text-blue-100">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300">95%</div>
                <div className="text-blue-100">Job Placement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-blue-100">Industry Partners</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="AI Learning Environment"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
