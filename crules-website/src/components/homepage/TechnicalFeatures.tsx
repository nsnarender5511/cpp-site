import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

// High-quality SVG icons for features
const ManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
    <path d="M7 12H9V17H7V12Z" fill="currentColor"/>
    <path d="M11 7H13V17H11V7Z" fill="currentColor"/>
    <path d="M15 9H17V17H15V9Z" fill="currentColor"/>
  </svg>
);

const SyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4Z" fill="currentColor"/>
    <path d="M12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" fill="currentColor"/>
  </svg>
);

const ExpertiseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
    <path d="M12 17L17 12L12 7L7 12L12 17Z" fill="currentColor"/>
  </svg>
);

const TECH_FEATURES = [
  {
    icon: <ManagementIcon />,
    title: 'Centralized Build Management',
    content: 'Use a single command to build and manage your projects across all agents.',
    color: 'var(--color-primary)'
  },
  {
    icon: <SyncIcon />,
    title: 'Advanced Synchronization',
    content: 'Cross-agent state sync to keep your up-to-date information perfectly synchronized.',
    color: 'var(--color-secondary)'
  },
  {
    icon: <ExpertiseIcon />,
    title: 'Agent Expertise',
    content: 'Customize roles, implement intelligent agents and configurations for each project.',
    color: 'var(--color-tertiary)'
  }
];

export default function TechnicalFeatures(): JSX.Element {
  return (
    <section className={styles.technicalFeaturesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Features
        </motion.h2>
        
        <div className={styles.techFeaturesGrid}>
          {TECH_FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.techFeatureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -5,
                boxShadow: 'var(--shadow-xl)' 
              }}
            >
              <div className={styles.techFeatureHeader}>
                <div 
                  className={styles.techFeatureIcon} 
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className={styles.techFeatureTitle}>{feature.title}</h3>
              </div>
              <p className={styles.techFeatureContent}>
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 