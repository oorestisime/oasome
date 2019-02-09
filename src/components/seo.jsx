import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import config from "../config"

const getSchemaOrgJSONLD = ({ url, title, image, description, isBlogPost }) => {
  const schemaOrgJSONLD = [
    {
      "@context": `http://schema.org`,
      "@type": `WebSite`,
      url,
      name: title,
      alternateName: config.title,
    },
  ]
  if (isBlogPost) {
    schemaOrgJSONLD.push([
      {
        "@context": `http://schema.org`,
        "@type": `BreadcrumbList`,
        itemListElement: [
          {
            "@type": `ListItem`,
            position: 1,
            item: {
              "@id": url,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": `http://schema.org`,
        "@type": `BlogPosting`,
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          "@type": `ImageObject`,
          url: image,
        },
        description,
        author: {
          "@type": `Person`,
          name: `OAsome`,
        },
        mainEntityOfPage: {
          "@type": `WebSite`,
          "@id": config.url,
        },
      },
    ])
  }
  return schemaOrgJSONLD
}

const SEO = ({ postData, postImage, isBlogPost }) => {
  const postMeta = postData.frontmatter || {}

  const title = postMeta.title || config.title
  const description = postData.excerpt || config.description
  const image = `${config.url}${postImage}`
  const url = postMeta.path ? `${config.url}${postMeta.path}` : config.url

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url,
    title,
    image,
    description,
    isBlogPost,
  })

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <title>{title}</title>
      <meta name="theme-color" content="#EEEEEE" />
      <html lang="en" amp />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* Google webmaster */}
      {url === config.url && (
        <meta
          name="google-site-verification"
          content="YUxxWy9eAbuiQ86l-TiUk1SvM5hAnrtNBf6qA9uwFXk"
        />
      )}
      <link rel="manifest" href="/manifest.webmanifest" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }),
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  postImage: null,
  isBlogPost: false,
  postData: {},
}

export default SEO
