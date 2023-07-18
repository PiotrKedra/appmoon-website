import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from './menu';
import Footer from './footer';
import {graphql, useStaticQuery} from "gatsby"
import { I18nextContext } from 'gatsby-plugin-react-i18next';


const Layout = ({
  mainClass,
  title,
  description,
  children,
  ogImage,
  canonicalLink,
  isMenu = true,
  isFooter = true,
}) => {
  const {language} = React.useContext(I18nextContext);

  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: { eq: "codenauts-banner.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 800, width: 800)
          }
        }
      }
    `
  )

  const defaultImageSrc = ogImageDefault.childImageSharp.gatsbyImageData.images.fallback.src


  return (
    <main className={`main-ctn ${mainClass}`}>
      <Helmet
        title={title}
        htmlAttributes={{
          lang: language
        }}
        link={[
          {rel: 'canonical', href: `https://www.codenauts.io${canonicalLink}`}
        ]}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            name: `author`,
            content: 'Codenauts'
          },
          {
            property: `og:image`,
            content: ogImage === undefined
              ? constructUrl(site.siteMetadata?.siteUrl, defaultImageSrc)
              : ogImage
          },
          {
            property: 'og:type',
            content: 'article',
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
          },
        ]}
      />

      {isMenu && <Menu/>}

      {children}

      {isFooter && <Footer/>}

    </main>
  );
}

function constructUrl(baseUrl, path) {
  if (baseUrl === "" || path === "") return "";
  return `${baseUrl}${path}`;
}

export default Layout;
