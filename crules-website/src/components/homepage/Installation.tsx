import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

type InstallationStep = {
  title: string;
  description: string;
  command?: string;
};

const INSTALLATION_STEPS: InstallationStep[] = [
  {
    title: 'Installation',
    description: 'Install the cursor++ CLI using npm:',
    command: 'pip install cursor++'
  },
  {
    title: 'Verifying Installation',
    description: 'Ensure cursor++ was installed correctly:',
    command: 'cursor++ --version'
  },
  {
    title: 'First-Time Setup',
    description: 'Initialize your workspace with cursor++:',
    command: 'cursor++ init'
  }
];

export default function Installation(): React.ReactElement {
  return (
    <section className={styles.installationSection}>
      <div className="container">
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Installation & Usage
        </motion.h2>
        
        <div className={styles.stepsContainer}>
          {INSTALLATION_STEPS.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.installStep}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.stepNumberWrapper}>
                <div className={styles.stepNumber}>{index + 1}</div>
                {/* Step connector line - don't show after last item */}
                {index < INSTALLATION_STEPS.length - 1 && (
                  <div className={styles.stepConnector}></div>
                )}
              </div>
              
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                {step.command && (
                  <motion.div 
                    className={styles.codeBlockWrapper}
                    whileHover={{ 
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                      transform: 'translateY(-2px)'
                    }}
                  >
                    <div className={styles.codeBlock}>
                      <pre><code>{step.command}</code></pre>
                      <motion.button 
                        className={styles.copyButton}
                        title="Copy to clipboard"
                        aria-label="Copy to clipboard"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg 
                          stroke="currentColor" 
                          fill="none" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          height="1em" 
                          width="1em" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.learnMoreContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a 
            href="/docs/user-guide/getting-started" 
            className={styles.learnMoreButton}
          >
            Learn more
            <svg 
              viewBox="0 0 20 20" 
              fill="currentColor"
              width="16"
              height="16"
              className={styles.arrowIcon}
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 