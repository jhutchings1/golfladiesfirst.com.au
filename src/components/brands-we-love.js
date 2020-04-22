import React from 'react';
import { Link } from 'gatsby';

import bermudaSands from '../images/brand-logos/bermuda-sands.svg';
import callaway from '../images/brand-logos/callaway.svg';
import corsicanGolf from '../images/brand-logos/corsican-golf.svg';
import cutterAndBuck from '../images/brand-logos/cutter-and-buck.svg';
import dailySports from '../images/brand-logos/daily-sports.svg';
import ecco from '../images/brand-logos/ecco.svg';
import fit39 from '../images/brand-logos/fit39.svg';
import gregNorman from '../images/brand-logos/greg-norman.svg';
import jamieSadock from '../images/brand-logos/jamie-sadock.svg';
import nivo from '../images/brand-logos/nivo.svg';
import ping from '../images/brand-logos/ping.svg';

export function BrandsWeLove() {
  return (
    <article className="px-4 py-5 bg-gray-100">
      <h2 className="h2">Shop brands we love</h2>
      <div className="grid grid-cols-2 mt-6 md:grid-cols-3 lg:mt-8">
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={bermudaSands} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={callaway} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={corsicanGolf} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={cutterAndBuck} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={dailySports} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={ecco} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={fit39} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={gregNorman} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={jamieSadock} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={nivo} alt="" />
        </Link>
        <Link
          to="/"
          className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-white"
        >
          <img className="max-h-12" src={ping} alt="" />
        </Link>
      </div>
    </article>
  );
}
