import React from 'react';
import { FiLock, FiRefreshCw, FiZap, FiServer, FiCpu, FiAward } from 'react-icons/fi';

export const features = [
  {
    title: 'Centralized Rules Management',
    description: 'Manage business rules in one place to ensure consistency across applications',
    icon: <FiServer size={24} />
  },
  {
    title: 'Real-time Synchronization',
    description: 'Changes to rules are instantly propagated to all connected services',
    icon: <FiRefreshCw size={24} />
  },
  {
    title: 'Intelligent Validation',
    description: 'Advanced validation ensures your rules are consistent and complete',
    icon: <FiAward size={24} />
  },
  {
    title: 'Secure Access Control',
    description: 'Fine-grained permissions control who can view and modify rules',
    icon: <FiLock size={24} />
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed with minimal overhead in production environments',
    icon: <FiZap size={24} />
  },
  {
    title: 'AI-Powered Agents',
    description: 'Intelligent agents help optimize and maintain your rule sets',
    icon: <FiCpu size={24} />
  }
]; 