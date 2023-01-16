import * as React from "react"
import { Helmet } from 'react-helmet';
import {useTranslation} from "gatsby-plugin-react-i18next";
import '../../style/main.scss'
import './style/welcome-section-style.scss'
import WelcomeSection from './components/welcome-section';
import OfferSection from './components/offer-section';
import StepsSection from './components/steps-section';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StartupSection from './components/statrup-section';
import ContactSection from './components/contact-section';
import TeamSection from './components/team-section';
import PartnersSection from './components/partners-section';
import Footer from '../../components/layout/footer';
import Menu from '../../components/layout/menu';


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

      <Menu/>

      <WelcomeSection/>

      <OfferSection/>

      <StartupSection/>

      <StepsSection/>

      <TeamSection/>

      <PartnersSection/>

      <ContactSection/>

      <Footer/>

    </main>
  );
}

export default Home;
