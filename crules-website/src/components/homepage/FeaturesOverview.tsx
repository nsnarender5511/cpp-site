import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './styles.module.css';

// High-quality SVG icons
const CoordinationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
    <path d="M17 10.5C17 13.15 13.67 15.25 12.92 15.77C12.64 15.97 12.25 15.96 11.98 15.76C11.23 15.24 7.98 13.16 7.98 10.5C7.98 8.57 9.56 7 11.5 7C12.45 7 13.31 7.37 13.93 7.99C14.56 7.37 15.41 7 16.38 7C18.32 7 19.9 8.57 19.9 10.5C19.9 11.71 19.17 12.81 18.06 13.47C17.65 13.73 17.11 13.61 16.84 13.2C16.58 12.79 16.7 12.25 17.11 11.99C17.67 11.65 18 11.08 18 10.5C18 9.67 17.33 9 16.5 9C15.92 9 15.41 9.33 15.2 9.82C15 10.3 14.47 10.54 14 10.33C13.53 10.13 13.29 9.6 13.5 9.13C13.71 8.64 13.2 8 12.5 8C11.67 8 11 8.67 11 9.5C11 10.46 12.11 11.32 12.5 11.66C12.51 11.53 12.5 11.39 12.5 11.25C12.5 10.73 12.91 10.3 13.42 10.25C13.89 10.21 14.31 10.53 14.4 11C14.5 11.53 14.22 12.05 13.76 12.25C13.32 12.44 12.79 12.24 12.5 11.83C12.11 12.17 11 13.03 11 14C11 14.55 11.45 15 12 15C12.55 15 13 14.55 13 14C13 13.45 13.45 13 14 13C14.55 13 15 13.45 15 14C15 15.66 13.66 17 12 17C10.34 17 9 15.66 9 14C9 12.43 10.2 11.13 11.26 10.38C11.09 10.11 11 9.81 11 9.5C11 7.57 12.57 6 14.5 6C15.45 6 16.33 6.38 16.95 7C17.57 6.38 18.42 6 19.37 6C21.31 6 22.89 7.57 22.89 9.5C22.89 12.16 19.56 14.25 18.81 14.77C18.53 14.96 18.15 14.95 17.89 14.75C17.13 14.24 14 12.2 14 9.5C14 9.03 14.07 8.57 14.22 8.14C13.38 8.5 12.8 9.27 12.8 10.17C12.8 11.5 14.28 12.69 14.5 12.87C14.75 12.77 15 12.63 15.25 12.47C15.66 12.2 16.2 12.32 16.47 12.73C16.73 13.14 16.61 13.68 16.2 13.95C15.57 14.4 14.9 14.78 14.28 15.09C13.97 15.25 13.6 15.22 13.32 15.03C12.57 14.5 10 12.44 10 10.17C10 8.63 11.09 7.32 12.54 7.04C12.19 7.01 11.84 7 11.5 7C9.56 7 7.98 8.57 7.98 10.5H7.97Z" fill="currentColor"/>
  </svg>
);

const IntegrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5ZM19 19.09H5V4.91H19V19.09ZM6 15H18V17H6V15ZM6 11H18V13H6V11ZM6 7H18V9H6V7Z" fill="currentColor"/>
  </svg>
);

const FEATURES_DATA = [
  {
    title: 'Intelligent Agent Coordination',
    description: 'Cursor++ manages multiple AI agents with specialized expertise, coordinating them to work together on your projects. This multi-agent system creates a more effective development process than single LLM solutions.',
    icon: <CoordinationIcon />,
    color: 'var(--color-primary)'
  },
  {
    title: 'Seamless Project Integration',
    description: 'Integrate cursor++ into your existing projects with minimal setup. The platform adapts to your project structure and development workflow, making it easy to onboard and start using specialized agents immediately.',
    icon: <IntegrationIcon />,
    color: 'var(--color-secondary)'
  }
];

export default function FeaturesOverview(): JSX.Element {
  return (
    <section className={styles.featuresOverviewSection}>
      <div className={styles.container}>
        <div className={styles.featuresHeader}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Multi-Agent AI Designed for <span className={styles.titleHighlight}>Developers</span>
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cursor++ coordinates specialized AI agents that work together to solve complex development tasks
          </motion.p>
        </div>

        <div className={styles.featuresContentArea}>
          <div className={styles.featuresTextContent}>
            {FEATURES_DATA.map((feature, index) => (
              <motion.div 
                key={index}
                className={styles.featureItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div 
                  className={styles.featureIcon} 
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.codingWindow}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.windowHeader}>
              <div className={styles.windowControls}>
                <span className={styles.windowControl}></span>
                <span className={styles.windowControl}></span>
                <span className={styles.windowControl}></span>
              </div>
              <div className={styles.windowTitle}>cursor++</div>
            </div>
            <div className={styles.windowContent}>
              <pre className={styles.codeSnippet}>
                <code>
{`/* Define specialized agents */
const reviewerAgent = cursor.defineAgent({
  name: 'code-reviewer',
  description: 'Reviews code for quality issues'
});

const plannerAgent = cursor.defineAgent({
  name: 'planner',
  description: 'Plans implementation steps'
});

/* Coordinate agents to work together */
const result = await cursor.run({
  agents: [reviewerAgent, plannerAgent],
  task: 'Refactor authentication system'
});`}
                </code>
              </pre>
            </div>
            
            {/* Agent bubbles */}
            <div className={styles.agentVisual}>
              <div className={clsx(styles.agentConnection, styles.connectionLine1)}>
                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path
                    d="M 10,25 C 30,5 70,5 90,25"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className={styles.animatedPath}
                  />
                </svg>
              </div>
              <div className={clsx(styles.agentConnection, styles.connectionLine2)}>
                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path
                    d="M 90,25 C 70,45 30,45 10,25"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className={styles.animatedPath}
                  />
                </svg>
              </div>
                
              <motion.div 
                className={clsx(styles.agentBubble, styles.reviewerBubble)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.bubbleContent}>Code Reviewer</div>
              </motion.div>
              
              <motion.div 
                className={clsx(styles.agentBubble, styles.centralBubble)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.bubbleContent}>cursor++</div>
              </motion.div>
              
              <motion.div 
                className={clsx(styles.agentBubble, styles.plannerBubble)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.bubbleContent}>Planner</div>
              </motion.div>
              
              <motion.div 
                className={clsx(styles.agentBubble, styles.implementerBubble)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className={styles.bubbleContent}>Implementer</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 