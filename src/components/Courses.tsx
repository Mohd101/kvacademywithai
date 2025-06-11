import React from 'react';

interface Instructor {
  name: string;
  title: string;
  image: string;
}

interface Course {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  students: string;
  rating: string;
  price: string;
  originalPrice?: string;
  instructor?: Instructor;
}

const CourseCard = ({ course }: { course: Course }) => {
  const handleEnrollClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {course.level}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
        
        {course.instructor && (
          <div className="flex items-center mb-4">
            <img
              src={course.instructor.image}
              alt={course.instructor.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="font-medium text-gray-900">{course.instructor.name}</div>
              <div className="text-sm text-gray-500">{course.instructor.title}</div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
          <div>
            <div className="font-medium">Duration</div>
            <div>{course.duration}</div>
          </div>
          <div>
            <div className="font-medium">Students</div>
            <div>{course.students}</div>
          </div>
          <div>
            <div className="font-medium">Rating</div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              {course.rating}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-blue-600">₹{course.price}</div>
            {course.originalPrice && (
              <div className="text-sm text-gray-500 line-through">₹{course.originalPrice}</div>
            )}
          </div>
          <button
            onClick={handleEnrollClick}
            className="bg-gradient-hero text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses: Course[] = [
    {
      title: "AI Essentials Skills",
      description: "Master the basics of AI and ML with hands-on projects using Python, scikit-learn, and TensorFlow.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      level: "Beginner",
      duration: "1 Month",
      students: "2,340",
      rating: "4.9",
      price: "10,000",
      originalPrice: "20,000",
    },
    {
      title: "Data Analytics",
      description: "Dive deep into neural networks, CNNs, RNNs, transformer models, GNNs, and generative models like GANs with PyTorch.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      level: "Intermediate",
      duration: "2 Month",
      students: "1,890",
      rating: "4.8",
      price: "15,000",
      originalPrice: "25,000",
    },
    {
      title: "AI Engineer",
      description: "Build chatbots, sentiment analysis, and language models using BERT, GPT, and transformers.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      level: "Advanced",
      duration: "3 Month",
      students: "1,456",
      rating: "4.9",
      price: "20,000",
      originalPrice: "30,000",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of AI courses designed by industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <div className="bg-gradient-hero text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Not Sure Which Course to Choose?</h3>
          <p className="text-xl text-blue-100 mb-6">
            Get a free consultation with our AI education specialists
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
