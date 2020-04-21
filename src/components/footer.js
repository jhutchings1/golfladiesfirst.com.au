import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { Logo } from './logo';

export default function Footer() {
  const {
    site: {
      siteMetadata: { title, address, hours, email, phone },
    },
  } = useGraphQL();
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-start lg:px-8">
        <Link to="/" className="my-auto">
          <h1 className="text-xl font-semibold leading-none text-gray-900">
            <span className="sr-only">{title}</span>
            <Logo className="h-24" />
          </h1>
        </Link>
        <nav className="mt-6 text-base leading-6 text-gray-500 md:ml-12 md:mt-0">
          <p className="mt-3 first:mt-0">
            <Link
              to="/"
              className="font-bold transition duration-150 ease-in-out hover:text-gray-700"
            >
              Shop Ladies
            </Link>
          </p>
          <p className="mt-3 first:mt-0">
            <Link
              to="/"
              className="font-bold transition duration-150 ease-in-out hover:text-gray-700"
            >
              Shop Mens
            </Link>
          </p>
          <p className="mt-3 first:mt-0">
            <Link
              to="/"
              className="font-bold transition duration-150 ease-in-out hover:text-gray-700"
            >
              FAQ
            </Link>
          </p>
          <p className="mt-3 first:mt-0">
            <Link
              to="/"
              className="font-bold transition duration-150 ease-in-out hover:text-gray-700"
            >
              Contact
            </Link>
          </p>
          <p className="mt-3 first:mt-0">
            <Link
              to="/"
              className="font-bold transition duration-150 ease-in-out hover:text-gray-700"
            >
              Privacy Policy
            </Link>
          </p>
        </nav>
        <dl className="mt-6 text-base leading-6 text-gray-500 md:ml-12 md:mt-0">
          <div className="mt-3 first:mt-0">
            <dt className="sr-only">Address</dt>
            <dd className="flex">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="flex-shrink-0 w-6 h-6 text-gray-400"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="ml-3">{address}</span>
            </dd>
          </div>
          <div className="mt-3 first:mt-0">
            <dt className="sr-only">Hours</dt>
            <dd className="flex">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="flex-shrink-0 w-6 h-6 text-gray-400"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-3">{hours}</span>
            </dd>
          </div>
          <div className="mt-3 first:mt-0">
            <dt className="sr-only">Phone number</dt>
            <dd className="flex">
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="ml-3">
                {phone.map((p, i) => (
                  <Fragment key={i}>
                    {i === phone.length - 1 && (
                      <span aria-hidden className="mx-3">
                        |
                      </span>
                    )}
                    <span>
                      {p.name}:{' '}
                      <a href={`tel:${p.numberFormatted}`}>{p.numberDisplay}</a>
                    </span>
                  </Fragment>
                ))}
              </div>
            </dd>
          </div>
          <div className="mt-3 first:mt-0">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}
