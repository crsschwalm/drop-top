// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Resources" />
    <section className="bg-white dark:bg-gray-300">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-600">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam,
            vel dolores eaque laborum deleniti ducimus aliquam est iste
            consequatur saepe nostrum asperiores laudantium voluptatem,
            explicabo iusto ipsa in mollitia!
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
    {/* https://cdn.imgbin.com/14/24/19/imgbin-water-bottles-plastic-glass-cocktail-shaker-bottle-tMBY0edBDpbNiJxbKPTWfBgtn.jpg */}

    <div className="relative w-full overflow-hidden bg-fixed">
      <img
        src="https://www.mensjournal.com/wp-content/uploads/mf/_main_protein_7.jpg?w=1000&h=563&crop=1&quality=86&strip=all"
        alt="Drink it"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-y-0 bg-gray-900 bg-opacity-80 text-white flex items-center justify-center shadow-md w-full z-50 ">
        <h2
          className="mb-4 text-5xl font-bold text-center
        "
        >
          Drop Top
        </h2>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
