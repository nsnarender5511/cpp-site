import React, { useRef, useState, type ReactElement } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { FiArrowRight, FiCode, FiCpu, FiDatabase, FiServer, FiShuffle, FiZap, FiPieChart, FiAlertCircle, FiPlay, FiBook, FiEye, FiGitCommit } from 'react-icons/fi';

export default function AgentsGallery(): ReactElement {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedAgent, setExpandedAgent] = useState(null);

  // Agents data
  const agents = [
    {
      id: 'wizard',
      name: 'Technical Wizard',
      description: 'High-level guidance and coordination for architecture decisions and project planning.',
      icon: <FiZap className={styles.agentIcon} />,
      features: [
        'Expert architectural guidance',
        'Design patterns discussion',
        'Technical exploration and analysis',
        'Clean code advisory'
      ],
      learnMoreUrl: '/docs/user-guide/agents#wizard'
    },
    {
      id: 'feature-planner',
      name: 'Feature Planner',
      description: 'Breaks down new feature requirements into detailed implementation plans.',
      icon: <FiPieChart className={styles.agentIcon} />,
      features: [
        'Feature implementation planning',
        'Requirements breakdown',
        'Task sequencing',
        'Integration strategies'
      ],
      learnMoreUrl: '/docs/user-guide/agents#feature-planner'
    },
    {
      id: 'fix-planner',
      name: 'Fix Planner',
      description: 'Analyzes bugs and issues and creates detailed plans to resolve them.',
      icon: <FiAlertCircle className={styles.agentIcon} />,
      features: [
        'Bug analysis',
        'Fix planning',
        'Root cause identification',
        'Testing strategies'
      ],
      learnMoreUrl: '/docs/user-guide/agents#fix-planner'
    },
    {
      id: 'implementer',
      name: 'Implementer',
      description: 'Translates plans into working code based on specifications.',
      icon: <FiCode className={styles.agentIcon} />,
      features: [
        'Code implementation',
        'Plan translation',
        'Best practices application',
        'Efficient solutions'
      ],
      learnMoreUrl: '/docs/user-guide/agents#implementer'
    },
    {
      id: 'runner',
      name: 'Runner',
      description: 'Tests and verifies implementations to ensure they work correctly.',
      icon: <FiPlay className={styles.agentIcon} />,
      features: [
        'Test running',
        'Implementation verification',
        'Issue identification',
        'Performance monitoring'
      ],
      learnMoreUrl: '/docs/user-guide/agents#runner'
    },
    {
      id: 'documentation-agent',
      name: 'Documentation Agent',
      description: 'Creates and organizes documentation for code and features.',
      icon: <FiBook className={styles.agentIcon} />,
      features: [
        'Documentation creation',
        'API reference',
        'User guides',
        'Example generation'
      ],
      learnMoreUrl: '/docs/user-guide/agents#documentation-agent'
    },
    {
      id: 'code-reviewer',
      name: 'Code Reviewer',
      description: 'Reviews code for quality issues and suggests improvements.',
      icon: <FiEye className={styles.agentIcon} />,
      features: [
        'Code quality assessment',
        'Best practices review',
        'Security review',
        'Performance optimization'
      ],
      learnMoreUrl: '/docs/user-guide/agents#code-reviewer'
    },
    {
      id: 'git-committer',
      name: 'Git Committer',
      description: 'Helps create commit messages and manage version control changes.',
      icon: <FiGitCommit className={styles.agentIcon} />,
      features: [
        'Commit message creation',
        'Change summarization',
        'Version control assistance',
        'Changelog updates'
      ],
      learnMoreUrl: '/docs/user-guide/agents#git-committer'
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