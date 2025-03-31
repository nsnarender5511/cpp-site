import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Centralized Build Management',
    description: 'Use a single command to build and manage your projects across all agents.',
    color: '#1e2235',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureCardIcon}>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M12 11h4"></path>
        <path d="M12 16h4"></path>
        <path d="M8 11h.01"></path>
        <path d="M8 16h.01"></path>
      </svg>
    ),
  },
  {
    title: 'Advanced Synchronization',
    description: 'Cross-agent plate sync to keep your up-to-date information perfectly synchronized.',
    color: '#4f97d9',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureCardIcon}>
        <path d="M21 12a9 9 0 0 1-9 9"></path>
        <path d="M9 3a9 9 0 0 1 9 9"></path>
        <path d="M3 12a9 9 0 0 0 9 9"></path>
        <path d="M15 3a9 9 0 0 0-9 9"></path>
      </svg>
    ),
  },
  {
    title: 'Agent Expertise',
    description: 'Customize roles, implement intelligent agents and configurations for each agent.',
    color: '#ff7261',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureCardIcon}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
  {
    title: 'High Performance',
    description: 'Agents resolve issues together with an extremely efficient process.',
    color: '#4f97d9',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureCardIcon}>
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    ),
  },
  {
    title: 'Extensibility',
    description: 'Run custom initialization plugins to expand your workflow capabilities.',
    color: '#ff7261',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureCardIcon}>
        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l3 7h-6l3-7zM13 17l3 7h-6l3-7z"></path>
        <path d="M21 15l-3-7h6l-3 7z"></path>
      </svg>
    ),
  },
  {
    title: 'Safe Extensions',
    description: 'Expansion agents and plugins to safely stop spam and improve productivity.',
    color: '#1e2235',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureCardIcon}>
        <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3M18 8l4 4m0 0l-4 4m4-4H9"></path>
      </svg>
    ),
  },
];

function Feature({title, description, icon, color, index}: FeatureItem & {index: number}) {
  return (
    <motion.div 
      className={clsx('col col--4')}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.featureCard}>
        <div 
          className={styles.featureIconWrapper} 
          style={{
            backgroundColor: `${color}15`,  // Using hex alpha for transparency
            color: color
          }}
        >
          <div className={styles.featureIconInner}>
            {icon}
          </div>
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function Features(): React.ReactElement {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Technical Features
        </motion.h2>
        
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 