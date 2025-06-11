import React from 'react';
import { useNavigate } from 'react-router-dom';

const KvAcademyPage = () => {
  const navigate = useNavigate();

  // Smooth scroll handler for internal links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">K.V. Educational Academy</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Home</a>
            <a href="#about" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">About Us</a>
            <a href="#courses" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Courses</a>
            <a href="#branches" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Branches</a>
            <a href="#faculty" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Faculty</a>
            <a href="#achievements" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Achievements</a>
            <a href="#gallery" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Gallery</a>
            <a href="#contact" onClick={handleSmoothScroll} className="text-gray-800 hover:text-blue-600 transition">Contact</a>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity ml-2"
            >
              KV AI Academy
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section h-screen flex items-center justify-center text-white pt-16" style={{background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Education, Empowering Success</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Hyderabad's premier coaching institute for EAMCET, NEET, IIT-JEE and Intermediate courses</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#courses" onClick={handleSmoothScroll} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">Explore Courses</a>
            <a href="#register" onClick={handleSmoothScroll} className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition">Register Now</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">About K.V. Educational Academy</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                KV Academy is a renowned educational institution in Hyderabad that focuses on the intellectual development of students to shape their future. With expertise in delivering effective coaching for intermediate and IPE exams, as well as entrance exams like EAMCET, NEET, and IIT-JEE, the academy has gained a reputation for its exceptional short-term coaching centers.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Recognizing the importance of education at all stages of a child's development, KV Academy offers foundation classes to facilitate effective learning. With three branches in Hyderabad (Malakpet, Mehdipatnam, Shah Ali Banda), the academy aims to expand further to accommodate degree students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to make a lasting impact on students, ensuring they are well-prepared for their future endeavors. In addition to regular academic activities, we also emphasize the development of leadership skills and a sense of responsibility towards society.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-2"><i className="fas fa-graduation-cap text-3xl"></i></div>
                  <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                  <p className="text-gray-600">Learn from experienced educators with proven track records</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-2"><i className="fas fa-book-open text-3xl"></i></div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">Meticulously designed courses covering all exam aspects</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-2"><i className="fas fa-chart-line text-3xl"></i></div>
                  <h3 className="text-xl font-semibold mb-2">Track Record</h3>
                  <p className="text-gray-600">Consistent 95% success rate in various examinations</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-2"><i className="fas fa-users text-3xl"></i></div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Attention</h3>
                  <p className="text-gray-600">Small batch sizes to ensure individual attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Comprehensive Courses</h2>
            <p className="max-w-2xl mx-auto text-gray-600">We offer specialized coaching for various competitive exams and intermediate courses with proven methodologies to ensure success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EAMCET/EAPCET Course */}
            <div className="course-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-300">
              <div className="bg-blue-600 py-6 px-6 text-white">
                <h3 className="text-2xl font-bold mb-2">EAMCET/EAPCET</h3>
                <p className="text-blue-100">Engineering & Medical Entrance</p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-3 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Comprehensive subject coverage with shortcut methods</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Daily practice tests and problem-solving sessions</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Specialized focus on Mathematics, Physics & Chemistry</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Regular mock tests simulating actual exam patterns</span></li>
                </ul>
                <a href="#register" onClick={handleSmoothScroll} className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">Enroll Now</a>
              </div>
            </div>
            {/* NEET Course */}
            <div className="course-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-300">
              <div className="bg-purple-600 py-6 px-6 text-white">
                <h3 className="text-2xl font-bold mb-2">NEET</h3>
                <p className="text-purple-100">Medical Entrance Exam</p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-3 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>In-depth coverage of Biology, Physics & Chemistry</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>NCERT-focused preparation with additional references</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Regular doubt-clearing sessions and revisions</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Medical field guidance and career counseling</span></li>
                </ul>
                <a href="#register" onClick={handleSmoothScroll} className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition">Enroll Now</a>
              </div>
            </div>
            {/* IIT-JEE Course */}
            <div className="course-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-300">
              <div className="bg-green-600 py-6 px-6 text-white">
                <h3 className="text-2xl font-bold mb-2">IIT-JEE</h3>
                <p className="text-green-100">Engineering Entrance Exam</p>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-3 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Advanced level preparation for JEE Main & Advanced</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Concept-building with problem-solving approach</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Advanced Mathematics and Physics training</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i><span>Strategic exam preparation and time management skills</span></li>
                </ul>
                <a href="#register" onClick={handleSmoothScroll} className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition">Enroll Now</a>
              </div>
            </div>
          </div>
          {/* Intermediate Courses */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Intermediate Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h4 className="text-xl font-semibold mb-3">MPC</h4>
                <p className="text-gray-600 mb-4">Mathematics, Physics, Chemistry for engineering aspirants</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center"><i className="fas fa-arrow-right text-blue-500 mr-2"></i><span>Strong focus on numerical problem-solving</span></li>
                  <li className="flex items-center"><i className="fas fa-arrow-right text-blue-500 mr-2"></i><span>Practical applications and demonstrations</span></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h4 className="text-xl font-semibold mb-3">BiPC</h4>
                <p className="text-gray-600 mb-4">Biology, Physics, Chemistry for medical aspirants</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center"><i className="fas fa-arrow-right text-purple-500 mr-2"></i><span>Emphasis on biological concepts and diagrams</span></li>
                  <li className="flex items-center"><i className="fas fa-arrow-right text-purple-500 mr-2"></i><span>Laboratory demonstrations and visual aids</span></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <h4 className="text-xl font-semibold mb-3">CEC</h4>
                <p className="text-gray-600 mb-4">Commerce, Economics, Civics for commerce aspirants</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center"><i className="fas fa-arrow-right text-green-500 mr-2"></i><span>Case studies and current economic scenarios</span></li>
                  <li className="flex items-center"><i className="fas fa-arrow-right text-green-500 mr-2"></i><span>Practical accounting exercises</span></li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
                <h4 className="text-xl font-semibold mb-3">Foundation Courses</h4>
                <p className="text-gray-600 mb-4">Strong fundamentals for younger students</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center"><i className="fas fa-arrow-right text-yellow-500 mr-2"></i><span>Basic concept building for future competitions</span></li>
                  <li className="flex items-center"><i className="fas fa-arrow-right text-yellow-500 mr-2"></i><span>Aptitude and logical reasoning development</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Branches</h2>
            <p className="max-w-2xl mx-auto text-gray-600">K.V. Educational Academy is conveniently located across Hyderabad to serve students from different areas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Malakpet Branch */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Malakpet Branch (Main Center)</h3>
                <p className="text-gray-600 mb-4">Opposite Bibi Cancer Hospital, Beside Bethelem MB Church, Malakpet, Hyderabad - 500036</p>
                <div className="flex items-center mb-3"><i className="fas fa-phone-alt text-blue-600 mr-3"></i><p className="text-gray-700">+91 9032688828</p></div>
                <div className="flex items-center mb-3"><i className="fas fa-clock text-blue-600 mr-3"></i><p className="text-gray-700">6:00 AM - 9:30 PM</p></div>
                <div className="flex items-center"><i className="fas fa-graduation-cap text-blue-600 mr-3"></i><p className="text-gray-700">All courses available</p></div>
              </div>
            </div>
            {/* Mehdipatnam Branch */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Mehdipatnam Branch</h3>
                <p className="text-gray-600 mb-4">Mehdipatnam, Hyderabad</p>
                <div className="flex items-center mb-3"><i className="fas fa-phone-alt text-blue-600 mr-3"></i><p className="text-gray-700">+91 9063675745</p></div>
                <div className="flex items-center mb-3"><i className="fas fa-clock text-blue-600 mr-3"></i><p className="text-gray-700">6:00 AM - 9:30 PM</p></div>
                <div className="flex items-center"><i className="fas fa-graduation-cap text-blue-600 mr-3"></i><p className="text-gray-700">All courses available</p></div>
              </div>
            </div>
            {/* Shah Ali Banda Branch */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Shah Ali Banda Branch</h3>
                <p className="text-gray-600 mb-4">Shah Ali Banda, Old City, Hyderabad</p>
                <div className="flex items-center mb-3"><i className="fas fa-phone-alt text-blue-600 mr-3"></i><p className="text-gray-700">Contact Main Branch</p></div>
                <div className="flex items-center mb-3"><i className="fas fa-clock text-blue-600 mr-3"></i><p className="text-gray-700">6:00 AM - 9:30 PM</p></div>
                <div className="flex items-center"><i className="fas fa-graduation-cap text-blue-600 mr-3"></i><p className="text-gray-700">Selected courses available</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Achievements</h2>
            <p className="max-w-2xl mx-auto text-gray-600">At K.V. Educational Academy, we take pride in the success of our students and our contribution to their academic journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center"><div className="achievement-counter mb-4">95%</div><p className="text-gray-700 font-medium">Success Rate</p></div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center"><div className="achievement-counter mb-4">1000+</div><p className="text-gray-700 font-medium">Students Every Year</p></div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center"><div className="achievement-counter mb-4">50+</div><p className="text-gray-700 font-medium">State Rank Holders</p></div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center"><div className="achievement-counter mb-4">3</div><p className="text-gray-700 font-medium">Branches in Hyderabad</p></div>
          </div>
          {/* Testimonials */}
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Student Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4"><div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"><span className="text-blue-600 font-bold">SR</span></div><div className="ml-4"><h4 className="font-semibold">Suresh R.</h4><p className="text-sm text-gray-500">EAMCET State Rank 56</p></div></div>
              <p className="text-gray-600">"The faculty at K.V. Academy provided me with excellent guidance and study material. The regular mock tests helped me understand the exam pattern thoroughly. I'm grateful for their support in achieving a top rank."</p>
            </div>
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4"><div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"><span className="text-purple-600 font-bold">PK</span></div><div className="ml-4"><h4 className="font-semibold">Priya K.</h4><p className="text-sm text-gray-500">NEET Qualifier</p></div></div>
              <p className="text-gray-600">"The biology and chemistry faculty at KV Academy made complex concepts easy to understand. Their unique teaching methodology and constant motivation helped me clear NEET with a good score."</p>
            </div>
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4"><div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"><span className="text-green-600 font-bold">AM</span></div><div className="ml-4"><h4 className="font-semibold">Arjun M.</h4><p className="text-sm text-gray-500">IIT-JEE Advanced Qualifier</p></div></div>
              <p className="text-gray-600">"The rigorous training at K.V. Academy prepared me well for JEE Advanced. The problem-solving techniques taught here were invaluable during the exam. Grateful to all my teachers for their guidance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Gallery</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Glimpses of our state-of-the-art facilities, classroom sessions, and student achievements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"><span className="text-gray-500"><i className="fas fa-chalkboard-teacher text-4xl"></i><br />Classroom Session</span></div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"><span className="text-gray-500"><i className="fas fa-users text-4xl"></i><br />Group Study</span></div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"><span className="text-gray-500"><i className="fas fa-award text-4xl"></i><br />Award Ceremony</span></div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"><span className="text-gray-500"><i className="fas fa-microscope text-4xl"></i><br />Science Lab</span></div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"><span className="text-gray-500"><i className="fas fa-book text-4xl"></i><br />Library</span></div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center"><span className="text-gray-500"><i className="fas fa-graduation-cap text-4xl"></i><br />Graduation Day</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">K.V. Educational Academy</h3>
              <p className="mb-4 text-gray-300">Transforming Education, Empowering Success</p>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/@KVEDUCATIONALACADEMY" className="text-gray-300 hover:text-white transition"><i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/k.v.educationalacademy/" className="text-gray-300 hover:text-white transition"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-300 hover:text-white transition"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" onClick={handleSmoothScroll} className="hover:text-white transition">Home</a></li>
                <li><a href="#about" onClick={handleSmoothScroll} className="hover:text-white transition">About Us</a></li>
                <li><a href="#courses" onClick={handleSmoothScroll} className="hover:text-white transition">Courses</a></li>
                <li><a href="#branches" onClick={handleSmoothScroll} className="hover:text-white transition">Branches</a></li>
                <li><a href="#register" onClick={handleSmoothScroll} className="hover:text-white transition">Registration</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#courses" onClick={handleSmoothScroll} className="hover:text-white transition">EAMCET/EAPCET</a></li>
                <li><a href="#courses" onClick={handleSmoothScroll} className="hover:text-white transition">NEET</a></li>
                <li><a href="#courses" onClick={handleSmoothScroll} className="hover:text-white transition">IIT-JEE</a></li>
                <li><a href="#courses" onClick={handleSmoothScroll} className="hover:text-white transition">Intermediate Courses</a></li>
                <li><a href="#courses" onClick={handleSmoothScroll} className="hover:text-white transition">Foundation Courses</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-2"></i><span>Malakpet, Hyderabad - 500036</span></li>
                <li className="flex items-start"><i className="fas fa-phone-alt mt-1 mr-2"></i><span>+91 9032688828</span></li>
                <li className="flex items-start"><i className="fas fa-envelope mt-1 mr-2"></i><span>info@kvacademy.in</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>&copy; 2025 K.V. Educational Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Section - moved to bottom */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Have questions? Reach out to us through any of the following channels.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-map-marker-alt text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Main Address</h3>
              <p className="text-gray-600">Opposite Bibi Cancer Hospital, Beside Bethelem MB Church, Malakpet, Hyderabad - 500036</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-phone-alt text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
              <p className="text-gray-600">+91 9032688828</p>
              <p className="text-gray-600">+91 9063675745</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-envelope text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email & Social</h3>
              <p className="text-gray-600 mb-2">info@kvacademy.in</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.youtube.com/@KVEDUCATIONALACADEMY" className="text-gray-600 hover:text-red-600 transition">
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/k.v.educationalacademy/" className="text-gray-600 hover:text-pink-600 transition">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KvAcademyPage; 