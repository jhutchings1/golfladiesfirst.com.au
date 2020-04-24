import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { InstagramImage } from './instagram-image';

export function InstagramImages({ imagesToShow = 6 }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchInstagramPosts() {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
      );
      const json = await res.json();
      setData(
        json.data
          .filter((item) => item.media_type === 'IMAGE')
          .slice(0, imagesToShow)
      );
    }

    fetchInstagramPosts();
  }, [imagesToShow]);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="//graph.instagram.com" crossOrigin />
      </Helmet>
      {data && data.map((item) => <InstagramImage key={item.id} item={item} />)}
    </>
  );
}

InstagramImages.propTypes = {
  imagesToShow: PropTypes.number,
};
