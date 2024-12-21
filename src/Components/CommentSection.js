import React from 'react';

// Main Component
const CommentSection = () => {
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

export default CommentSection;