import React, { useRef, useState, useEffect, type ReactElement } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { FiZap, FiAlertCircle, FiCode, FiEye } from 'react-icons/fi';

export default function Hero(): ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 400 });
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
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
  
  // Animation variants
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
        ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth path drawing
      }
    }
  };
  
  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5
      }
    })
  };
  
  // Calculate sizes based on container dimensions
  const calculateNodeSize = (importance: number) => {
    const baseSize = Math.min(containerSize.width, containerSize.height) / 8;
    return baseSize * importance;
  };

  // Node positions (optimized for better spacing)
  const wizardPosition = { x: containerSize.width / 2, y: containerSize.height * 0.4 };
  const fixPlannerPosition = { x: containerSize.width * 0.25, y: containerSize.height * 0.35 };
  const implementerPosition = { x: containerSize.width * 0.75, y: containerSize.height * 0.35 };
  const reviewerPosition = { x: containerSize.width / 2, y: containerSize.height * 0.7 };

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                }
              }
            }}
          >
            <motion.h1 
              className={`${styles.heroTitle} text-burgundy`} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              AI Agent Management for Cursor
            </motion.h1>
            
            <motion.p 
              className={`${styles.heroSubtitle} text-secondary leading-normal`} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              Centralize and synchronize your AI agents across multiple projects for consistent development experiences
            </motion.p>
            
            <motion.div 
              className={styles.heroCtas} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
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
            
          </motion.div>
        </div>

        <div className={styles.heroVisual}>
          <motion.div
            ref={containerRef}
            className={styles.animatedVisual}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={networkVariants}
          >
            <motion.svg 
              width="100%" 
              height="100%" 
              viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.heroSvg}
            >
              {/* Background Grid */}
              <motion.path 
                d={`M50 50 H${containerSize.width - 50} V${containerSize.height - 50} H50 Z`}
                stroke="rgba(163, 29, 29, 0.1)" 
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Connections with proper layering */}
              {/* Connection from Fix Planner to Implementer */}
              <motion.path 
                d={`M${fixPlannerPosition.x + 30} ${fixPlannerPosition.y} L${implementerPosition.x - 30} ${implementerPosition.y}`}
                stroke="rgba(163, 29, 29, 0.7)" 
                strokeWidth="4"
                variants={connectionVariants}
              />
              
              {/* Connection from Wizard to Fix Planner */}
              <motion.path 
                d={`M${wizardPosition.x - 20} ${wizardPosition.y + 20} L${fixPlannerPosition.x + 20} ${fixPlannerPosition.y + 10}`}
                stroke="rgba(163, 29, 29, 0.7)" 
                strokeWidth="4"
                variants={connectionVariants}
              />
              
              {/* Connection from Wizard to Implementer */}
              <motion.path 
                d={`M${wizardPosition.x + 20} ${wizardPosition.y + 20} L${implementerPosition.x - 20} ${implementerPosition.y + 10}`}
                stroke="rgba(163, 29, 29, 0.7)" 
                strokeWidth="4"
                variants={connectionVariants}
              />
              
              {/* Connection from Implementer to Code Reviewer */}
              <motion.path 
                d={`M${implementerPosition.x - 20} ${implementerPosition.y + 30} L${reviewerPosition.x + 30} ${reviewerPosition.y - 20}`}
                stroke="rgba(163, 29, 29, 0.7)" 
                strokeWidth="4"
                variants={connectionVariants}
              />
              
              {/* Connection from Code Reviewer to Wizard (feedback loop) */}
              <motion.path 
                d={`M${reviewerPosition.x - 20} ${reviewerPosition.y - 20} L${wizardPosition.x - 10} ${wizardPosition.y + 30}`}
                stroke="rgba(163, 29, 29, 0.7)" 
                strokeWidth="3"
                strokeDasharray="7,7"
                variants={connectionVariants}
              />
              
              {/* Fix Planner - Feature highlighted */}
              <motion.circle 
                cx={fixPlannerPosition.x} 
                cy={fixPlannerPosition.y} 
                r={calculateNodeSize(1.2)}
                fill="rgba(163, 29, 29, 0.8)"
                stroke="rgba(163, 29, 29, 0.9)"
                strokeWidth="3"
                custom={1}
                variants={nodeVariants}
                whileHover={{ 
                  scale: 1.08,
                  filter: "drop-shadow(0px 0px 8px rgba(163, 29, 29, 0.5))"
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  filter: { duration: 0.2 }
                }}
              />
              
              {/* Implementer */}
              <motion.circle 
                cx={implementerPosition.x} 
                cy={implementerPosition.y} 
                r={calculateNodeSize(1.2)}
                fill="rgba(163, 29, 29, 0.8)"
                custom={2}
                variants={nodeVariants}
                whileHover={{ 
                  scale: 1.08,
                  filter: "drop-shadow(0px 0px 8px rgba(163, 29, 29, 0.5))"
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  filter: { duration: 0.2 }
                }}
              />
              
              {/* Code Reviewer */}
              <motion.circle 
                cx={reviewerPosition.x} 
                cy={reviewerPosition.y} 
                r={calculateNodeSize(1.2)}
                fill="rgba(163, 29, 29, 0.8)"
                custom={3}
                variants={nodeVariants}
                whileHover={{ 
                  scale: 1.08,
                  filter: "drop-shadow(0px 0px 8px rgba(163, 29, 29, 0.5))"
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  filter: { duration: 0.2 }
                }}
              />
              
              {/* Central Node - Technical Wizard */}
              <motion.circle 
                cx={wizardPosition.x} 
                cy={wizardPosition.y} 
                r={calculateNodeSize(1.4)}
                fill="rgba(163, 29, 29, 0.9)"
                custom={0}
                variants={nodeVariants}
                whileHover={{ 
                  scale: 1.08,
                  filter: "drop-shadow(0px 0px 8px rgba(163, 29, 29, 0.5))"
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  filter: { duration: 0.2 }
                }}
              />
              
              {/* Fix Planner Icon and Label */}
              <motion.foreignObject
                x={fixPlannerPosition.x - 30} 
                y={fixPlannerPosition.y - 30} 
                width="60" 
                height="60"
                custom={1.2}
                variants={nodeVariants}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%', 
                  height: '100%' 
                }}>
                  <FiAlertCircle color="white" size={36} />
                </div>
              </motion.foreignObject>
              
              <motion.foreignObject
                x={fixPlannerPosition.x - 60} 
                y={fixPlannerPosition.y + calculateNodeSize(1.2) + 5} 
                width="120" 
                height="40"
                custom={1.4}
                variants={labelVariants}
              >
                <div style={{ 
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  lineHeight: '1.2',
                  letterSpacing: '0.5px',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}>
                  Fix Planner
                </div>
              </motion.foreignObject>
              
              {/* Implementer Icon and Label */}
              <motion.foreignObject
                x={implementerPosition.x - 30} 
                y={implementerPosition.y - 30} 
                width="60" 
                height="60"
                custom={2.2}
                variants={nodeVariants}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%', 
                  height: '100%' 
                }}>
                  <FiCode color="white" size={36} />
                </div>
              </motion.foreignObject>
              
              <motion.foreignObject
                x={implementerPosition.x - 60} 
                y={implementerPosition.y + calculateNodeSize(1.2) + 5} 
                width="120" 
                height="40"
                custom={2.4}
                variants={labelVariants}
              >
                <div style={{ 
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  lineHeight: '1.2',
                  letterSpacing: '0.5px',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}>
                  Implementer
                </div>
              </motion.foreignObject>
              
              {/* Code Reviewer Icon and Label */}
              <motion.foreignObject
                x={reviewerPosition.x - 30} 
                y={reviewerPosition.y - 30} 
                width="60" 
                height="60"
                custom={3.2}
                variants={nodeVariants}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%', 
                  height: '100%' 
                }}>
                  <FiEye color="white" size={36} />
                </div>
              </motion.foreignObject>
              
              <motion.foreignObject
                x={reviewerPosition.x - 60} 
                y={reviewerPosition.y + calculateNodeSize(1.2) + 5} 
                width="120" 
                height="40"
                custom={3.4}
                variants={labelVariants}
              >
                <div style={{ 
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  lineHeight: '1.2',
                  letterSpacing: '0.5px',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}>
                  Code Reviewer
                </div>
              </motion.foreignObject>
              
              {/* Wizard Icon and Label */}
              <motion.foreignObject
                x={wizardPosition.x - 30} 
                y={wizardPosition.y - 30} 
                width="60" 
                height="60"
                custom={0.2}
                variants={nodeVariants}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%', 
                  height: '100%' 
                }}>
                  <FiZap color="white" size={36} />
                </div>
              </motion.foreignObject>
              
              <motion.foreignObject
                x={wizardPosition.x - 60} 
                y={wizardPosition.y + calculateNodeSize(1.4) + 5} 
                width="120" 
                height="40"
                custom={0.4}
                variants={labelVariants}
              >
                <div style={{ 
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  lineHeight: '1.2',
                  letterSpacing: '0.5px',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}>
                  Wizard
                </div>
              </motion.foreignObject>
              
              {/* Highlight Pulse Animation for Fix Planner */}
              <motion.circle
                cx={fixPlannerPosition.x}
                cy={fixPlannerPosition.y}
                r={calculateNodeSize(1.2) + 5}
                stroke="rgba(163, 29, 29, 0.5)"
                strokeWidth="5"
                fill="none"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.7, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 