export function resizeShopifyImage({ url, width }) {
  const index = url.search('.jpg');
  const firstChunk = url.slice(0, index);
  return firstChunk.concat(`_${width}x.jpg`);
}

const myUrl =
  'https://cdn.shopify.com/s/files/1/1080/9832/products/NI0210410_400_NAVY_2.jpg?v=1581307406';

const myWidth = 100;

console.log(resizeShopifyImage({ url: myUrl, width: myWidth }));
