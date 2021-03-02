import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from '../images/favicon.png'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const defaultTitle = site.siteMetadata?.title
  const defaultDescription = site.siteMetadata?.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle + " - " + title }
      meta={[
        {
          name: `description`,
          content: defaultDescription + " " + description,
        },
        {
          property: `og:title`,
          content: defaultTitle + " - " + title,
        },
        {
          property: `og:description`,
          content: defaultDescription + " " + description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || `Danilo Vilhena`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt`,
  meta: [
    {
      name: "twitter:image",
      content: "https://danilovilhena.com" + ogImage,
    },
    {
      name: "robots",
      content: "index, follow"
    },
    {
      name: "og:locale",
      content: "en_US",
    },
    {
      name: "og:site_name",
      content: "Give me a font!",
    },
    {
      name: "og:url",
      content: "https://danilovilhena.com",
    },
    {
      name: "og:image",
      content: "https://danilovilhena.com" + ogImage,
    }
  ],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
