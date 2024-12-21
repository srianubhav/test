import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          Explore Our Powerful Features
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Unlock the full potential of your productivity with tools designed to
          streamline your workflow and empower your team.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Real-time Collaboration',
              description:
                'Work seamlessly with your team and stay updated with live changes.',
              icon: '🤝',
            },
            {
              title: 'Advanced Analytics',
              description:
                'Track progress and performance with detailed metrics.',
              icon: '📊',
            },
            {
              title: 'Custom Integrations',
              description:
                'Integrate with your favorite apps for a smoother workflow.',
              icon: '🔌',
            },
            {
              title: 'Secure Environment',
              description:
                'Your data is encrypted and safe with industry standards.',
              icon: '🔒',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl">{feature.icon}</div>
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

export default FeaturesSection;
