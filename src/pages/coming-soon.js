import * as React from "react"
import SecondaryBtn from '../components/buttons/secondary-btn';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';

const mainCtn = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
}

const ComingSoon = () => {
  return (
    <Layout
      isMenu={false}
      isFooter={false}
      title={'Coming soon... 👩‍🚀🚀'}
      description={'We are working here'}
      canonicalLink={'/coming-soon'}
    >
      <div className="ctn" style={mainCtn}>
        <p>👩‍🚀🚀 Coming soon...</p>
        <h1>We are working here</h1>
        <SecondaryBtn to="/" text='Go home'/>.
      </div>
    </Layout>
  )
}

export default ComingSoon

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
