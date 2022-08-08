import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Video from '../components/video';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="md:bg-gradient-to-l md:from-gray-500 sm:bg-gray-900">
      <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Drop Top
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut
            pariatur debitis nostrum, laboriosam sapiente incidunt quos sed eos
            architecto quia amet corrupti sunt alias perspiciatis porro, dolores
            error ab!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Shop Now
          </Link>
        </div>
        <div className="m-auto mt-8 items-center lg:mt-0 lg:col-span-5 flex">
          <StaticImage
            className="w-full rounded-lg"
            src="../images/shaker-disected.png"
            alt="Drop Top Disected"
          />
        </div>
      </div>
    </section>

    <section className="bg-slate-200">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="mb-4 gap-4">
          <Video
            videoSrcURL="https://giphy.com/embed/5IFo5UWAYXp93BfJMM"
            videoTitle="Drink up"
          />
        </div>

        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Get your protein FASTER!
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
      </div>
    </section>
    <section className="bg-slate-200">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            DropTop™️ and Roll
          </h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam,
            vel dolores eaque laborum deleniti ducimus aliquam est iste
            consequatur saepe nostrum asperiores laudantium voluptatem,
            explicabo iusto ipsa in mollitia!
          </p>
          <p className=" text-gray-600">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>

        <div className="mb-4 gap-4">
          <Video
            videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
            videoTitle="Drop Top Demo"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
