import React, { useRef } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import PropTypes from 'prop-types';

export function NewsletterThankYou({ isSubmitted, setIsSubmitted }) {
  function closeModal() {
    setIsSubmitted(false);
  }

  const AnimatedOverlay = animated(DialogOverlay);
  const AnimatedContent = animated(DialogContent);

  const transitions = useTransition(isSubmitted, null, {
    from: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 },
  });

  const buttonRef = useRef();

  return transitions.map(
    ({ item, key, props: { opacity, y } }) =>
      item && (
        <AnimatedOverlay
          key={key}
          initialFocusRef={buttonRef}
          onDismiss={closeModal}
          style={{ opacity }}
          className="z-50"
        >
          <AnimatedContent
            aria-label="Newsletter signup thank you message"
            style={{
              transform: y.interpolate(
                (value) => `translate3d(0rem, ${value}rem, 0rem)`
              ),
            }}
            className="w-full max-w-lg"
          >
            <button
              ref={buttonRef}
              type="button"
              onClick={closeModal}
              className="absolute p-1 rounded-full top-4 right-4 focus:outline-none focus:bg-gray-200 hover:bg-gray-200"
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="space-y-4 text-center">
              <h2 className="h2">You're in the club</h2>
              <p>Thanks for signing up</p>
            </div>
          </AnimatedContent>
        </AnimatedOverlay>
      )
  );
}

NewsletterThankYou.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  setIsSubmitted: PropTypes.func.isRequired,
};
