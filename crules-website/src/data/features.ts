import React from 'react';
import { FiLock, FiRefreshCw, FiZap, FiServer, FiCpu, FiAward } from 'react-icons/fi';

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export const features: Feature[] = [
  {
    title: 'Centralized Rules Management',
    description: 'Manage business rules in one place to ensure consistency across applications',
    iconName: 'FiServer'
  },
  {
    title: 'Real-time Synchronization',
    description: 'Changes to rules are instantly propagated to all connected services',
    iconName: 'FiRefreshCw'
  },
  {
    title: 'Intelligent Validation',
    description: 'Advanced validation ensures your rules are consistent and complete',
    iconName: 'FiAward'
  },
  {
    title: 'Secure Access Control',
    description: 'Fine-grained permissions control who can view and modify rules',
    iconName: 'FiLock'
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed with minimal overhead in production environments',
    iconName: 'FiZap'
  },
  {
    title: 'AI-Powered Agents',
    description: 'Intelligent agents help optimize and maintain your rule sets',
    iconName: 'FiCpu'
  }
];

// Map of icon components for rendering
export const iconMap = {
  FiServer,
  FiRefreshCw,
  FiAward,
  FiLock,
  FiZap,
  FiCpu
}; 