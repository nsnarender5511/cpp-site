import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type InstallationStep = {
  title: string;
  description: string;
  command?: string;
};

const INSTALLATION_STEPS: InstallationStep[] = [
  {
    title: 'Installation',
    description: 'Install the cursor++ CLI using npm:',
    command: 'npm install -g cursor++'
  },
  {
    title: 'Initialize',
    description: 'Create a new project or initialize in an existing one:',
    command: 'cursor++ init'
  },
  {
    title: 'Configure',
    description: 'Edit your .cursor/rules directory to define your custom agents.',
  },
  {
    title: 'Run',
    description: 'Activate an agent to assist your development:',
    command: 'cursor++ agent select'
  }
];

export default function Installation(): React.ReactElement {
  return (
    <section className={clsx('section', styles.section)}>
      <div className="container">
        <div className={clsx('row', styles.row)}>
          <div className={clsx('col col--6', styles.textColumn)}>
            <h2 className={styles.sectionTitle}>Quick Start</h2>
            <p className={styles.paragraph}>
              Get started with cursor++ in just a few simple steps. Our CLI tool makes it
              easy to set up and run custom AI agents for your Cursor IDE workflow.
            </p>
          </div>
          
          <div className={clsx('col col--6', styles.stepsColumn)}>
            <div className={styles.stepsContainer}>
              {INSTALLATION_STEPS.map((step, index) => (
                <div key={index} className="installationStep">
                  <div className="stepNumber">{index + 1}</div>
                  <div className="stepContent">
                    <div className="stepTitle">{step.title}</div>
                    <p>{step.description}</p>
                    
                    {step.command && (
                      <div className="codeBlockWrapper">
                        <div className="codeBlockContent">
                          <pre>
                            <code>{step.command}</code>
                          </pre>
                          <button 
                            className="copyButton"
                            title="Copy to clipboard"
                            aria-label="Copy to clipboard"
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
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 