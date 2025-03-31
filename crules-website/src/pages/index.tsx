import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';
import Installation from '../components/homepage/Installation';

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Home"
      description="cursor++ is a command-line tool that enhances the Cursor IDE experience by providing a synchronized multi-agent system">
      <Hero />
      <main>
        <Features />
        <Installation />
      </main>
    </Layout>
  );
}
