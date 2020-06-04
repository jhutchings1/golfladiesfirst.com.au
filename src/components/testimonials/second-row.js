import React from 'react';

import { Quote } from './quote';

export function SecondRow() {
  return (
    <div className="grid w-full row-gap-10 col-gap-12 px-4 pb-10 mx-auto mt-2 lg:grid-cols-2 max-w-7xl sm:px-6 lg:px-8">
      <Quote author="Maureen, Kiama">
        I visited your shop when staying in Port last week. It was the best
        range of womens golf wear I have seen (including oseas).
        Congratulations, my friends in Kiama will be visiting your site once I
        give them your card and hear of my experience there. Looking forward to
        future contact
      </Quote>
      <Quote author="Thanks, Jules">
        Hi Gordon, I wanted to thank you for the advice on the fit of the shirt
        I ordered, and the terrific service. The shirt was in Adelaide within 2
        days, well before we got there. It fit and was blessedly cool in the
        ridiculous 40C plus weather. So even when I felt like I was melting, I
        still felt like I looked snazzy. I'll order again
      </Quote>
    </div>
  );
}
