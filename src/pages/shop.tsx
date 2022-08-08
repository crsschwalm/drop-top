import React from 'react';

import Layout from '../components/layout';
import PricingCard from '../components/pricing-card';
import SEO from '../components/seo';

const Shop = () => {
  const options = [
    {
      title: 'Single',
      subtext: '1 shaker',
      price: 14.99,
      features: ['Your very own shaker'],
    },
    {
      title: 'Double Down',
      subtext: '2 shakers',
      price: 24.99,
      features: ['2 shakers'],
    },
    {
      title: 'Mic Drop',
      subtext: '10 shakers',
      price: 99.99,
      features: ['10 shakers'],
    },
  ];

  return (
    <Layout>
      <SEO title="Shop" />

      <section className="bg-gradient-to-t from-zinc-500 lg:h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for quick access to your supplements
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Grab the shaker of your dreams. Choose a deal that works for you
              and tell your friends about us.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {options.map((option) => (
              <PricingCard {...option} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
