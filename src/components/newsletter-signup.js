import React from 'react';

export function NewsletterSignup() {
  return (
    <article className="bg-gray-100">
      <div className="flex flex-col items-center max-w-screen-xl px-4 py-12 mx-auto text-left sm:px-6 lg:py-16 lg:px-8">
        <h2 className="h2">Don't miss out, join the club</h2>
        <form className="w-full mt-8 sm:flex">
          <div className="w-full max-w-xl mx-auto">
            <div className="flex w-full mt-1 shadow-sm">
              <label
                htmlFor="email"
                className="flex-1 block text-sm font-medium leading-5 text-gray-700"
              >
                <span className="sr-only">Enter email address</span>
                <div className="relative flex-grow focus-within:z-10">
                  <input
                    id="email"
                    placeholder="Enter email address"
                    className="block w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-none appearance-none focus:outline-none focus:shadow-outline focus:border-primary-light form-input focus:shadow-outline-primary"
                  />
                </div>
              </label>
              <button
                type="button"
                className="relative inline-flex items-center justify-center px-12 py-3 -ml-px text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent hover:bg-gray-700 focus:outline-none focus:border-primary-light active:bg-gray-900 focus:shadow-outline-primary"
              >
                <span className="">Join</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
}
