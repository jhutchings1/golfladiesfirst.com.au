import React from 'react';
import { Link } from 'gatsby';

import annika from '../images/brand-logos/annika.svg';
import bermudaSands from '../images/brand-logos/bermuda-sands.svg';
import callaway from '../images/brand-logos/callaway.svg';
import corsicanGolf from '../images/brand-logos/corsican-golf.svg';
import dailySports from '../images/brand-logos/daily-sports.svg';
import eccoShoes from '../images/brand-logos/ecco-shoes.svg';
import fit39Gloves from '../images/brand-logos/fit39-gloves.svg';
import gregNorman from '../images/brand-logos/greg-norman.svg';
import jamieSadock from '../images/brand-logos/jamie-sadock.svg';
import nivo from '../images/brand-logos/nivo.svg';
import skechers from '../images/brand-logos/skechers.svg';
import sporteLeisure from '../images/brand-logos/sporte-leisure.svg';

export function BrandsWeLove() {
  return (
    <article className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
        <h2 className="h2">Shop brands we love</h2>
        <div className="grid grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:mt-8">
          <Link
            to="/collections/annika/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Annika</span>
            <img className="max-h-12" src={annika} alt="" />
          </Link>
          <Link
            to="/collections/bermuda-sands-brand/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Bermuda Sands</span>
            <img className="max-h-12" src={bermudaSands} alt="" />
          </Link>
          <Link
            to="/collections/callaway/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Callaway</span>
            <img className="max-h-12" src={callaway} alt="" />
          </Link>
          <Link
            to="/collections/corsican-golf/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Corsican Golf</span>
            <img className="max-h-12" src={corsicanGolf} alt="" />
          </Link>
          <Link
            to="/collections/daily-sports/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Daily Sports</span>
            <img className="max-h-12" src={dailySports} alt="" />
          </Link>
          <Link
            to="/collections/ecco-shoes/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Ecco Shoes</span>
            <img className="max-h-12" src={eccoShoes} alt="" />
          </Link>
          <Link
            to="/collections/fit39-gloves-brand/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Fit 39 Gloves</span>
            <img className="max-h-12" src={fit39Gloves} alt="" />
          </Link>
          <Link
            to="/collections/greg-norman/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Greg Norman</span>
            <img className="max-h-12" src={gregNorman} alt="" />
          </Link>
          <Link
            to="/collections/jamie-sadock-brand/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Jamie Sadock</span>
            <img className="max-h-12" src={jamieSadock} alt="" />
          </Link>
          <Link
            to="/collections/nivo/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Nivo</span>
            <img className="max-h-12" src={nivo} alt="" />
          </Link>
          <Link
            to="/collections/skechers-shoes/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Skechers</span>
            <img className="max-h-12" src={skechers} alt="" />
          </Link>
          <Link
            to="/collections/sporte-leisure/"
            className="flex justify-center col-span-1 px-8 py-8 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:shadow-outline-primary focus:bg-gray-100"
          >
            <span className="sr-only">Sporte Leisure</span>
            <img className="max-h-12" src={sporteLeisure} alt="" />
          </Link>
        </div>
      </div>
    </article>
  );
}
