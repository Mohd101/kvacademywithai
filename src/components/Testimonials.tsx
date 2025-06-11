
import React from 'react';

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">★</span>
        ))}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed text-lg italic">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full mr-4"
        />
        <div>
          <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
          <div className="text-gray-500">{testimonial.title}</div>
          <div className="text-sm text-blue-600">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Martinez",
      title: "ML Engineer",
      company: "Google",
      content: "KV AI Academy transformed my career completely. The hands-on approach and expert mentorship helped me land my dream job at Google. The curriculum is cutting-edge and exactly what the industry needs.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Robert Chen",
      title: "Data Scientist",
      company: "Microsoft",
      content: "The depth of knowledge I gained from the Deep Learning course is incredible. The instructors are world-class and the projects are real-world applicable. I'm now leading AI initiatives at Microsoft.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Patel",
      title: "AI Product Manager",
      company: "Amazon",
      content: "As someone transitioning from traditional tech to AI, KV Academy provided the perfect bridge. The business-focused AI course gave me the strategic perspective I needed to excel in my role.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Johnson",
      title: "Computer Vision Engineer",
      company: "Tesla",
      content: "The computer vision course at KV Academy is phenomenal. The practical projects on autonomous driving applications directly helped me secure my position at Tesla. Highly recommend!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sarah Kim",
      title: "NLP Researcher",
      company: "OpenAI",
      content: "The NLP course exceeded all my expectations. The coverage of transformers and large language models was thorough and practical. It directly contributed to my research work at OpenAI.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ahmed Hassan",
      title: "MLOps Engineer",
      company: "Spotify",
      content: "The MLOps course is a game-changer. Learning to deploy and scale AI models in production gave me the skills I needed to advance my career. The hands-on labs were incredible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who are now working at top tech companies worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="bg-gradient-hero text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Over 95% of our graduates land AI jobs within 6 months of completion. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('courses');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Courses
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
