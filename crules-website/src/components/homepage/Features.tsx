import React, { useRef, type ReactElement } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './styles.module.css';

// Import SVG Icons
import { FiPackage, FiCheckCircle, FiGitBranch, FiLayers, FiCpu, FiZap } from 'react-icons/fi';

export default function Features(): ReactElement {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Technical features data
  const features = [
    {
      title: 'Rule Definition',
      description: 'Define complex business rules with a simple, intuitive API that keeps logic separate from application code.',
      icon: <FiPackage className={styles.featureIcon} />,
    },
    {
      title: 'Schema Validation',
      description: 'Built-in validation ensures rules are correctly structured and prevents common errors before deployment.',
      icon: <FiCheckCircle className={styles.featureIcon} />,
    },
    {
      title: 'Version Control',
      description: 'Track changes to rules with automatic versioning. Roll back to previous versions when needed.',
      icon: <FiGitBranch className={styles.featureIcon} />,
    },
    {
      title: 'Rule Isolation',
      description: 'Keep business logic isolated and independent of your application code, making both easier to maintain.',
      icon: <FiLayers className={styles.featureIcon} />,
    },
    {
      title: 'Extensibility',
      description: 'Create custom functions and extensions to handle specific business requirements and integrations.',
      icon: <FiCpu className={styles.featureIcon} />,
    },
    {
      title: 'High Performance',
      description: 'Optimized evaluation engine ensures rules execute quickly, even with complex conditions and large datasets.',
      icon: <FiZap className={styles.featureIcon} />,
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