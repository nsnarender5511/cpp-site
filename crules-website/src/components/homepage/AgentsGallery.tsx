import React, { useRef, useState, type ReactElement } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { FiArrowRight, FiCode, FiCpu, FiDatabase, FiServer, FiShuffle, FiZap } from 'react-icons/fi';

export default function AgentsGallery(): ReactElement {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedAgent, setExpandedAgent] = useState(null);

  // Agents data
  const agents = [
    {
      id: 'rule-builder',
      name: 'Rule Builder',
      description: 'Create and manage business rules with a visual builder.',
      icon: <FiCode className={styles.agentIcon} />,
      features: [
        'Visual rule creation interface',
        'Condition and action templates',
        'Rule testing and validation',
        'Import/export capabilities'
      ],
      learnMoreUrl: '/docs/agents/rule-builder'
    },
    {
      id: 'rule-executor',
      name: 'Rule Executor',
      description: 'High-performance rule evaluation engine.',
      icon: <FiZap className={styles.agentIcon} />,
      features: [
        'Parallel rule execution',
        'Optimized condition evaluation',
        'Performance monitoring',
        'Resource usage controls'
      ],
      learnMoreUrl: '/docs/agents/rule-executor'
    },
    {
      id: 'data-connector',
      name: 'Data Connector',
      description: 'Integrate with various data sources for rule processing.',
      icon: <FiDatabase className={styles.agentIcon} />,
      features: [
        'Database connectors (SQL, NoSQL)',
        'API integrations',
        'File system adapters',
        'Real-time data streams'
      ],
      learnMoreUrl: '/docs/agents/data-connector'
    },
    {
      id: 'decision-service',
      name: 'Decision Service',
      description: 'Expose rules as API endpoints for application integration.',
      icon: <FiServer className={styles.agentIcon} />,
      features: [
        'RESTful API endpoints',
        'Authentication and authorization',
        'Request rate limiting',
        'Response caching'
      ],
      learnMoreUrl: '/docs/agents/decision-service'
    },
    {
      id: 'rule-analyzer',
      name: 'Rule Analyzer',
      description: 'Analyze and optimize rule performance and effectiveness.',
      icon: <FiCpu className={styles.agentIcon} />,
      features: [
        'Rule execution statistics',
        'Bottleneck identification',
        'Optimization suggestions',
        'Impact analysis'
      ],
      learnMoreUrl: '/docs/agents/rule-analyzer'
    },
    {
      id: 'test-generator',
      name: 'Test Generator',
      description: 'Generate test scenarios to validate rule behavior.',
      icon: <FiShuffle className={styles.agentIcon} />,
      features: [
        'Automatic test case generation',
        'Edge case identification',
        'Regression testing',
        'Test coverage reports'
      ],
      learnMoreUrl: '/docs/agents/test-generator'
    }
  ];

  return (
    <section ref={ref} className={styles.agentsSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Available Agents
        </motion.h2>
        
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          CRules provides specialized agents to handle different aspects of business rule management
        </motion.p>

        <motion.div 
          className={styles.agentsGrid}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              className={styles.agentCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(77, 97, 252, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setExpandedAgent(agent.id === expandedAgent ? null : agent.id)}
            >
              <div className={styles.agentIconWrapper}>
                {agent.icon}
              </div>
              <h3 className={styles.agentTitle}>{agent.name}</h3>
              <p className={styles.agentDescription}>{agent.description}</p>
              
              <AnimatePresence>
                {expandedAgent === agent.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.expandedContent}
                  >
                    <ul className={styles.featuresList}>
                      {agent.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>{feature}</li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={agent.learnMoreUrl} 
                      className={styles.learnMoreLink}
                    >
                      Learn more <FiArrowRight className={styles.arrowIcon} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!expandedAgent || expandedAgent !== agent.id ? (
                <button className={styles.expandButton} onClick={(e) => {
                  e.stopPropagation();
                  setExpandedAgent(agent.id);
                }}>
                  Learn more
                </button>
              ) : (
                <button className={styles.collapseButton} onClick={(e) => {
                  e.stopPropagation();
                  setExpandedAgent(null);
                }}>
                  Close
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 