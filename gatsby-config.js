const dotenv = require('dotenv');
const postCssImport = require('postcss-import');
const postCssNesting = require('postcss-nesting');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Golf Ladies First',
    description:
      'Dedicated entirely to womens golfing needs with personalised service and club fittings. Online golf store with large product range and excellent service.',
    author: 'Golf Ladies First',
    siteUrl: 'https://www.golfladiesfirst.com.au',
    address: 'Shop 2 Royal Bayside, 2 Horton Street, Port Macquarie NSW',
    hours: 'Monday to Friday 9am – 5pm',
    phone: [
      {
        name: 'Chantale',
        numberDisplay: '0431 248 847',
        numberFormatted: '0431248847',
      },
      {
        name: 'Gordon',
        numberDisplay: '0401 726 598',
        numberFormatted: '0401726598',
      },
    ],
    email: 'info@golfladiesfirst.com.au',
    facebook: 'https://www.facebook.com/golfladiesfirst.com.au',
    instagram: 'https://www.instagram.com/golfladiesfirst',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WGP5KZZ',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.golfladiesfirst.com.au',
      },
    },
    {
      // This plugin lets me access environment variables that
      // aren't prefixed with Gatsby. This allows me to use
      // Shopify-related variables in the context setup script.
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['SHOP_NAME', 'SHOPIFY_ACCESS_TOKEN'],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://golfladiesfirst.us12.list-manage.com/subscribe/post?u=f7790536b053b57996dbc24d0&amp;id=f711b0e505',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Golf Ladies First',
        short_name: 'GLF',
        start_url: '/',
        background_color: fullConfig.theme.colors.indigo['600'],
        theme_color: fullConfig.theme.colors.indigo['600'],
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwindcss(tailwindConfig),
          postCssNesting,
          autoprefixer,
          ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        // If you are running your shop on a custom domain, you need to use that
        // as the shop name, without a trailing slash, for example:
        // shopName: "gatsby-shop.com",
        shopName: process.env.SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,

        // Set the API version you want to use. For a list of available API versions,
        // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
        // Defaults to 2019-07
        apiVersion: '2020-04',

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,

        // Number of records to fetch on each request when building the cache
        // at startup. If your application encounters timeout errors during
        // startup, try decreasing this number.
        paginationSize: 50,

        // List of collections you want to fetch.
        // Possible values are: 'shop' and 'content'.
        // Defaults to ['shop', 'content'].
        // includeCollections: ['shop'],
      },
    },
  ],
};
