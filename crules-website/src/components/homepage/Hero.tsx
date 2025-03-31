import React, { useRef, useState, useEffect, type ReactElement } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { FiZap, FiUsers, FiGitPullRequest } from 'react-icons/fi';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

export default function Hero(): ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 400 });
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  // Setup container size tracking for responsive sizing
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Browser compatibility check
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        setContainerSize({ 
          width: Math.max(width, 500), // Ensure minimum size
          height: Math.max(height, 400)
        });
      });
      
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);
  
  // Animation variants for the agent network diagram
  const networkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 1,
        delay: i * 0.1
      }
    })
  };
  
  const connectionVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.8,
      transition: { 
        duration: 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };
  
  const pulseVariants = {
    hidden: { scale: 1, opacity: 0.7 },
    visible: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Node positions for the agent network visualization
  const centerPosition = { x: containerSize.width / 2, y: containerSize.height / 2 };
  const radius = Math.min(containerSize.width, containerSize.height) * 0.3;
  
  // Calculate positions in a circle
  const specialistPosition = { 
    x: centerPosition.x + radius * Math.cos(Math.PI/6), 
    y: centerPosition.y - radius * Math.sin(Math.PI/6) 
  };
  
  const developerPosition = { 
    x: centerPosition.x - radius * Math.cos(Math.PI/6), 
    y: centerPosition.y - radius * Math.sin(Math.PI/6) 
  };
  
  const synchronizationPosition = { 
    x: centerPosition.x, 
    y: centerPosition.y + radius
  };

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg button--primary"
            to="/docs/user-guide/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--lg button--secondary"
            to="https://github.com/cursor-ai/cursor-plus-plus">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
} 