import React, { useRef, useState, type ReactElement } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';
import { FiCopy, FiCheck } from 'react-icons/fi';

// Define types for our data
interface CodeByPackageManager {
  npm: string;
  yarn: string;
  pnpm: string;
}

interface InstallationStep {
  number: number;
  title: string;
  description: string;
  code: CodeByPackageManager;
}

interface CopiedStates {
  [key: number]: boolean;
}

// Helper function to add syntax highlighting to code blocks
const formatCodeWithSyntax = (code: string): string => {
  // Simple syntax highlighting for JavaScript
  const keywords = ['const', 'let', 'var', 'function', 'if', 'else', 'return', 'forEach', 'new'];
  const specialWords = ['console', 'log', 'crules'];
  
  // First escape HTML
  let formattedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  // Apply syntax highlighting
  // Keywords in blue
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    formattedCode = formattedCode.replace(regex, `<span style="color: #569CD6;">${keyword}</span>`);
  });
  
  // Special words in cyan
  specialWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    formattedCode = formattedCode.replace(regex, `<span style="color: #4EC9B0;">${word}</span>`);
  });
  
  // Strings in green - improved regex to handle multi-line strings better
  formattedCode = formattedCode.replace(
    /(['"`])([\s\S]*?)(?:\1|$)/g, 
    match => `<span style="color: #CE9178;">${match}</span>`
  );
  
  // Numbers in light yellow - improved to also catch decimal numbers
  formattedCode = formattedCode.replace(
    /\b(\d*\.?\d+)\b/g,
    match => `<span style="color: #B5CEA8;">${match}</span>`
  );
  
  // Comments in gray
  formattedCode = formattedCode.replace(
    /(\/\/.*)/g,
    match => `<span style="color: #6A9955;">${match}</span>`
  );
  
  // Property keys in object literals in yellow
  formattedCode = formattedCode.replace(
    /(\s*)([a-zA-Z0-9_$]+)(\s*:)/g,
    (match, space, propName, colon) => `${space}<span style="color: #9CDCFE;">${propName}</span>${colon}`
  );
  
  // Function calls in yellow
  formattedCode = formattedCode.replace(
    /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g,
    (match, fnName) => {
      if (keywords.includes(fnName) || specialWords.includes(fnName)) {
        return match; // don't format if already formatted as keyword
      }
      return `<span style="color: #DCDCAA;">${fnName}</span>(`;
    }
  );
  
  // Object properties in white
  formattedCode = formattedCode.replace(
    /(\.\s*)(\w+)/g,
    (match, dot, prop) => `${dot}<span style="color: #E8E8E8;">${prop}</span>`
  );
  
  // Reserved words and operators in pinkish
  ['type', 'params', 'operator', 'field'].forEach(word => {
    const regex = new RegExp(`(["'])${word}(["'])`, 'g');
    formattedCode = formattedCode.replace(regex, `$1<span style="color: #C586C0;">${word}</span>$2`);
  });
  
  return formattedCode;
};

export default function Installation(): ReactElement {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState<'npm' | 'yarn' | 'pnpm'>('npm');
  const [copiedStates, setCopiedStates] = useState<CopiedStates>({});

  // Installation steps
  const steps: InstallationStep[] = [
    {
      number: 1,
      title: 'Installation',
      description: 'Install the CRules package using your preferred package manager.',
      code: {
        npm: 'npm install crules',
        yarn: 'yarn add crules',
        pnpm: 'pnpm add crules'
      }
    },
    {
      number: 2,
      title: 'Create a Ruleset',
      description: 'Initialize a new ruleset to organize your business rules.',
      code: {
        npm: 'npx crules init my-project',
        yarn: 'yarn crules init my-project',
        pnpm: 'pnpm crules init my-project'
      }
    },
    {
      number: 3,
      title: 'Define Rules',
      description: 'Create your first rule with conditions and actions.',
      code: {
        npm: `// Define a simple discount eligibility rule
const discountRule = {
  name: 'discount_eligibility',
  conditions: [
    { field: 'customer.totalPurchases', operator: 'greaterThan', value: 1000 },
    { field: 'customer.loyaltyYears', operator: 'greaterThan', value: 2 }
  ],
  actions: [
    { type: 'applyDiscount', params: { percentage: 15 } }
  ]
};

// Add the rule to your ruleset
crules.addRule(discountRule);`,
        yarn: `// Define a simple discount eligibility rule
const discountRule = {
  name: 'discount_eligibility',
  conditions: [
    { field: 'customer.totalPurchases', operator: 'greaterThan', value: 1000 },
    { field: 'customer.loyaltyYears', operator: 'greaterThan', value: 2 }
  ],
  actions: [
    { type: 'applyDiscount', params: { percentage: 15 } }
  ]
};

// Add the rule to your ruleset
crules.addRule(discountRule);`,
        pnpm: `// Define a simple discount eligibility rule
const discountRule = {
  name: 'discount_eligibility',
  conditions: [
    { field: 'customer.totalPurchases', operator: 'greaterThan', value: 1000 },
    { field: 'customer.loyaltyYears', operator: 'greaterThan', value: 2 }
  ],
  actions: [
    { type: 'applyDiscount', params: { percentage: 15 } }
  ]
};

// Add the rule to your ruleset
crules.addRule(discountRule);`
      }
    },
    {
      number: 4,
      title: 'Evaluate Rules',
      description: 'Evaluate rules against data to determine which actions to take.',
      code: {
        npm: `// Customer data
const customer = {
  id: 'cust-123',
  totalPurchases: 1500,
  loyaltyYears: 3
};

// Evaluate rules
const results = crules.evaluate(customer);

// Handle actions
results.actions.forEach(action => {
  if (action.type === 'applyDiscount') {
    console.log(\`Applying \${action.params.percentage}% discount\`);
  }
});`,
        yarn: `// Customer data
const customer = {
  id: 'cust-123',
  totalPurchases: 1500,
  loyaltyYears: 3
};

// Evaluate rules
const results = crules.evaluate(customer);

// Handle actions
results.actions.forEach(action => {
  if (action.type === 'applyDiscount') {
    console.log(\`Applying \${action.params.percentage}% discount\`);
  }
});`,
        pnpm: `// Customer data
const customer = {
  id: 'cust-123',
  totalPurchases: 1500,
  loyaltyYears: 3
};

// Evaluate rules
const results = crules.evaluate(customer);

// Handle actions
results.actions.forEach(action => {
  if (action.type === 'applyDiscount') {
    console.log(\`Applying \${action.params.percentage}% discount\`);
  }
});`
      }
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

        <div className={styles.installationTabs}>
          <motion.div 
            className={styles.tabsContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              className={`${styles.tabButton} ${activeTab === 'npm' ? styles.activeTab : ''}`} 
              onClick={() => setActiveTab('npm')}
            >
              npm
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'yarn' ? styles.activeTab : ''}`} 
              onClick={() => setActiveTab('yarn')}
            >
              yarn
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'pnpm' ? styles.activeTab : ''}`} 
              onClick={() => setActiveTab('pnpm')}
            >
              pnpm
            </button>
          </motion.div>
        </div>

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
                  <div 
                    className={styles.codeBlock} 
                    dangerouslySetInnerHTML={{ 
                      __html: `<pre>${formatCodeWithSyntax(step.code[activeTab])}</pre>` 
                    }}
                  />
                  <button 
                    className={styles.copyButton}
                    onClick={() => copyToClipboard(step.code[activeTab], step.number)}
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