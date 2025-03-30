import React, { type ReactElement } from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';

// Import components
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';
import Installation from '../components/homepage/Installation';
import AgentsGallery from '../components/homepage/AgentsGallery';
import CTA from '../components/homepage/CTA';

export default function Home(): ReactElement {
  return (
    <Layout
      title="Business Rules Engine"
      description="CRules is a powerful business rules engine for managing complex rule-based systems in your applications">
      
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
