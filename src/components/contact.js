import React from 'react';

import { Input, TextArea, CheckBox } from './form-elements';

export function Contact() {
  return (
    <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute transform translate-x-1/2 left-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute bottom-0 transform -translate-x-1/2 right-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="h2">Get in touch with our team</h2>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
          >
            <Input name="first_name" label="First name" />
            <Input name="last_name" label="Last name" />
            <Input name="email" label="Email" type="email" isFullWidth />
            <div className="sm:col-span-2">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select
                    aria-label="Country"
                    className="h-full py-0 pl-4 pr-8 text-gray-500 transition duration-150 ease-in-out bg-transparent border-transparent form-select"
                  >
                    <option>AU</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  id="phone_number"
                  className="block w-full px-4 py-3 pl-20 transition duration-150 ease-in-out form-input"
                  placeholder="+61 400 000 000"
                />
              </div>
            </div>
            <Input name="subject" label="Subject" isFullWidth />
            <TextArea name="message" label="Message" />
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <CheckBox />
                <div className="ml-3">
                  <p className="text-base leading-6 text-gray-500">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="inline-flex w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
