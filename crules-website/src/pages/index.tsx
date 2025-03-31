import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';
import Installation from '../components/homepage/Installation';
import CTA from '../components/homepage/CTA';
import Testimonials from '../components/homepage/Testimonials';
import FeaturesOverview from '../components/homepage/FeaturesOverview';
import TechnicalFeatures from '../components/homepage/TechnicalFeatures';

import styles from './index.module.css';

function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="cursor++ | Multi-Agent AI Designed for Developers"
      description="Cursor++ is a powerful multi-agent AI system that coordinates specialized agents to work together on your development tasks."
    >
      <main>
        <Hero />
        <Features />
        <FeaturesOverview />
        <TechnicalFeatures />
        <Installation />
        <Testimonials />
        <CTA />
      </main>
    </Layout>
  );
}

export default Home;
