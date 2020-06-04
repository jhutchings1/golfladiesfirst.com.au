import React from 'react';

import { Quote } from './quote';

export function FirstRow() {
  return (
    <div className="grid w-full row-gap-10 col-gap-12 px-4 pb-8 mx-auto mt-2 lg:grid-cols-3 sm:px-6 lg:px-8 max-w-7xl">
      <Quote author="Christine, Kingston, ACT">
        I just wanted to say thank you for your very efficient service. I
        ordered a top on line yesterday, and it was in my post office box this
        morning. Thanks again
      </Quote>
      <Quote author="Regards Janelle">
        Just visited your shop and I was delighted to discover you sell elephant
        sizes. Well done Gordon and Chantale. Great selection and excellent
        service, I'll be back
      </Quote>
      <Quote author="Colleen V">
        Hi Chantale, Just thought you'd like to know we won best dressed team
        &amp; had so many people complimenting us on our shirts and asking where
        we got them — so a great success thank you
      </Quote>
    </div>
  );
}
