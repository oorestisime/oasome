import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../config';

const getSchemaOrgJSONLD = ({
  url,
  title,
  image,
  description,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title,
    },
  ];

  return [
    ...schemaOrgJSONLD,
    {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': url,
            name: title,
            image,
          },
        },
      ],
    },
    {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url,
      name: title,
      alternateName: config.title,
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      description,
      author: {
        '@type': 'Person',
        name: 'OAsome',
      },
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': config.url,
      },
    },
  ];
};

const SEO = ({ postData, postImage }) => {
  const postMeta = postData.frontmatter || {};

  const title = postMeta.title || config.title;
  const description = postData.excerpt || config.description;
  const image = `${config.url}${postImage}` || config.image;
  const url = postMeta.slug
    ? `${config.url}${path.sep}${postMeta.slug}`
    : config.url;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    title,
    image,
    description,
  });

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  postImage: null,
};

export default SEO;
