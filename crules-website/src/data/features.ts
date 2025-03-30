import React from 'react';
import { FiLock, FiRefreshCw, FiZap, FiServer, FiCpu, FiAward, FiBox, FiCode, FiGitBranch } from 'react-icons/fi';

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export const features: Feature[] = [
  {
    title: 'Centralized Rules Management',
    description: 'Maintain all your AI agent rules in one main location for consistency across projects',
    iconName: 'FiServer'
  },
  {
    title: 'Automatic Synchronization',
    description: 'Ensure all projects have the latest versions of your rules with simple sync commands',
    iconName: 'FiRefreshCw'
  },
  {
    title: 'Agent Ecosystem',
    description: 'Work with specialized AI agents for different tasks from planning to implementation',
    iconName: 'FiCpu'
  },
  {
    title: 'Secure Collaboration',
    description: 'Share rules with team members easily while maintaining proper access control',
    iconName: 'FiLock'
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed with minimal overhead in development environments',
    iconName: 'FiZap'
  },
  {
    title: 'Extensibility',
    description: 'Create custom agents by adding your own .mdc files in the rules directory',
    iconName: 'FiCode'
  }
];

// Map of icon components for rendering
export const iconMap = {
  FiServer,
  FiRefreshCw,
  FiAward,
  FiLock,
  FiZap,
  FiCpu,
  FiBox,
  FiCode,
  FiGitBranch
}; 