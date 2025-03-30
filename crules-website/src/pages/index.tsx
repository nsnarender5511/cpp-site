import React, { type ReactElement } from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// Import components
import Navbar from '../components/homepage/Navbar';
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';
import Installation from '../components/homepage/Installation';
import AgentsGallery from '../components/homepage/AgentsGallery';
import CTA from '../components/homepage/CTA';

export default function Home(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Business Rules Engine"
      description="CRules is a powerful business rules engine for managing complex rule-based systems in your applications">
      
      {/* No need to include Navbar here as it's part of Layout */}
      
      <main>
        <Hero />
        <Features />
        <Installation />
        <AgentsGallery />
        <CTA />
      </main>
    </Layout>
  );
}
