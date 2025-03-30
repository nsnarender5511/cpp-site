import React, { useRef, type ReactElement } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './styles.module.css';

// Import SVG Icons
import { FiPackage, FiRefreshCw, FiUsers, FiLock, FiZap, FiCode } from 'react-icons/fi';

export default function Features(): ReactElement {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Technical features data
  const features = [
    {
      title: 'Centralized Rules Management',
      description: 'Maintain all your AI agent rules in one main location for easy access and updates across all projects.',
      icon: <FiPackage className={styles.featureIcon} />,
    },
    {
      title: 'Automatic Synchronization',
      description: 'Keep rules in sync across multiple projects with simple commands for syncing and merging changes.',
      icon: <FiRefreshCw className={styles.featureIcon} />,
    },
    {
      title: 'Agent Ecosystem',
      description: 'Access specialized AI agents for different tasks, from planning and implementing features to fixing issues and documentation.',
      icon: <FiUsers className={styles.featureIcon} />,
    },
    {
      title: 'Secure Collaboration',
      description: 'Share consistent agent rules with team members while maintaining control over your development experience.',
      icon: <FiLock className={styles.featureIcon} />,
    },
    {
      title: 'High Performance',
      description: 'Optimized rule syncing and agent selection ensures a smooth and responsive development experience.',
      icon: <FiZap className={styles.featureIcon} />,
    },
    {
      title: 'Extensibility',
      description: 'Create and add custom AI agents to suit your specific development workflow and project requirements.',
      icon: <FiCode className={styles.featureIcon} />,
    },
  ];

  return (
    <section ref={ref} className={styles.featuresSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Technical Features
        </motion.h2>

        <motion.div 
          className={styles.featuresGrid}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 30px rgba(77, 97, 252, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className={styles.featureIconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 