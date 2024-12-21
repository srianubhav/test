import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
          A More Effective Way to Track Progress
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Effortlessly turn your ideas into a fully functional SaaS website in just minutes.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: 'Free',
              price: '$0/month',
              features: [
                'Up to 5 project members',
                'Unlimited tasks and projects',
                '2GB storage',
                'Basic support',
              ],
            },
            {
              title: 'Pro',
              price: '$9/month',
              features: [
                'Up to 50 project members',
                '50GB storage',
                'Priority support',
                'Advanced features',
              ],
            },
            {
              title: 'Business',
              price: '$19/month',
              features: [
                '200GB storage',
                'Dedicated account manager',
                'Custom fields',
                'Export capabilities',
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-lg shadow-lg ${
                plan.title === 'Pro' ? 'border-2 border-indigo-500' : ''
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.title}
              </h3>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                {plan.title === 'Free' ? 'Get started for free' : 'Sign up now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
