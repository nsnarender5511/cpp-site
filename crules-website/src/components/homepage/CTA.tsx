import React from 'react';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// High-quality SVG icons
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.782 9.512 20.014 9.508 19.152C6.726 19.799 6.139 17.88 6.139 17.88C5.685 16.713 5.028 16.411 5.028 16.411C4.132 15.778 5.097 15.79 5.097 15.79C6.094 15.863 6.628 16.832 6.628 16.832C7.52 18.429 8.97 17.928 9.54 17.675C9.631 17.021 9.889 16.521 10.175 16.243C7.954 15.962 5.62 15.108 5.62 11.317C5.62 10.214 6.01 9.313 6.648 8.608C6.545 8.36 6.203 7.353 6.747 5.957C6.747 5.957 7.586 5.693 9.497 7.151C10.273 6.93 11.108 6.819 11.938 6.815C12.767 6.819 13.601 6.93 14.379 7.151C16.29 5.693 17.127 5.957 17.127 5.957C17.673 7.353 17.33 8.36 17.227 8.608C17.867 9.313 18.254 10.214 18.254 11.317C18.254 15.119 15.916 15.959 13.69 16.235C14.045 16.576 14.366 17.249 14.366 18.278C14.366 19.735 14.351 20.689 14.351 21.017C14.351 21.281 14.53 21.586 15.039 21.488C19.01 20.164 21.873 16.417 21.873 12C21.873 6.477 17.396 2 11.873 2H12Z" fill="currentColor"/>
  </svg>
);

const DocIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
    <path d="M8 14H16V16H8V14Z" fill="currentColor"/>
    <path d="M8 18H13V20H8V18Z" fill="currentColor"/>
    <path d="M8 10H16V12H8V10Z" fill="currentColor"/>
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
  </svg>
);

const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z" fill="currentColor"/>
  </svg>
);

// GitHub stats for social proof
const GITHUB_STATS = [
  { icon: <StarIcon />, label: '300+ GitHub Stars' },
  { icon: <PeopleIcon />, label: '25+ Contributors' },
  { icon: <DownloadIcon />, label: '1000+ Active Installs' }
];

export default function CTA(): JSX.Element {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}>
        <motion.div 
          className={`${styles.floatingElement} ${styles.floatingElementTop}`}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className={`${styles.floatingElement} ${styles.floatingElementBottom}`}
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to Transform Your Development Experience?
          </motion.h2>
          
          <motion.p 
            className={styles.ctaDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of developers who are already using cursor++ to build better software, faster.
          </motion.p>
          
          <motion.div 
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              className={styles.primaryCtaButton}
              to="/docs/user-guide/getting-started"
            >
              <DocIcon />
              View Documentation
            </Link>
            <Link
              className={styles.secondaryCtaButton}
              to="https://github.com/cursor-plus/cursor-plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              GitHub Repository
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.ctaStats}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {GITHUB_STATS.map((stat, index) => (
              <div key={index} className={styles.ctaStat}>
                <div className={styles.ctaStatIcon}>{stat.icon}</div>
                <div className={styles.ctaStatLabel}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 