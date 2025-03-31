import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const STATS = [
  { number: '80%', label: 'Code Acceleration' },
  { number: '45%', label: 'Time Savings' },
  { number: '100%', label: 'AI Integration' }
];

// High-quality SVG check icon
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="currentColor"/>
  </svg>
);

// GitHub icon for the button
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.489C9.34 21.581 9.52 21.288 9.52 21.029C9.52 20.796 9.512 20.081 9.508 19.229C6.726 19.86 6.139 17.921 6.139 17.921C5.685 16.788 5.028 16.496 5.028 16.496C4.128 15.886 5.095 15.899 5.095 15.899C6.092 15.969 6.626 16.903 6.626 16.903C7.521 18.471 8.969 17.968 9.54 17.718C9.631 17.072 9.889 16.629 10.175 16.389C7.955 16.147 5.619 15.301 5.619 11.446C5.619 10.312 6.02 9.389 6.646 8.673C6.545 8.427 6.195 7.382 6.746 5.981C6.746 5.981 7.587 5.721 9.498 6.933C10.294 6.72 11.149 6.614 12 6.61C12.85 6.614 13.705 6.72 14.502 6.933C16.412 5.721 17.251 5.981 17.251 5.981C17.803 7.382 17.453 8.427 17.352 8.673C17.979 9.388 18.377 10.312 18.377 11.446C18.377 15.311 16.037 16.144 13.811 16.38C14.172 16.677 14.492 17.264 14.492 18.16C14.492 19.425 14.478 20.706 14.478 21.029C14.478 21.29 14.655 21.586 15.162 21.488C19.134 20.164 22 16.417 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
  </svg>
);

export default function Hero(): JSX.Element {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Harness the Power of <span style={{ color: 'var(--color-secondary)' }}>Multiple AI Agents</span>
            </motion.h1>
            
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              cursor++ is an agent coordination system that supercharges your Cursor IDE with specialized AI experts working together on your code
            </motion.p>
            
            <motion.div 
              className={styles.featurePoints}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className={styles.featurePoint}>
                <span className={styles.featureIcon}><CheckIcon /></span>
                <span>Specialized AI agents for different programming tasks</span>
              </div>
              <div className={styles.featurePoint}>
                <span className={styles.featureIcon}><CheckIcon /></span>
                <span>Seamless project integration with any codebase</span>
              </div>
              <div className={styles.featurePoint}>
                <span className={styles.featureIcon}><CheckIcon /></span>
                <span>Built-in models for planning, coding, and reviewing</span>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.heroCtas}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link className={`button button--lg ${styles.primaryCta}`} to="/docs/getting-started">
                Get Started
              </Link>
              <Link className={`button button--lg ${styles.secondaryCta}`} to="https://github.com/cursor-ai/cursor-plus">
                <span className={styles.githubIcon}>
                  <GitHubIcon />
                </span>
                GitHub
              </Link>
            </motion.div>
            
            <motion.div 
              className={styles.heroStats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {STATS.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className={styles.animatedVisual}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <svg className={styles.heroSvg} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Central element */}
                <motion.circle
                  cx="250"
                  cy="200"
                  r="60"
                  fill="var(--color-primary)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.text
                  x="250"
                  y="205"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  cursor++
                </motion.text>
                
                {/* Agent nodes */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <circle cx="120" cy="100" r="40" fill="var(--color-secondary)" />
                  <text x="120" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Planner</text>
                </motion.g>
                
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <circle cx="120" cy="300" r="40" fill="var(--color-tertiary)" />
                  <text x="120" y="305" textAnchor="middle" fill="var(--color-text-primary)" fontSize="12" fontWeight="bold">Reviewer</text>
                </motion.g>
                
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <circle cx="380" cy="100" r="40" fill="var(--color-accent-green)" />
                  <text x="380" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Coder</text>
                </motion.g>
                
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  <circle cx="380" cy="300" r="40" fill="var(--color-accent-purple)" />
                  <text x="380" y="305" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Debugger</text>
                </motion.g>
                
                {/* Connection lines */}
                <motion.line
                  x1="156"
                  y1="111"
                  x2="214"
                  y2="164"
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.1 }}
                />
                
                <motion.line
                  x1="156"
                  y1="289"
                  x2="214"
                  y2="236"
                  stroke="var(--color-tertiary)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.2 }}
                />
                
                <motion.line
                  x1="344"
                  y1="111"
                  x2="286"
                  y2="164"
                  stroke="var(--color-accent-green)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.3 }}
                />
                
                <motion.line
                  x1="344"
                  y1="289"
                  x2="286"
                  y2="236"
                  stroke="var(--color-accent-purple)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 2.4 }}
                />
                
                {/* Pulsing effect on central node */}
                <motion.circle
                  cx="250"
                  cy="200"
                  r="70"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 2.5
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 