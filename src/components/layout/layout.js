import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from './menu';
import Footer from './footer';
import { withPrefix } from "gatsby"
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
            content: ogImage === undefined ? withPrefix('/images/codenauts-banner.png') : ogImage
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

export default Layout;
