export const codeExampleTabs = [
  {
    value: 'cli',
    content: `# Initialize rules in the current project
crules init

# List available agents
crules agent

# Get detailed information about an agent
crules agent info wizard

# Interactively select an agent
crules agent select

# Synchronize rules with main location
crules sync

# Merge local changes to main location
crules merge

# View all registered projects
crules list

# Clean up non-existent projects
crules clean`,
    label: 'CLI'
  },
  {
    value: 'javascript',
    content: `const discountRule = {
  name: 'discount_eligibility',
  conditions: [
    {
      field: 'customer.totalPurchases',
      value: 1000,
      operator: 'greaterThan'
    },
    {
      field: 'customer.loyaltyYears',
      value: 2,
      operator: 'greaterThan'
    }
  ],
  actions: [
    {
      type: 'applyDiscount',
      params: {
        percentage: 15
      }
    }
  ]
};

const customer = {
  id: 'cust-123',
  totalPurchases: 1500,
  loyaltyYears: 3
};

const results = crules.evaluate(customer);

results.actions.forEach(action => {
  if (action.type === 'applyDiscount') {
    console.log(\`Applying ${action.params.percentage}% discount\`);
  }
});`,
    label: 'JavaScript'
  },
  {
    value: 'agents',
    content: `# Using the Technical Wizard agent
@wizard.mdc I need help designing a new API endpoint

# Using the Feature Planner agent
@feature-planner.mdc Create a plan for implementing user authentication

# Using the Fix Planner agent
@fix-planner.mdc Analyze why our login flow fails on mobile devices

# Using the Implementer agent
@implementer.mdc Implement the authentication service based on the plan

# Using the Runner agent
@runner.mdc Run tests for the authentication service

# Using the Documentation agent
@documentation-agent.mdc Create API documentation for the auth endpoints

# Using the Code Reviewer agent
@code-reviewer.mdc Review the authentication service implementation`,
    label: 'Agents'
  }
];
