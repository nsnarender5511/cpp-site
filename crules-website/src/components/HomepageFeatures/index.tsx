import React, { useEffect, useRef } from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Rule Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        CRules provides a comprehensive system to manage business rules across multiple projects and environments.
        Define, update, and track changes with powerful synchronization capabilities.
      </>
    ),
  },
  {
    title: 'Agent System',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Work with the powerful CRules Agent System to automate and enhance your rule management.
        Use pre-built agents or create custom agents to extend functionality.
      </>
    ),
  },
  {
    title: 'Developer API',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Access comprehensive APIs for core functionality, agents, UI integration, utilities, 
        Git operations, and version control to extend and integrate CRules.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div ref={featureRef} className={styles.featureItem}>
      <Svg className={styles.featureSvg} role="img" />
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <div className={styles.featureDescription}>{description}</div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureContainer}>
          <Heading as="h2" className="text--center margin-bottom--xl">
            Key Features
          </Heading>
          <div className={styles.featureGrid}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
