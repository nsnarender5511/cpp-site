import React, { type JSX } from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import styles from './api-reference.module.css';

export default function ApiReference(): JSX.Element {
  return (
    <Layout
      title="API Reference"
      description="Complete reference documentation for the CRules API">
      <div className={styles.apiContainer}>
        <div className={styles.apiContent}>
          <h1>API Reference</h1>
          <p>
            This page provides comprehensive documentation for the CRules API.
            Explore the endpoints, request formats, and response structures to
            integrate CRules into your applications.
          </p>
          <div className={styles.apiSection}>
            <h2>Getting Started</h2>
            <p>
              To use the CRules API, you'll need to authenticate using an API key.
              You can obtain an API key by registering at the CRules dashboard.
            </p>
            <pre className={styles.codeBlock}>
              <code>
                {`// Example API request
const response = await fetch('https://api.crules.dev/v1/rules', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const rules = await response.json();`}
              </code>
            </pre>
          </div>
          <div className={styles.apiSection}>
            <h2>Core Endpoints</h2>
            <ul className={styles.endpoints}>
              <li>
                <h3>GET /rules</h3>
                <p>Fetch all rules in your organization</p>
              </li>
              <li>
                <h3>POST /rules</h3>
                <p>Create a new rule</p>
              </li>
              <li>
                <h3>GET /rules/:id</h3>
                <p>Retrieve a specific rule by ID</p>
              </li>
              <li>
                <h3>PUT /rules/:id</h3>
                <p>Update an existing rule</p>
              </li>
              <li>
                <h3>DELETE /rules/:id</h3>
                <p>Delete a rule</p>
              </li>
              <li>
                <h3>POST /rules/validate</h3>
                <p>Validate a rule without saving it</p>
              </li>
              <li>
                <h3>GET /deployments</h3>
                <p>List all rule deployments</p>
              </li>
              <li>
                <h3>POST /deployments</h3>
                <p>Deploy rules to an environment</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
} 