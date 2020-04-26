import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';
import { Logo } from './logo';

export default function Footer() {
  const {
    site: {
      siteMetadata: {
        title,
        address,
        hours,
        email,
        phone,
        facebook,
        instagram,
      },
    },
  } = useGraphQL();
  return (
    <footer className="bg-white">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-start py-12 mx-auto md:flex-row md:justify-between">
          <Link
            to="/"
            className="flex my-auto focus:outline-none focus:shadow-outline-pink"
          >
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              <span className="sr-only">{title}</span>
              <Logo className="h-24 text-primary" />
            </h1>
          </Link>
          <nav className="mt-6 text-base leading-6 text-gray-500 md:ml-12 md:mt-0">
            <p className="mt-3 first:mt-0">
              <Link
                to="/products/ladies/"
                className="font-bold text-gray-600 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:shadow-outline-pink"
              >
                Shop Ladies
              </Link>
            </p>
            <p className="mt-3 first:mt-0">
              <Link
                to="/products/mens/"
                className="font-bold text-gray-600 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:shadow-outline-pink"
              >
                Shop Mens
              </Link>
            </p>
            <p className="mt-3 first:mt-0">
              <Link
                to="/faq/"
                className="font-bold text-gray-600 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:shadow-outline-pink"
              >
                FAQ
              </Link>
            </p>
            <p className="mt-3 first:mt-0">
              <Link
                to="/contact/"
                className="font-bold text-gray-600 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:shadow-outline-pink"
              >
                Contact
              </Link>
            </p>
            <p className="mt-3 first:mt-0">
              <Link
                to="/privacy-policy/"
                className="font-bold text-gray-600 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:shadow-outline-pink"
              >
                Privacy Policy
              </Link>
            </p>
          </nav>
          <dl className="mt-6 text-base leading-6 text-gray-500 md:ml-12 md:mt-0">
            <div className="mt-3 first:mt-0">
              <dt className="sr-only">Address</dt>
              <dd className="flex group">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-150 ease-in-out group-hover:text-primary"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-3">{address}</span>
              </dd>
            </div>
            <div className="mt-3 first:mt-0">
              <dt className="sr-only">Hours</dt>
              <dd className="flex group">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-150 ease-in-out group-hover:text-primary"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-3">{hours}</span>
              </dd>
            </div>
            <div className="mt-3 first:mt-0">
              <dt className="sr-only">Phone number</dt>
              <dd className="flex group">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-150 ease-in-out group-hover:text-primary"
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
                        <a
                          href={`tel:${p.numberFormatted}`}
                          className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 hover:underline focus:outline-none focus:shadow-outline-pink"
                        >
                          {p.numberDisplay}
                        </a>
                      </span>
                    </Fragment>
                  ))}
                </div>
              </dd>
            </div>
            <div className="mt-3 first:mt-0">
              <dt className="sr-only">Email</dt>
              <dd className="flex group">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-150 ease-in-out group-hover:text-primary"
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
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 hover:underline focus:outline-none focus:shadow-outline-pink"
                  >
                    {email}
                  </a>
                </span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-8 bg-white border-t border-gray-200">
          <div className="py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2">
              <a
                href={facebook}
                className="text-gray-400 transition duration-150 ease-out hover:text-primary focus:outline-none focus:shadow-outline-pink"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={instagram}
                className="ml-6 text-gray-400 transition duration-150 ease-out hover:text-primary focus:outline-none focus:shadow-outline-pink"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-base leading-6 text-center text-gray-500">
                Website by{' '}
                <a
                  href="https://www.phirannodesigns.com.au"
                  className="text-gray-900 transition duration-150 ease-out hover:text-primary focus:outline-none focus:shadow-outline-pink"
                >
                  Phiranno Designs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
