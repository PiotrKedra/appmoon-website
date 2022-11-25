import * as React from "react"
import { Helmet } from 'react-helmet';
import {useTranslation} from "gatsby-plugin-react-i18next";
import '../../style/main.scss'
import './style/welcome-section-style.scss'
import WelcomeSection from './components/welcome-section';
import OfferSection from './components/offer-section';
import MainBtn from '../../components/buttons/btn';
import StepsSection from './components/steps-section';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const {t} = useTranslation()
  return (
    <main className="main-ctn home-ctn">

      <Helmet
        title={t`title`}
        meta={[
          {
            name: `description`,
            content: t`description`,
          },
          {
            name: `author`,
            content: 'Codenauts'
          },
          {
            property: `og:image`,
          },
        ]}
      />

      <WelcomeSection/>

      <OfferSection/>

      <StepsSection/>

      <div style={{height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <MainBtn text="Contact us"/>
      </div>

    </main>
  );
}

export default Home;
