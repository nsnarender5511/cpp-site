import React, { type JSX, useRef } from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import { motion, useInView } from 'framer-motion';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header ref={ref} className={styles.heroBanner}>
      <div className={styles.container}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {siteConfig.title}
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div 
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

function FeaturesHighlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      title: 'Simple API',
      description: 'Intuitive, developer-friendly API for defining and managing business rules.',
      icon: '🔧'
    },
    {
      title: 'Validation',
      description: 'Built-in validation to ensure rules are correctly defined and structured.',
      icon: '✅'
    },
    {
      title: 'Version Control',
      description: 'Track changes to rules with automatic versioning and history.',
      icon: '📝'
    },
  ];

  return (
    <section ref={ref} className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.featuresTitle}>Key Features</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageDescription() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className={styles.descriptionSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.descriptionContent}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>What is CRules?</h2>
          <p>
            CRules is a powerful business rules engine designed to help developers manage complex 
            rule-based systems. It allows you to define, validate, and execute business rules 
            separate from your application code, making your systems more maintainable and adaptable.
          </p>
          <p>
            With CRules, you can easily update business logic without redeploying your applications, 
            empower non-technical stakeholders to understand and influence rules, and ensure consistency 
            across your entire ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className={styles.demoSection}>
      <div className={styles.demoContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className={styles.demoHeader}
        >
          <h2>Command-line Usage</h2>
          <p>CRules comes with a powerful CLI to help you manage rules from your terminal</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.codeExampleWrapper}
        >
          <div className={styles.codeExample}>
            <pre>
              <code>
                {`# Install CRules
npm install crules

# Initialize a new ruleset
crules init my-ruleset

# Add a new rule
crules add-rule --name "discount_eligibility" --description "Determines if a customer is eligible for a discount"

# Deploy rules to production
crules deploy --env production`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to get started?</h2>
          <p>Begin building more maintainable rule-based systems today</p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Read the Docs
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/examples">
              View Examples
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Business Rules Engine"
      description="CRules is a powerful business rules engine for managing complex rule-based systems in your applications">
      <HomepageHeader />
      <main>
        <FeaturesHighlight />
        <HomepageDescription />
        <DemoSection />
        <CTASection />
      </main>
    </Layout>
  );
}
