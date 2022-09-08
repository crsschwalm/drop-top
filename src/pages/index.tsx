import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Video from '../components/video';

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <section className="md:bg-gradient-to-l md:from-blue-500 bg-blue-900 min-h-screen flex flex-wrap items-center justify-center">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Drop Top Lid Coming Soon!
      </h1>
    </section>
  </>
);

export default IndexPage;
