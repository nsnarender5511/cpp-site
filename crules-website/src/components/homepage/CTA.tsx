import React, { useRef, type ReactElement } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { FiGithub } from 'react-icons/fi';

// Define types for floating elements
interface FloatingElement {
  delay: number;
  duration: number;
  x: [number, number];
  y: [number, number];
  rotate: [number, number];
}

export default function CTA(): ReactElement {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Floating elements for background
  const floatingElements: FloatingElement[] = [
    { delay: 0, duration: 5, x: [-10, 10], y: [-15, 5], rotate: [-5, 5] },
    { delay: 0.5, duration: 7, x: [5, -5], y: [10, -10], rotate: [3, -3] },
    { delay: 1, duration: 6, x: [-8, 8], y: [8, -8], rotate: [0, 0] },
    { delay: 1.5, duration: 8, x: [12, -12], y: [-5, 5], rotate: [-4, 4] },
  ];

  return (
    <section ref={ref} className={styles.ctaSection} id="cta">
      {/* Background animations */}
      <div className={styles.ctaBackground}>
        {floatingElements.map((el, index) => (
          <motion.div
            key={index}
            className={styles.floatingElement}
            style={{
              left: `${15 + (index * 20)}%`,
              top: `${20 + (index % 3 * 25)}%`,
              width: `${80 + (index * 10)}px`,
              height: `${80 + (index * 10)}px`,
            }}
            animate={{
              x: el.x,
              y: el.y,
              rotate: el.rotate,
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: el.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.ctaContainer}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${styles.ctaTitle} text-cream font-bold`}>Start Building with CRules Today</h2>
          <p className={`${styles.ctaDescription} text-cream font-medium`}>
            Simplify your business logic, improve maintainability, and empower your team with a powerful rules engine
          </p>
          
          <div className={styles.ctaButtons}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                className={`button button--lg ${styles.primaryCtaButton}`} 
                to="/docs/README"
              >
                Get Started
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                className={`button button--lg ${styles.secondaryCtaButton}`} 
                to="https://github.com/crules-org/crules-website"
              >
                <FiGithub className={styles.githubIcon} />
                View on GitHub
              </Link>
            </motion.div>
          </div>
          
          <div className={styles.ctaStats}>
            <div className={`${styles.statItem} text-cream`}>
              <span className={`${styles.statIcon} text-2xl`}>★</span>
              <span className={`${styles.statText} font-semibold`}>Star us on GitHub</span>
            </div>
            <div className={`${styles.statItem} text-cream`}>
              <span className={`${styles.statIcon} text-2xl`}>⚡</span>
              <span className={`${styles.statText} font-semibold`}>Lightning fast setup</span>
            </div>
            <div className={`${styles.statItem} text-cream`}>
              <span className={`${styles.statIcon} text-2xl`}>🔧</span>
              <span className={`${styles.statText} font-semibold`}>Fully customizable</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 