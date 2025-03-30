import React, { useRef, useState, type ReactElement } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';
import { FiCopy, FiCheck } from 'react-icons/fi';

// Define types for our data
interface InstallationStep {
  number: number;
  title: string;
  description: string;
  code: string;
}

interface CopiedStates {
  [key: number]: boolean;
}

// Function to render code with highlighted commands
const CodeBlock = ({ code }: { code: string }) => {
  // Split the code by lines
  const lines = code.split('\n');
  
  // Function to highlight commands in a line
  const highlightCommands = (line: string) => {
    const commandPattern = /\b(brew|tap|install|crules|init|--version|nsnarender5511)\b/g;
    
    // If line starts with #, it's a comment
    if (line.trim().startsWith('#')) {
      return <span className={styles.comment}>{line}</span>;
    }
    
    // Find all commands in the line
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = commandPattern.exec(line)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      
      // Add the command with highlight
      parts.push(
        <span key={match.index} className={styles.command}>
          {match[0]}
        </span>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }
    
    return <>{parts.length > 0 ? parts : line}</>;
  };
  
  return (
    <pre className={styles.codeBlock}>
      <code>
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {highlightCommands(line)}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </code>
    </pre>
  );
};

export default function Installation(): ReactElement {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [copiedStates, setCopiedStates] = useState<CopiedStates>({});

  // Installation steps
  const steps: InstallationStep[] = [
    {
      number: 1,
      title: 'Installation',
      description: 'Install the crules tool using Homebrew on macOS and Linux.',
      code: 'brew tap nsnarender5511/tap\nbrew install crules'
    },
    {
      number: 2,
      title: 'Verifying Installation',
      description: 'Confirm that crules is installed correctly on your system.',
      code: 'crules --version\n\n# You should see output similar to:\n# crules v1.0.0'
    },
    {
      number: 3,
      title: 'First-Time Setup',
      description: 'Set up your main rules location where all your rules will be stored and synced from.',
      code: 'crules init'
    }
  ];

  // Handle copy to clipboard
  const copyToClipboard = (text: string, stepNumber: number): void => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({
        ...prev,
        [stepNumber]: true
      }));
      
      // Reset copy state after 2 seconds
      setTimeout(() => {
        setCopiedStates(prev => ({
          ...prev,
          [stepNumber]: false
        }));
      }, 2000);
    });
  };

  return (
    <section ref={ref} className={styles.installationSection} id="installation">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Installation & Usage
        </motion.h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.installStep}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                <div className={styles.codeBlockWrapper}>
                  <CodeBlock code={step.code} />
                  <button 
                    className={styles.copyButton}
                    onClick={() => copyToClipboard(step.code, step.number)}
                    title="Copy to clipboard"
                  >
                    {copiedStates[step.number] ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 