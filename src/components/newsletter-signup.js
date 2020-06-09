import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  function handleEmailChange(event) {
    setEmail(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    addToMailchimp(email)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        setMessage(msg);
        setIsSubmitting(false);
      })
      .catch((err) => {
        setMessage(err);
        setIsSubmitting(false);
      });
  }

  return (
    <article className="mx-auto bg-gray-100 max-w-7xl">
      <div className="flex flex-col items-center max-w-screen-xl px-4 py-12 mx-auto text-left sm:px-6 lg:py-16 lg:px-8">
        <h2 className="h2">Don't miss out, join the club</h2>
        <form
          method="POST"
          onSubmit={handleSubmit}
          id="newsletter"
          name="newsletter-signup-form"
          target="_blank"
          className="w-full mt-8 sm:flex"
        >
          <div className="relative w-full max-w-xl mx-auto">
            <div className="flex w-full mt-1 shadow-sm">
              <label
                htmlFor="email"
                className="flex-1 block text-sm font-medium leading-5 text-gray-700"
              >
                <span className="sr-only">Enter email address</span>
                <div className="relative flex-grow focus-within:z-10">
                  <input
                    onChange={handleEmailChange}
                    value={email}
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    required
                    pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    className="block w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-none appearance-none focus:outline-none focus:shadow-outline focus:border-primary-light form-input focus:shadow-outline-primary"
                  />
                </div>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center px-12 py-3 -ml-px text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent hover:bg-gray-700 focus:outline-none focus:border-primary-light active:bg-gray-900 focus:bg-gray-600 focus:shadow-outline-primary disabled:opacity-50 disabled:cursor-wait"
              >
                <span className="">Join</span>
              </button>
            </div>
            {message && (
              <p
                dangerouslySetInnerHTML={{ __html: message }}
                className="mt-4 text-sm text-center prose"
              />
            )}
          </div>
        </form>
      </div>
    </article>
  );
}
