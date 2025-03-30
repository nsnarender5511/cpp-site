import React from 'react';
import { FiZap, FiUsers, FiBox, FiCpu, FiGitBranch, FiCode } from 'react-icons/fi';

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export const features: Feature[] = [
  {
    title: 'Intelligent Automation',
    description: 'Leverage AI-powered agents to automate development tasks and workflows',
    iconName: 'FiZap'
  },
  {
    title: 'Collaborative Development',
    description: 'Work seamlessly with AI agents that understand your codebase and development needs',
    iconName: 'FiUsers'
  },
  {
    title: 'Modular Architecture',
    description: 'Extensible plugin system for custom agents and workflows',
    iconName: 'FiBox'
  },
  {
    title: 'Smart Processing',
    description: 'Efficient task handling with intelligent work distribution',
    iconName: 'FiCpu'
  },
  {
    title: 'Version Control Integration',
    description: 'Native Git support for seamless code management',
    iconName: 'FiGitBranch'
  },
  {
    title: 'Code Generation',
    description: 'AI-assisted code generation and optimization',
    iconName: 'FiCode'
  }
];

export const iconMap = {
  FiZap,
  FiUsers, 
  FiBox,
  FiCpu,
  FiGitBranch,
  FiCode
};
