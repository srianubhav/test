import React from 'react';

const NewSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          Collaborate Effortlessly
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Discover tools that make teamwork simple, effective, and enjoyable.
          Empower your team to achieve more together.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              image: '/path-to-image1.png',
              title: 'Shared Task Boards',
              description:
                'Visualize tasks, assign responsibilities, and track progress in one place.',
            },
            {
              image: '/path-to-image2.png',
              title: 'Real-time Messaging',
              description:
                'Stay connected with your team through secure, instant communication.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
