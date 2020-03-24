/* eslint-disable prefer-promise-reject-errors */
const Scraper = require('image-scraper');

export default function getPics(urlArray) {
  const scraper = new Scraper('https://www.nba.com');

  let counter = 0;
  let src;

  return new Promise((resolve, reject) => scraper.scrape((image) => {
    if (counter !== 3 && typeof image === 'object') {
      src = image.attributes['data-srcset'];
      if (typeof src === 'string' && src.includes('jpg')) {
        counter += 1;
        if (urlArray.length < 3) {
          urlArray.push(`https://nba.com/${src.split(',')[3].split(' ')[1]}`);
          resolve('successfully pushed url');
        } else reject('rejecting promise');
      }
    }
  }));
}
