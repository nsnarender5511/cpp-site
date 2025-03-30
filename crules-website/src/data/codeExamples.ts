export const codeExampleTabs = [
  {
    label: 'CLI',
    value: 'cli',
    content: `# Initialize a new project
crules init my-rules-project

# Create a new rule
crules create rule "validate-email" --type "validation"

# Deploy rules to production
crules deploy --env production

# Validate rules consistency
crules validate`
  },
  {
    label: 'JavaScript',
    value: 'javascript',
    content: `// Import the CRules client
import { CRules } from '@crules/client';

// Initialize the client
const crules = new CRules({
  apiKey: process.env.CRULES_API_KEY,
  environment: 'production'
});

// Fetch and apply rules
async function applyRules(data) {
  const rules = await crules.getRules('user-validation');
  const result = rules.execute(data);
  
  if (result.valid) {
    console.log('Validation passed');
  } else {
    console.error('Validation failed:', result.errors);
  }
}

applyRules(userData);`
  },
  {
    label: 'Python',
    value: 'python',
    content: `# Import the CRules client
from crules import Client

# Initialize the client
crules = Client(
    api_key=os.environ.get('CRULES_API_KEY'),
    environment='production'
)

# Fetch and apply rules
def apply_rules(data):
    rules = crules.get_rules('user-validation')
    result = rules.execute(data)
    
    if result.valid:
        print('Validation passed')
    else:
        print('Validation failed:', result.errors)

apply_rules(user_data)`
  }
]; 