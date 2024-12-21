// Importing React and Tailwind styles
import React from 'react';

// Main Component
const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* First Section: Testimonials */}
      <div className="bg-white py-10">
        <h1 className="text-3xl font-bold text-center mb-6">What our users say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow">
              <p className="text-gray-700 italic">“{testimonial.message}”</p>
              <div className="mt-4 flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section: Features */}
      <div className="bg-blue-50 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section: Sign Up Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Sign up for free today</h2>
        <p className="text-lg mb-6">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100">Get for free</button>
          <button className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-500">Learn more →</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-400 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#" className="hover:text-white">Updates</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Examples</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for testimonials
const testimonials = [
  {
    message: "As a seasoned designer, this tool instantly grabbed my attention.",
    name: "Alex Rivera",
    role: "Designer",
    avatar: "https://via.placeholder.com/40"
  },
  {
    message: "I was amazed at how quickly we integrated this app into our workflow.",
    name: "Casey Jordan",
    role: "Project Manager",
    avatar: "https://via.placeholder.com/40"
  },
  {
    message: "Our team's productivity has skyrocketed since using this tool!",
    name: "Josh Smith",
    role: "Developer",
    avatar: "https://via.placeholder.com/40"
  }
];

// Data for features
const features = [
  {
    title: "Easy Collaboration",
    description: "Work seamlessly with your team across the globe.",
    icon: "🌍"
  },
  {
    title: "Customizable Tools",
    description: "Tailor the app to meet your specific needs.",
    icon: "⚙️"
  },
  {
    title: "Robust Security",
    description: "Keep your data safe with top-notch security measures.",
    icon: "🔒"
  }
];

export default Signup;
