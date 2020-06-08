import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { useForm } from '../hooks';
import { Form, Input, TextArea, CheckBox } from './form-elements';

export function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const [notCheckedMessage, setNotCheckedMessage] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setNotCheckedMessage(false);
    }
  }, [isChecked]);

  const { state, handleSubmit, handleChange } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });

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
          <Form
            action="/success/"
            onSubmit={handleSubmit}
            handleChange={handleChange}
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
              label="Phone number"
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
                <CheckBox
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  notCheckedMessage={notCheckedMessage}
                />
                <div className="ml-3">
                  <p className="text-base leading-6 text-gray-500">
                    By selecting this, you agree to the{' '}
                    <Link
                      to="/privacy-policy/"
                      className="font-medium text-gray-700 underline focus:outline-none focus:shadow-outline-primary"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="submit"
                  onClick={!isChecked ? () => setNotCheckedMessage(true) : null}
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-primary active:bg-gray-900"
                >
                  Submit
                </button>
              </span>
              {notCheckedMessage && (
                <div className="flex items-center justify-center mt-4 text-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <p className="block ml-2 text-sm font-medium leading-5 text-gray-700">
                    You must agree to the Privacy Policy to send this form
                  </p>
                </div>
              )}
            </div>
          </Form>
        </div>
      </div>
    </article>
  );
}
