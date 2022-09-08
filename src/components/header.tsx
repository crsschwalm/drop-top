import { Link } from 'gatsby';
import React, { useState } from 'react';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  const shopLink = { to: '/shop', children: 'Shop' };
  const resourcesLink = { to: '/resources', children: 'Resources' };

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-800">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight">
            {siteTitle}
          </span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {/* {mainLinks.map((linkProps) => (
            <Link
              {...linkProps}
              className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            />
          ))} */}
        </div>
        <div>
          <Link
            {...resourcesLink}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          />
          <Link
            {...shopLink}
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
