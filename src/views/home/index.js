import * as React from "react"

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
import Layout from '../../components/layout/layout';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const {t} = useTranslation()

  return (
    <Layout
      title={t('home.title')}
      description={t('home.description')}
      mainClass={'home-ctn'}
      canonicalLink={'/'}
    >
      <WelcomeSection/>

      <OfferSection/>

      <StartupSection/>

      <StepsSection/>

      <TeamSection/>

      <PartnersSection/>

      <ContactSection/>
    </Layout>
  );
}

export default Home;
