import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Spinner } from './spinner';

export function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (inView) {
      mapRef.current.src = mapRef.current.dataset.src;
    }
  }, [inView]);

  return (
    <article ref={ref} className="relative mx-auto overflow-hidden max-w-7xl">
      <iframe
        ref={mapRef}
        onLoad={() => setMapLoaded(true)}
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.482070769876!2d152.90624495182675!3d-31.428393003888836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff588c71e69f%3A0x64a8efb0170dc7c7!2sGolf%20Ladies%20First%20%2F%20GLF%20Golf%20%26%20Lifestyle!5e0!3m2!1sen!2sau!4v1587449766903!5m2!1sen!2sau"
        title="Golf Ladies First Port Macquarie Location"
        aria-hidden={false}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="w-full border-none h-96"
      />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Spinner />
        </div>
      )}
    </article>
  );
}
