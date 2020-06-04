import PropTypes from 'prop-types';
import React from 'react';

export function Quote({ children, author }) {
  return (
    <article className="w-full max-w-lg px-8 py-10 mx-auto text-center border lg:max-w-none">
      <div className="w-full max-w-md mx-auto">
        <blockquote className="italic">“{children}”</blockquote>
        <p className="mt-4 font-bold">{author}</p>
      </div>
    </article>
  );
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};
