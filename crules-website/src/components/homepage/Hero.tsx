import React, { useRef, type ReactElement } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Hero(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  return (
    <section ref={ref} className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 className={`${styles.heroTitle} text-burgundy`} variants={itemVariants}>
              AI Agent Management for Cursor
            </motion.h1>
            
            <motion.p className={`${styles.heroSubtitle} text-secondary leading-normal`} variants={itemVariants}>
              Centralize and synchronize your AI agents across multiple projects for consistent development experiences
            </motion.p>
            
            <motion.div className={styles.heroCtas} variants={itemVariants}>
              <Link 
                className="button button--primary-gradient button--lg"
                to="/docs/README"
              >
                Get Started
              </Link>
              <Link 
                className="button button--secondary button--lg"
                to="https://github.com/crules-org/crules-website"
              >
                View on GitHub
              </Link>
            </motion.div>
            
            <motion.div className={styles.heroStats} variants={itemVariants}>
              <div className={styles.statItem}>
                <span className={`${styles.statNumber} text-red font-bold`}>500+</span>
                <span className={`${styles.statLabel} text-secondary`}>Installations</span>
              </div>
              <div className={styles.statItem}>
                <span className={`${styles.statNumber} text-red font-bold`}>4.9</span>
                <span className={`${styles.statLabel} text-secondary`}>Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.heroVisual}>
          <motion.div
            className={styles.animatedVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* SVG Visualization - Abstract representation of business rules */}
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 500 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.heroSvg}
            >
              {/* Background Grid */}
              <motion.path 
                d="M50 50 H450 V350 H50 Z" 
                stroke="rgba(163, 29, 29, 0.1)" 
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Node 1 */}
              <motion.circle 
                cx="150" 
                cy="150" 
                r="30" 
                fill="rgba(163, 29, 29, 0.7)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              
              {/* Node 2 */}
              <motion.circle 
                cx="300" 
                cy="120" 
                r="25" 
                fill="rgba(163, 29, 29, 0.6)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              
              {/* Node 3 */}
              <motion.circle 
                cx="350" 
                cy="250" 
                r="35" 
                fill="rgba(163, 29, 29, 0.8)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
              
              {/* Node 4 */}
              <motion.circle 
                cx="200" 
                cy="280" 
                r="20" 
                fill="rgba(163, 29, 29, 0.5)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              />
              
              {/* Connection 1-2 */}
              <motion.path 
                d="M150 150 L300 120" 
                stroke="rgba(163, 29, 29, 0.6)" 
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              
              {/* Connection 2-3 */}
              <motion.path 
                d="M300 120 L350 250" 
                stroke="rgba(163, 29, 29, 0.6)" 
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />
              
              {/* Connection 3-4 */}
              <motion.path 
                d="M350 250 L200 280" 
                stroke="rgba(163, 29, 29, 0.6)" 
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              />
              
              {/* Connection 4-1 */}
              <motion.path 
                d="M200 280 L150 150" 
                stroke="rgba(163, 29, 29, 0.6)" 
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 