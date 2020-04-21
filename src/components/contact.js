import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { Input, TextArea, CheckBox } from './form-elements';
import { encode } from '../utilities';

export function Contact() {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  }

  return (
    <article className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0 flex w-1/3 w-full h-full overflow-hidden"
      >
        <div className="w-1/2 bg-brand-pink">
          <div className="h-full transform -skew-x-12 bg-brand-pink" />
        </div>
        <div className="w-1/2 bg-brand-blue">
          <div className="h-full transform -skew-x-12 bg-brand-blue" />
        </div>
      </div>
      <div className="relative max-w-xl px-4 py-12 mx-auto lg:my-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="h2">Get in touch with our team</h2>
        </div>
        <div className="mt-12">
          <form
            action="/success/"
            data-netlify="true"
            method="POST"
            name="contact-form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
          >
            <Input
              name="first_name"
              label="First name"
              value={state.first_name}
              handleChange={handleChange}
            />
            <Input
              name="last_name"
              label="Last name"
              value={state.last_name}
              handleChange={handleChange}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              isFullWidth
              value={state.email}
              handleChange={handleChange}
            />
            <Input
              name="phone_number"
              label="Phone Number"
              type="tel"
              isFullWidth
              value={state.phone_number}
              handleChange={handleChange}
            />
            <Input
              name="subject"
              label="Subject"
              isFullWidth
              value={state.subject}
              handleChange={handleChange}
            />
            <TextArea
              name="message"
              label="Message"
              value={state.message}
              handleChange={handleChange}
            />
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
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}
